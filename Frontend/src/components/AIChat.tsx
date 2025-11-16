import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Bot, ExternalLink } from "lucide-react";
import { useState } from "react";

// Update this URL to point to your agrobot.html page
const AGROBOT_URL = "/agrobot.html";

const AIChat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const openAgrobotPage = () => {
    // Open the agrobot.html page in a new tab
    window.open(AGROBOT_URL, "_blank");
  };

  return (
    <>
      {/* Floating Chat Widget - Opens external chatbot when clicked */}
      <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
        <Button
          onClick={openAgrobotPage}
          className="w-16 h-16 rounded-full shadow-glow animate-glow"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Section for main page */}
      <section id="chat" className="py-24 bg-gradient-to-br from-purple-50/50 via-background to-indigo-50/50 dark:from-purple-950/20 dark:via-background dark:to-indigo-950/20 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-purple-400/30 bg-purple-50/50 dark:bg-purple-950/30">
              <MessageCircle className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-600 dark:text-purple-400 font-semibold">AI Assistant</span>
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              <span className="gradient-text bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400">
                Smart Farming Assistant
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant answers to your farming questions with our AI-powered chatbot.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <Card className="glass-effect shadow-elegant border border-purple-200/30 dark:border-purple-800/30 p-12 card-hover">
              <div className="space-y-8">
                <Bot className="h-20 w-20 text-primary mx-auto animate-float drop-shadow-lg" />
                <div className="space-y-4">
                  <h3 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    Start Chatting Now!
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Click the chat button to open our smart farming assistant and get answers
                    about farming, crop management, weather insights, and more.
                  </p>
                </div>
                <Button 
                  onClick={openAgrobotPage} 
                  className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-elegant hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-6 text-base font-semibold">
                  <MessageCircle className="w-4 h-4" />
                  <span>Open AI Chat</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIChat;