import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Droplets, 
  Sprout, 
  Sun, 
  Cloud, 
  Snowflake,
  TreePine,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Info,
  MapPin,
  Thermometer
} from 'lucide-react';
import './FarmerCalendar.css';
import CropDetailModal from './CropDetailModal';
import { cropDatabase, regionalAdaptations, weatherAlerts, CropInfo } from '@/data/farmerCalendarData';

// Seasonal data for farming activities
const seasonalData = {
  spring: {
    name: 'Spring',
    months: ['March', 'April', 'May'],
    icon: Sprout,
    color: 'bg-green-100 border-green-300',
    textColor: 'text-green-700',
    crops: {
      vegetables: ['Tomatoes', 'Peppers', 'Cucumbers', 'Lettuce', 'Spinach', 'Carrots'],
      grains: ['Spring Wheat', 'Barley', 'Oats'],
      legumes: ['Peas', 'Beans', 'Lentils']
    },
    activities: [
      'Soil preparation and testing',
      'Seed starting indoors',
      'Direct seeding of cool-season crops',
      'Fertilizer application',
      'Irrigation system setup'
    ],
    watering: {
      frequency: '2-3 times per week',
      amount: '1-1.5 inches per week',
      tips: 'Water deeply but less frequently to encourage root growth'
    },
    weatherTips: 'Watch for late frost warnings and protect tender plants'
  },
  summer: {
    name: 'Summer',
    months: ['June', 'July', 'August'],
    icon: Sun,
    color: 'bg-yellow-100 border-yellow-300',
    textColor: 'text-yellow-700',
    crops: {
      vegetables: ['Corn', 'Squash', 'Zucchini', 'Eggplant', 'Okra', 'Sweet Potatoes'],
      grains: ['Rice', 'Millet', 'Sorghum'],
      legumes: ['Black-eyed Peas', 'Lima Beans']
    },
    activities: [
      'Regular weeding and cultivation',
      'Pest and disease monitoring',
      'Harvest early summer crops',
      'Succession planting',
      'Mulching to retain moisture'
    ],
    watering: {
      frequency: 'Daily or every other day',
      amount: '1.5-2 inches per week',
      tips: 'Water early morning to reduce evaporation and disease risk'
    },
    weatherTips: 'Provide shade for sensitive crops during extreme heat'
  },
  monsoon: {
    name: 'Monsoon',
    months: ['July', 'August', 'September'],
    icon: Cloud,
    color: 'bg-blue-100 border-blue-300',
    textColor: 'text-blue-700',
    crops: {
      vegetables: ['Gourds', 'Ridge Gourd', 'Bitter Gourd', 'Snake Gourd'],
      grains: ['Rice', 'Maize', 'Sugarcane'],
      legumes: ['Black Gram', 'Green Gram', 'Pigeon Pea']
    },
    activities: [
      'Drainage system maintenance',
      'Disease prevention measures',
      'Transplanting rice seedlings',
      'Weed management',
      'Harvest rainwater storage'
    ],
    watering: {
      frequency: 'As needed (natural rainfall)',
      amount: 'Monitor soil moisture',
      tips: 'Ensure proper drainage to prevent waterlogging'
    },
    weatherTips: 'Prepare for heavy rains and potential flooding'
  },
  winter: {
    name: 'Winter',
    months: ['December', 'January', 'February'],
    icon: Snowflake,
    color: 'bg-card border-border',
    textColor: 'text-foreground',
    crops: {
      vegetables: ['Cabbage', 'Cauliflower', 'Broccoli', 'Peas', 'Radish', 'Turnip'],
      grains: ['Winter Wheat', 'Rye', 'Chickpea'],
      legumes: ['Broad Beans', 'Field Peas']
    },
    activities: [
      'Cold protection for plants',
      'Greenhouse management',
      'Equipment maintenance',
      'Soil improvement with compost',
      'Planning for next season'
    ],
    watering: {
      frequency: '1-2 times per week',
      amount: '0.5-1 inch per week',
      tips: 'Water during warmer parts of the day to prevent freezing'
    },
    weatherTips: 'Protect crops from frost and cold winds'
  }
};

const monthlyTasks = {
  January: ['Prune fruit trees', 'Plan crop rotation', 'Order seeds', 'Maintain equipment'],
  February: ['Start seed indoors', 'Prepare soil', 'Apply organic matter', 'Check irrigation systems'],
  March: ['Plant cool-season crops', 'Fertilize fields', 'Begin pest monitoring', 'Plant fruit trees'],
  April: ['Direct seed vegetables', 'Transplant seedlings', 'Apply mulch', 'Start composting'],
  May: ['Plant warm-season crops', 'Install supports', 'Monitor for pests', 'Harvest early crops'],
  June: ['Regular watering', 'Side-dress crops', 'Harvest spring crops', 'Plant heat-tolerant varieties'],
  July: ['Deep watering', 'Pest control', 'Harvest summer crops', 'Preserve produce'],
  August: ['Continue harvesting', 'Plant fall crops', 'Collect rainwater', 'Weed management'],
  September: ['Harvest main crops', 'Plant winter crops', 'Prepare storage', 'Soil testing'],
  October: ['Harvest root crops', 'Plant cover crops', 'Collect seeds', 'Prepare for winter'],
  November: ['Final harvest', 'Clean up fields', 'Store equipment', 'Plan next year'],
  December: ['Equipment maintenance', 'Study catalogs', 'Greenhouse management', 'Rest and reflect']
};

const FarmerCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedSeason, setSelectedSeason] = useState('spring');
  const [animationKey, setAnimationKey] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState('north');
  const [selectedCrop, setSelectedCrop] = useState<CropInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const regions = {
    north: { name: 'North India', climate: 'Continental' },
    south: { name: 'South India', climate: 'Tropical' },
    west: { name: 'West India', climate: 'Arid' },
    east: { name: 'East India', climate: 'Humid Subtropical' }
  };

  const getCurrentSeason = (month: number) => {
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 6 && month <= 8) return 'monsoon';
    return 'winter';
  };

  useEffect(() => {
    const season = getCurrentSeason(currentMonth);
    setSelectedSeason(season);
  }, [currentMonth]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = direction === 'next' ? (prev + 1) % 12 : (prev - 1 + 12) % 12;
      return newMonth;
    });
    setAnimationKey(prev => prev + 1);
  };

  const handleCropClick = (cropName: string) => {
    const crop = cropDatabase[cropName.toLowerCase().replace(/\s+/g, '')];
    if (crop) {
      setSelectedCrop(crop);
      setIsModalOpen(true);
    }
  };

  const currentSeason = seasonalData[selectedSeason as keyof typeof seasonalData];
  const SeasonIcon = currentSeason.icon;
  const currentRegionData = regionalAdaptations[selectedRegion as keyof typeof regionalAdaptations];

  return (
    <div id="calendar" className="max-w-7xl mx-auto px-4 py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="text-center mb-16 relative z-10">
        <Badge variant="outline" className="mb-4 px-4 py-2 border-green-400/30 bg-green-50/50 dark:bg-green-950/30">
          <Calendar className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
          <span className="text-green-600 dark:text-green-400 font-semibold">Smart Planning</span>
        </Badge>
        <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
          <span className="gradient-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400">
            Farmer's Calendar
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your complete guide to seasonal farming activities, crop recommendations, and watering schedules
        </p>
      </div>

      {/* Month Navigator */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth('prev')}
              className="flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <div className="text-center flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {months[currentMonth]} 2025
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {monthlyTasks[months[currentMonth] as keyof typeof monthlyTasks]?.map((task, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {task}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth('next')}
              className="flex items-center"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Region Selector */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-foreground mb-2">Select Your Region</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(regions).map(([key, region]) => (
                <Button
                  key={key}
                  variant={selectedRegion === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRegion(key)}
                  className="animate-bounce-in"
                >
                  {region.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {region.climate}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Season Selector */}
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(seasonalData).map(([key, season]) => {
            const Icon = season.icon;
            return (
              <Card
                key={key}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedSeason === key ? season.color : 'bg-card hover:bg-accent'
                }`}
                onClick={() => {
                  setSelectedSeason(key);
                  setAnimationKey(prev => prev + 1);
                }}
              >
                <CardContent className="p-4 text-center">
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${season.textColor}`} />
                  <h3 className={`font-semibold ${season.textColor}`}>{season.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {season.months.join(', ')}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div key={animationKey} className="grid md:grid-cols-3 gap-8 animate-fade-in">
        {/* Seasonal Crops */}
        <Card className="md:col-span-2">
          <CardHeader className={`${currentSeason.color} rounded-t-lg`}>
            <CardTitle className={`flex items-center ${currentSeason.textColor}`}>
              <SeasonIcon className="w-6 h-6 mr-2" />
              {currentSeason.name} Crops
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="vegetables" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
                <TabsTrigger value="grains">Grains</TabsTrigger>
                <TabsTrigger value="legumes">Legumes</TabsTrigger>
              </TabsList>
              
              {Object.entries(currentSeason.crops).map(([category, crops]) => (
                <TabsContent key={category} value={category} className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {crops.map((crop, index) => (
                      <div
                        key={crop}
                        className="flex items-center justify-between p-3 bg-card rounded-lg hover:bg-accent hover:scale-105 transition-all cursor-pointer animate-slide-in border"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => handleCropClick(crop)}
                      >
                        <div className="flex items-center">
                          <Leaf className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm font-medium">{crop}</span>
                        </div>
                        <Info className="w-4 h-4 text-blue-500 hover:text-blue-700 transition-colors" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Watering Schedule */}
        <Card>
          <CardHeader className="bg-blue-50 rounded-t-lg">
            <CardTitle className="flex items-center text-blue-700">
              <Droplets className="w-6 h-6 mr-2" />
              Watering Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="animate-pulse-gentle">
                <h4 className="font-semibold text-foreground mb-2">Frequency</h4>
                <p className="text-primary font-medium">{currentSeason.watering.frequency}</p>
              </div>
              
              <div className="animate-pulse-gentle" style={{ animationDelay: '0.2s' }}>
                <h4 className="font-semibold text-foreground mb-2">Amount</h4>
                <p className="text-primary font-medium">{currentSeason.watering.amount}</p>
              </div>
              
              <div className="animate-pulse-gentle" style={{ animationDelay: '0.4s' }}>
                <h4 className="font-semibold text-foreground mb-2">Pro Tips</h4>
                <p className="text-muted-foreground text-sm">{currentSeason.watering.tips}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seasonal Activities */}
        <Card className="md:col-span-2">
          <CardHeader className="bg-orange-50 dark:bg-orange-950/30 rounded-t-lg">
            <CardTitle className="flex items-center text-orange-700 dark:text-orange-400">
              <TreePine className="w-6 h-6 mr-2" />
              Seasonal Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-3">
              {currentSeason.activities.map((activity, index) => (
                <div
                  key={activity}
                  className="flex items-start p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-orange-400 dark:border-orange-500 animate-slide-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weather Tips */}
        <Card>
          <CardHeader className="bg-purple-50 dark:bg-purple-950/30 rounded-t-lg">
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-400">
              <Sun className="w-6 h-6 mr-2" />
              Weather Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed animate-fade-in font-medium">
              {currentSeason.weatherTips}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Regional Insights */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="bg-indigo-50 dark:bg-indigo-950/30 rounded-t-lg">
            <CardTitle className="flex items-center text-indigo-700 dark:text-indigo-400">
              <MapPin className="w-6 h-6 mr-2" />
              Regional Insights - {regions[selectedRegion as keyof typeof regions].name}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Climate Type</h4>
                <Badge variant="outline" className="text-indigo-600 dark:text-indigo-400 border-indigo-300 dark:border-indigo-700 font-semibold">
                  {currentRegionData.climate}
                </Badge>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Specialty Crops</h4>
                <div className="flex flex-wrap gap-2">
                  {currentRegionData.specialCrops.map((crop, index) => (
                    <Badge key={crop} variant="secondary" className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      {crop}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Common Challenges</h4>
                <ul className="space-y-1">
                  {currentRegionData.challenges.map((challenge, index) => (
                    <li key={challenge} className="flex items-start text-sm text-muted-foreground animate-slide-in" style={{ animationDelay: `${index * 0.15}s` }}>
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-2"></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Best Practices</h4>
                <ul className="space-y-1">
                  {currentRegionData.bestPractices.map((practice, index) => (
                    <li key={practice} className="flex items-start text-sm text-muted-foreground animate-slide-in" style={{ animationDelay: `${index * 0.15}s` }}>
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2"></div>
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Alerts */}
        <Card>
          <CardHeader className="bg-red-50 dark:bg-red-950/30 rounded-t-lg">
            <CardTitle className="flex items-center text-red-700 dark:text-red-400">
              <Thermometer className="w-6 h-6 mr-2" />
              Weather Alerts & Precautions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {Object.entries(weatherAlerts).map(([key, alert], index) => (
                <div key={key} className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-400 dark:border-yellow-500 rounded-r-lg animate-bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{alert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 capitalize">{key} Alert</h4>
                      <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                      <div className="flex flex-wrap gap-1">
                        {alert.actions.map((action, actionIndex) => (
                          <Badge key={actionIndex} variant="secondary" className="text-xs bg-primary/10 text-primary border border-primary/20">
                            {action}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Crop Detail Modal */}
      <CropDetailModal
        crop={selectedCrop}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCrop(null);
        }}
      />

    </div>
  );
};

export default FarmerCalendar;