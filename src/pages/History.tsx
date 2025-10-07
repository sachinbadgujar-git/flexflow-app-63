import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Dumbbell, Target, TrendingUp } from "lucide-react";

const History = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Calendar, label: "Workouts This Week", value: "5", color: "from-purple-500 to-pink-500" },
    { icon: Dumbbell, label: "Total Exercises", value: "42", color: "from-blue-500 to-cyan-500" },
    { icon: Target, label: "Goals Achieved", value: "8", color: "from-orange-500 to-red-500" },
    { icon: TrendingUp, label: "Streak Days", value: "12", color: "from-green-500 to-emerald-500" },
  ];

  const recentWorkouts = [
    { date: "Today", exercises: 8, duration: "45 min" },
    { date: "Yesterday", exercises: 10, duration: "52 min" },
    { date: "2 days ago", exercises: 6, duration: "38 min" },
    { date: "3 days ago", exercises: 9, duration: "48 min" },
    { date: "4 days ago", exercises: 7, duration: "41 min" },
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

        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Your Progress
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="backdrop-blur-sm bg-card/50 border-border hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="backdrop-blur-sm bg-card/50 border-border shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="text-2xl">Recent Workouts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentWorkouts.map((workout, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div>
                  <h3 className="font-semibold">{workout.date}</h3>
                  <p className="text-sm text-muted-foreground">
                    {workout.exercises} exercises
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{workout.duration}</p>
                  <p className="text-xs text-muted-foreground">Duration</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default History;
