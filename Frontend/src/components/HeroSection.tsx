import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, TrendingUp, Users, Droplets } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-teal-950/20">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 dark:border-primary/40 rounded-full text-primary dark:text-primary font-semibold shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Leaf className="w-5 h-5 animate-float" />
              <span>AI-Powered Smart Farming</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="gradient-text animate-gradient bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400">
                  AgroVision
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/80 dark:text-foreground/90 max-w-2xl leading-relaxed font-medium">
                Revolutionize your farming with <span className="text-primary font-bold">AI-driven insights</span>, 
                real-time monitoring, and smart recommendations for <span className="text-secondary font-bold">maximum yield</span> and sustainability.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary/80 shadow-elegant hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base font-semibold px-8"
                onClick={() => {
                  const element = document.querySelector('#weather');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all duration-300 text-base font-semibold px-8"
                onClick={() => {
                  window.open('https://www.youtube.com/watch?v=5fgNlH_eiYI', '_blank');
                }}
              >
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 glass-effect shadow-elegant border border-primary/20 hover:border-primary/40 card-hover group animate-scale-in">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">45%</p>
                  <p className="text-sm font-semibold text-muted-foreground">Yield Increase</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 glass-effect shadow-elegant border border-secondary/20 hover:border-secondary/40 card-hover group animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <p className="text-3xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">10K+</p>
                  <p className="text-sm font-semibold text-muted-foreground">Happy Farmers</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 glass-effect shadow-elegant border border-accent/20 hover:border-accent/40 card-hover group sm:col-span-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">30%</p>
                  <p className="text-sm font-semibold text-muted-foreground">Water Conservation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;