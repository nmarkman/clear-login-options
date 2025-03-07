
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/LoginModal";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    setIsModalOpen(false);
    toast({
      title: "Logged in successfully",
      description: "Welcome back to your organization account.",
    });
  };

  const handleGuestLogin = () => {
    setIsModalOpen(false);
    toast({
      title: "Logged in as guest",
      description: "You now have access to co-marketed programs with limited functionality.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/6be1d3b9-9b09-485a-8930-43b62ee6755e.png" 
              alt="Organization Logo"
              className="h-8 w-auto"
            />
            <div className="text-xl font-semibold text-brand-teal">Marketing Center</div>
          </div>
          <div className="ml-auto">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-brand-teal"
              onClick={() => setIsModalOpen(true)}
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="container py-8 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <section className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Marketing Dashboard</h1>
                <p className="text-muted-foreground">
                  Access your marketing analytics and co-marketing programs.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {/* Cards */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div 
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover-lift"
                  >
                    <div className="font-medium mb-1">Analytics Card {i + 1}</div>
                    <div className="text-sm text-muted-foreground">View your marketing metrics</div>
                    <div className="mt-4 h-20 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Chart Preview</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  className="bg-brand-teal hover:bg-brand-teal/90"
                  onClick={() => setIsModalOpen(true)}
                >
                  Login to Access Full Features
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Login Modal */}
      <LoginModal
        open={isModalOpen}
        organizationName="Marketing Center"
        onClose={() => setIsModalOpen(false)}
        onLogin={handleLogin}
        onGuestLogin={handleGuestLogin}
      />
    </div>
  );
};

export default Index;
