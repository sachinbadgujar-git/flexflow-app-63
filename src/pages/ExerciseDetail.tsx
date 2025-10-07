import { useNavigate, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const ExerciseDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const exercise = location.state;

  if (!exercise) {
    return (
      <Layout>
        <div className="container px-4 py-6">
          <Button onClick={() => navigate("/focus-area")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Focus Area
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 py-6 max-w-4xl mx-auto animate-fade-in">
        <Button
          variant="ghost"
          onClick={() => navigate("/focus-area")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Focus Area
        </Button>

        <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] mb-8 max-w-2xl mx-auto">
          <img
            src={exercise.image}
            alt={exercise.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {exercise.title}
        </h1>

        <Card className="backdrop-blur-sm bg-card/50 border-border shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="text-2xl">Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {exercise.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ExerciseDetail;
