import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import coachImage from "@/assets/coach.jpg";

const CoachTips = () => {
  const navigate = useNavigate();

  const tips = [
    "Start with a 5-10 minute warm-up to prevent injuries",
    "Focus on proper form rather than heavy weights",
    "Stay hydrated - drink water before, during, and after workouts",
    "Listen to your body and rest when needed",
    "Consistency is more important than intensity",
    "Combine cardio with strength training for best results",
    "Get adequate sleep for muscle recovery (7-9 hours)",
    "Track your progress to stay motivated"
  ];

  return (
    <Layout>
      <div className="container px-4 py-6 max-w-4xl mx-auto animate-fade-in">
        <Button
          variant="ghost"
          onClick={() => navigate("/home")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] mb-6 max-w-sm mx-auto">
            <img
              src={coachImage}
              alt="Fitness Coach"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          <h1 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Coach Tips
          </h1>
          <p className="text-muted-foreground text-center">
            Expert advice to maximize your workout results
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-card/50 border-border shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="text-2xl">Essential Workout Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CoachTips;
