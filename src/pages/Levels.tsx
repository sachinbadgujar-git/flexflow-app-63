import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import beginnerImage from "@/assets/beginner.jpg";
import intermediateImage from "@/assets/intermediate.jpg";
import advancedImage from "@/assets/advanced.jpg";

const Levels = () => {
  const navigate = useNavigate();

  const levels = [
    {
      title: "Beginner",
      image: beginnerImage,
      description: "Perfect for those starting their fitness journey",
      duration: "20-30 minutes",
      intensity: "Low to Moderate",
      focus: "Building foundation and proper form"
    },
    {
      title: "Intermediate",
      image: intermediateImage,
      description: "For those with consistent workout experience",
      duration: "30-45 minutes",
      intensity: "Moderate to High",
      focus: "Increasing strength and endurance"
    },
    {
      title: "Advanced",
      image: advancedImage,
      description: "Challenging workouts for experienced athletes",
      duration: "45-60 minutes",
      intensity: "High to Very High",
      focus: "Maximum performance and results"
    }
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
            Choose Your Level
          </h1>
          <p className="text-muted-foreground text-center">
            Select the difficulty level that matches your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((level) => (
            <Card
              key={level.title}
              className="overflow-hidden backdrop-blur-sm bg-card/50 border-border hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={level.image}
                  alt={level.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{level.title}</CardTitle>
                <CardDescription>{level.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{level.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Intensity:</span>
                  <span className="font-medium">{level.intensity}</span>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">{level.focus}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Levels;
