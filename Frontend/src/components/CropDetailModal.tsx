import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar,
  Droplets,
  TrendingUp,
  Clock,
  Target,
  AlertTriangle
} from 'lucide-react';
import { CropInfo } from '@/data/farmerCalendarData';

interface CropDetailModalProps {
  crop: CropInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

const CropDetailModal: React.FC<CropDetailModalProps> = ({ crop, isOpen, onClose }) => {
  if (!crop) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getWaterRequirementLevel = (requirement: string) => {
    switch (requirement) {
      case 'Very High': return 90;
      case 'High': return 75;
      case 'Medium': return 50;
      case 'Low': return 25;
      default: return 0;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Target className="w-6 h-6 mr-2 text-green-600" />
            {crop.name} - Detailed Guide
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-2">
          {/* Basic Info Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                <h3 className="font-semibold text-blue-800">Planting Season</h3>
              </div>
              <p className="text-blue-700">{crop.plantingTime}</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-800">Harvest Time</h3>
              </div>
              <p className="text-green-700">{crop.harvestTime}</p>
            </div>
          </div>

          {/* Difficulty and Yield */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Difficulty Level
              </h3>
              <Badge className={getDifficultyColor(crop.difficulty)}>
                {crop.difficulty}
              </Badge>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold mb-2 flex items-center text-purple-800">
                <Target className="w-4 h-4 mr-2" />
                Expected Yield
              </h3>
              <p className="text-purple-700">{crop.yield}</p>
            </div>
          </div>

          {/* Water Requirements */}
          <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold flex items-center text-cyan-800">
                <Droplets className="w-4 h-4 mr-2" />
                Water Requirements
              </h3>
              <Badge variant="outline" className="text-cyan-700">
                {crop.waterRequirement}
              </Badge>
            </div>
            <Progress 
              value={getWaterRequirementLevel(crop.waterRequirement)} 
              className="w-full h-3"
            />
            <p className="text-sm text-cyan-600 mt-2">
              {getWaterRequirementLevel(crop.waterRequirement)}% water intensity
            </p>
          </div>

          {/* Growth Stages Timeline */}
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold mb-4 flex items-center text-amber-800">
              <Clock className="w-4 h-4 mr-2" />
              Growth Stages Timeline
            </h3>
            <div className="space-y-3">
              {crop.growthStages.map((stage, index) => (
                <div key={stage} className="flex items-center animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-amber-800">{stage}</span>
                  </div>
                  <div className="w-8 h-1 bg-amber-300 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Growing Tips */}
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h3 className="font-semibold mb-3 text-emerald-800">Growing Tips</h3>
            <ul className="space-y-2 text-emerald-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                Ensure proper soil preparation before planting
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                Monitor for pests and diseases regularly
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                Apply fertilizers according to growth stage
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                Maintain consistent watering schedule
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CropDetailModal;