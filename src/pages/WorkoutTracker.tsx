import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Workout {
  id: number;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
}

const WorkoutTracker = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const addWorkout = () => {
    if (!exercise || !sets || !reps || !weight) {
      toast.error("Please fill in all fields");
      return;
    }

    const newWorkout: Workout = {
      id: Date.now(),
      exercise,
      sets: parseInt(sets),
      reps: parseInt(reps),
      weight: parseFloat(weight),
    };

    setWorkouts([...workouts, newWorkout]);
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
    toast.success("Workout added!");
  };

  const removeWorkout = (id: number) => {
    setWorkouts(workouts.filter(w => w.id !== id));
    toast.success("Workout removed");
  };

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

        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Workout Tracker
        </h1>

        <Card className="mb-6 backdrop-blur-sm bg-card/50 border-border shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Add Exercise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="exercise">Exercise Name</Label>
              <Input
                id="exercise"
                placeholder="e.g., Bench Press"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sets">Sets</Label>
                <Input
                  id="sets"
                  type="number"
                  placeholder="3"
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reps">Reps</Label>
                <Input
                  id="reps"
                  type="number"
                  placeholder="10"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.5"
                  placeholder="50"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={addWorkout} className="w-full bg-gradient-to-r from-primary to-secondary">
              <Plus className="mr-2 h-4 w-4" />
              Add Exercise
            </Button>
          </CardContent>
        </Card>

        {workouts.length > 0 && (
          <Card className="backdrop-blur-sm bg-card/50 border-border shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle>Today's Workout</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {workouts.map((workout) => (
                <div
                  key={workout.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{workout.exercise}</h3>
                    <p className="text-sm text-muted-foreground">
                      {workout.sets} sets × {workout.reps} reps @ {workout.weight}kg
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeWorkout(workout.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default WorkoutTracker;
