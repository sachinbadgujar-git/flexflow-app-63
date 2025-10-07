import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Info, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  const menuItems = [
    { icon: Info, label: "About Us", content: "FitLife is your ultimate fitness companion, designed to help you achieve your health and wellness goals with personalized workouts, expert coaching, and comprehensive tracking tools." },
    { icon: Mail, label: "Contact Us", content: "Get in touch with our support team at support@fitlife.com or call us at +1 (555) 123-4567. We're here to help you on your fitness journey!" },
    { icon: FileText, label: "Description", content: "FitLife offers comprehensive workout tracking, BMI calculations, personalized coaching tips, and level-based training programs suitable for beginners to advanced athletes." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/50 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FitLife
          </h1>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-80">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-4">
                {menuItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <item.icon className="h-5 w-5 text-primary" />
                      {item.label}
                    </div>
                    <p className="text-sm text-muted-foreground pl-7">
                      {item.content}
                    </p>
                  </div>
                ))}
                <Button
                  onClick={handleLogout}
                  variant="destructive"
                  className="w-full mt-8"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
