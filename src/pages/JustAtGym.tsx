import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, Wifi, Droplet, Wind, Zap } from "lucide-react";

const JustAtGym = () => {
  const navigate = useNavigate();

  const facilities = [
    { icon: Clock, title: "24/7 Access", description: "Workout anytime that fits your schedule" },
    { icon: Users, title: "Expert Trainers", description: "Professional guidance when you need it" },
    { icon: Wifi, title: "Free WiFi", description: "Stay connected during your workout" },
    { icon: Droplet, title: "Showers", description: "Clean facilities with modern amenities" },
    { icon: Wind, title: "Climate Control", description: "Perfect temperature year-round" },
    { icon: Zap, title: "Modern Equipment", description: "Latest fitness technology" },
  ];

  return (
    <Layout>
      <div className="container px-4 py-6 max-w-6xl mx-auto animate-fade-in">
        <Button
          variant="ghost"
          onClick={() => navigate("/home")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Just at Gym
          </h1>
          <p className="text-muted-foreground text-center">
            Everything you need for the perfect workout experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <Card
              key={facility.title}
              className="backdrop-blur-sm bg-card/50 border-border hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <facility.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{facility.title}</CardTitle>
                <CardDescription className="text-base">{facility.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mt-8 backdrop-blur-sm bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Gym Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <span className="font-medium">Monday - Friday</span>
              <span className="text-muted-foreground">24/7</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <span className="font-medium">Saturday - Sunday</span>
              <span className="text-muted-foreground">24/7</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <span className="font-medium">Holidays</span>
              <span className="text-muted-foreground">24/7</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default JustAtGym;
