import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import CoachTips from "./pages/CoachTips";
import Levels from "./pages/Levels";
import FocusArea from "./pages/FocusArea";
import ExerciseDetail from "./pages/ExerciseDetail";
import JustAtGym from "./pages/JustAtGym";
import WorkoutTracker from "./pages/WorkoutTracker";
import BMICalculator from "./pages/BMICalculator";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coach-tips" element={<CoachTips />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/focus-area" element={<FocusArea />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/just-at-gym" element={<JustAtGym />} />
          <Route path="/workout-tracker" element={<WorkoutTracker />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/history" element={<History />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
