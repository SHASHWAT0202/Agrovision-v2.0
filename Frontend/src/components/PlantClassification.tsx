import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, ExternalLink, Camera, Sparkles } from "lucide-react";

const PlantClassification = () => {
  const handleRedirectToPlantID = () => {
    window.open("https://plant-identifier-frontend.vercel.app/", "_blank");
  };

  return (
    <section id="plant-classification" className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-green-400/30 bg-green-50/50 dark:bg-green-950/30">
            <Leaf className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-semibold">AI Plant Detection</span>
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="gradient-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400">
              Plant Identification
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Identify any plant species instantly using our advanced AI-powered plant detection system.
            Simply upload an image and get detailed information about the plant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in">
            <Card className="bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-950/30 shadow-xl border-0">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-full w-fit">
                  <Camera className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl mb-4">Advanced Plant AI</CardTitle>
                <p className="text-muted-foreground">
                  Experience our cutting-edge plant identification technology that can recognize 
                  thousands of plant species with high accuracy.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Instant plant species identification</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Detailed care instructions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Disease detection & treatment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Plant health analysis</span>
                  </div>
                </div>

                <Button 
                  onClick={handleRedirectToPlantID}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Launch Plant Identifier
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Opens in a new tab  Powered by advanced AI technology
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in space-y-6">
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  What You Can Identify
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl mb-2"></div>
                    <div className="text-sm font-medium">Flowers</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl mb-2"></div>
                    <div className="text-sm font-medium">Herbs</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl mb-2"></div>
                    <div className="text-sm font-medium">Trees</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-2xl mb-2"></div>
                    <div className="text-sm font-medium">Crops</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  AI-Powered Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    95%+ Accuracy
                  </Badge>
                  <span className="text-sm">Species identification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Real-time
                  </Badge>
                  <span className="text-sm">Instant analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    10,000+
                  </Badge>
                  <span className="text-sm">Plant species database</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantClassification;