import { LucideIcon } from 'lucide-react';

// Types for the farmer calendar data
export interface CropInfo {
  name: string;
  plantingTime: string;
  harvestTime: string;
  waterRequirement: string;
  growthStages: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  yield: string;
}

export interface SeasonData {
  name: string;
  months: string[];
  icon: LucideIcon;
  color: string;
  textColor: string;
  crops: {
    vegetables: CropInfo[];
    grains: CropInfo[];
    legumes: CropInfo[];
  };
  activities: string[];
  watering: {
    frequency: string;
    amount: string;
    tips: string;
  };
  weatherTips: string;
}

// Enhanced crop data with growth stages
export const cropDatabase: Record<string, CropInfo> = {
  tomatoes: {
    name: 'Tomatoes',
    plantingTime: 'March-April',
    harvestTime: 'June-August',
    waterRequirement: 'High',
    growthStages: ['Seed', 'Seedling', 'Flowering', 'Fruit Development', 'Harvest'],
    difficulty: 'Medium',
    yield: '15-25 kg per plant'
  },
  wheat: {
    name: 'Wheat',
    plantingTime: 'November-December',
    harvestTime: 'March-April',
    waterRequirement: 'Medium',
    growthStages: ['Germination', 'Tillering', 'Stem Extension', 'Heading', 'Grain Filling'],
    difficulty: 'Easy',
    yield: '4-6 tonnes per hectare'
  },
  rice: {
    name: 'Rice',
    plantingTime: 'June-July',
    harvestTime: 'October-November',
    waterRequirement: 'Very High',
    growthStages: ['Germination', 'Seedling', 'Tillering', 'Panicle', 'Grain Filling'],
    difficulty: 'Medium',
    yield: '5-7 tonnes per hectare'
  },
  corn: {
    name: 'Corn',
    plantingTime: 'April-June',
    harvestTime: 'August-October',
    waterRequirement: 'Medium',
    growthStages: ['Germination', 'V6 Stage', 'Tasseling', 'Silking', 'Maturity'],
    difficulty: 'Easy',
    yield: '8-12 tonnes per hectare'
  }
};

// Regional adaptations
export const regionalAdaptations = {
  north: {
    climate: 'Continental',
    specialCrops: ['Wheat', 'Rice', 'Sugarcane', 'Cotton'],
    challenges: ['Extreme winters', 'Water scarcity'],
    bestPractices: ['Crop rotation', 'Winter protection', 'Water conservation']
  },
  south: {
    climate: 'Tropical',
    specialCrops: ['Rice', 'Coconut', 'Spices', 'Coffee'],
    challenges: ['High humidity', 'Pest pressure'],
    bestPractices: ['Disease management', 'Humidity control', 'Organic farming']
  },
  west: {
    climate: 'Arid',
    specialCrops: ['Cotton', 'Groundnut', 'Sugarcane', 'Grapes'],
    challenges: ['Water scarcity', 'Soil salinity'],
    bestPractices: ['Drip irrigation', 'Salt-tolerant crops', 'Soil management']
  },
  east: {
    climate: 'Humid Subtropical',
    specialCrops: ['Rice', 'Jute', 'Tea', 'Vegetables'],
    challenges: ['Flooding', 'High rainfall'],
    bestPractices: ['Drainage systems', 'Flood-resistant varieties', 'Water management']
  }
};

// Weather-based farming alerts
export const weatherAlerts = {
  heatwave: {
    icon: '🌡️',
    message: 'Heat wave warning! Increase watering frequency and provide shade to sensitive crops.',
    actions: ['Water early morning', 'Use mulch', 'Install shade nets']
  },
  drought: {
    icon: '🏜️',
    message: 'Drought conditions detected. Implement water conservation measures.',
    actions: ['Reduce water usage', 'Use drought-resistant varieties', 'Apply mulch']
  },
  flood: {
    icon: '🌊',
    message: 'Heavy rainfall expected. Prepare drainage systems.',
    actions: ['Check drainage', 'Harvest ready crops', 'Protect stored grain']
  },
  frost: {
    icon: '❄️',
    message: 'Frost warning! Protect tender plants from cold damage.',
    actions: ['Cover plants', 'Use heaters', 'Water before frost']
  }
};