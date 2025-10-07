import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const BMICalculator = () => {
  const navigate = useNavigate();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const calculatedBMI = w / (h * h);
      setBmi(parseFloat(calculatedBMI.toFixed(1)));
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", color: "text-blue-500", progress: 25 };
    if (bmi < 25) return { category: "Normal", color: "text-green-500", progress: 50 };
    if (bmi < 30) return { category: "Overweight", color: "text-yellow-500", progress: 75 };
    return { category: "Obese", color: "text-red-500", progress: 100 };
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
          BMI Calculator
        </h1>

        <Card className="backdrop-blur-sm bg-card/50 border-border shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Calculate Your BMI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
            <Button
              onClick={calculateBMI}
              className="w-full bg-gradient-to-r from-primary to-secondary"
            >
              Calculate BMI
            </Button>

            {bmi !== null && (
              <div className="space-y-4 pt-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {bmi}
                  </p>
                  <p className={`text-xl font-semibold mt-2 ${getBMICategory(bmi).color}`}>
                    {getBMICategory(bmi).category}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>BMI Range</Label>
                  <Progress value={getBMICategory(bmi).progress} className="h-3" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center p-3 rounded-lg bg-muted/30">
                    <p className="text-xs text-muted-foreground">Underweight</p>
                    <p className="font-semibold">&lt; 18.5</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/30">
                    <p className="text-xs text-muted-foreground">Normal</p>
                    <p className="font-semibold">18.5 - 24.9</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/30">
                    <p className="text-xs text-muted-foreground">Overweight</p>
                    <p className="font-semibold">25 - 29.9</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/30">
                    <p className="text-xs text-muted-foreground">Obese</p>
                    <p className="font-semibold">≥ 30</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BMICalculator;
