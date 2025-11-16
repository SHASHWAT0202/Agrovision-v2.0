import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Droplets, Sprout, Calendar, TrendingUp, AlertCircle } from "lucide-react";
import { useState } from "react";

interface SoilData {
  moistureLevel: number;
  recommendedCrops: string[];
  wateringSchedule: string;
  soilHealth: string;
  nutrients: { name: string; level: string; status: "good" | "warning" | "critical" }[];
}

const SoilCropSection = () => {
  const [location, setLocation] = useState("");
  const [soilData, setSoilData] = useState<SoilData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!location.trim()) return;
    
    setLoading(true);
    
    // Mock API call - replace with actual API
    setTimeout(() => {
      const mockData: SoilData = {
        moistureLevel: 68,
        recommendedCrops: ["Tomatoes", "Corn", "Soybeans", "Wheat"],
        wateringSchedule: "Every 2-3 days, early morning",
        soilHealth: "Good",
        nutrients: [
          { name: "Nitrogen", level: "75%", status: "good" },
          { name: "Phosphorus", level: "45%", status: "warning" },
          { name: "Potassium", level: "82%", status: "good" },
          { name: "pH Level", level: "6.5", status: "good" },
        ]
      };
      setSoilData(mockData);
      setLoading(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "bg-primary/10 text-primary border-primary/20";
      case "warning": return "bg-accent/10 text-accent border-accent/20";
      case "critical": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="soil" className="py-24 bg-gradient-to-br from-amber-50/50 via-background to-yellow-50/50 dark:from-amber-950/20 dark:via-background dark:to-yellow-950/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-amber-400/30 bg-amber-50/50 dark:bg-amber-950/30">
            <Sprout className="w-4 h-4 mr-2 text-amber-600 dark:text-amber-400" />
            <span className="text-amber-600 dark:text-amber-400 font-semibold">Smart Agriculture</span>
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="gradient-text bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 dark:from-amber-400 dark:via-yellow-400 dark:to-orange-400">
              Soil & Crop Recommendations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized crop recommendations and soil analysis based on your location and conditions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* CTA to external soil analysis (no coordinate input) */}
          <Card className="mb-8 bg-gradient-card shadow-card border-0 animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Get Crop Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Get personalized crop recommendations based on your location — we will open the analyser in a new tab.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-primary/10 hover:bg-primary/20 border-primary/30"
                  onClick={() => window.open('https://smart-soil-ai-analyser.onrender.com/', '_blank')}
                >
                  Click here to get your crop recommendations based on location
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Dashboard */}
          {soilData && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-scale-in">
              {/* Soil Moisture */}
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-secondary" />
                    Soil Moisture Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-secondary">
                        {soilData.moistureLevel}%
                      </span>
                      <Badge className={getStatusColor(soilData.moistureLevel > 60 ? "good" : "warning")}>
                        {soilData.moistureLevel > 60 ? "Optimal" : "Needs Water"}
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-secondary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${soilData.moistureLevel}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Crops */}
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sprout className="h-5 w-5 text-primary" />
                    Recommended Crops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {soilData.recommendedCrops.map((crop, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Watering Schedule */}
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    Watering Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{soilData.wateringSchedule}</p>
                </CardContent>
              </Card>

              {/* Nutrient Levels */}
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Nutrient Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {soilData.nutrients.map((nutrient, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium">{nutrient.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{nutrient.level}</span>
                          <Badge className={getStatusColor(nutrient.status)}>
                            {nutrient.status === "good" && "✓"}
                            {nutrient.status === "warning" && "!"}
                            {nutrient.status === "critical" && "⚠"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Help Text */}
          {!soilData && (
            <Card className="bg-gradient-card shadow-soft border-0 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <AlertCircle className="h-5 w-5" />
                  <p>
                    Enter your farm's coordinates or address to get personalized soil analysis 
                    and crop recommendations powered by AI.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SoilCropSection;