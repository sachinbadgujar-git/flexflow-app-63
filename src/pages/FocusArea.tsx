import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import warriorImage from "@/assets/yoga-warrior.jpg";
import treeImage from "@/assets/yoga-tree.jpg";
import dogImage from "@/assets/yoga-dog.jpg";

const FocusArea = () => {
  const navigate = useNavigate();

  const exercises = [
    {
      id: 1,
      title: "Warrior Pose",
      image: warriorImage,
      benefits: [
        "Strengthens legs and ankles",
        "Improves balance and stability",
        "Opens chest and shoulders",
        "Builds focus and concentration"
      ]
    },
    {
      id: 2,
      title: "Tree Pose",
      image: treeImage,
      benefits: [
        "Improves balance and coordination",
        "Strengthens legs and core",
        "Enhances mental focus",
        "Promotes better posture"
      ]
    },
    {
      id: 3,
      title: "Downward Dog",
      image: dogImage,
      benefits: [
        "Stretches entire body",
        "Strengthens arms and shoulders",
        "Improves blood circulation",
        "Relieves stress and anxiety"
      ]
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
            Focus Areas
          </h1>
          <p className="text-muted-foreground text-center">
            Target specific areas with guided exercises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card
              key={exercise.id}
              onClick={() => navigate(`/exercise/${exercise.id}`, { state: exercise })}
              className="overflow-hidden cursor-pointer backdrop-blur-sm bg-card/50 border-border hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exercise.image}
                  alt={exercise.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
                <p className="text-sm text-muted-foreground">Tap to see benefits</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FocusArea;
