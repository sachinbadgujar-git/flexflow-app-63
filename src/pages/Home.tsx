import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { User, Target, Dumbbell, Activity, Calculator, History } from "lucide-react";
import gymHero from "@/assets/gym-hero.jpg";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/");
      }
    });
  }, [navigate]);

  const features = [
    { icon: User, title: "Coach Tips", color: "from-purple-500 to-pink-500", path: "/coach-tips" },
    { icon: Target, title: "Levels", color: "from-blue-500 to-cyan-500", path: "/levels" },
    { icon: Dumbbell, title: "Focus Area", color: "from-orange-500 to-red-500", path: "/focus-area" },
    { icon: Activity, title: "Just at Gym", color: "from-green-500 to-emerald-500", path: "/just-at-gym" },
    { icon: Calculator, title: "BMI Calculator", color: "from-yellow-500 to-orange-500", path: "/bmi-calculator" },
    { icon: History, title: "History", color: "from-indigo-500 to-purple-500", path: "/history" },
  ];

  return (
    <Layout>
      <div className="container px-4 py-6 max-w-7xl mx-auto">
        <div className="relative mb-8 overflow-hidden rounded-2xl shadow-[var(--shadow-card)] h-64">
          <img
            src={gymHero}
            alt="Gym workout"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl font-bold text-white mb-2">Start Your Journey</h2>
            <p className="text-white/90">Transform your body, transform your life</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              onClick={() => navigate(feature.path)}
              className="relative overflow-hidden cursor-pointer transition-all hover:scale-105 active:scale-95 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border hover:shadow-[var(--shadow-glow)] p-6"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-base">{feature.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
