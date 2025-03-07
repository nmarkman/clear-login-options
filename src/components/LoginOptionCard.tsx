
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LoginOptionCardProps {
  title: string;
  description: string;
  buttonText: string;
  isPrimary?: boolean;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const LoginOptionCard = ({
  title,
  description,
  buttonText,
  isPrimary = false,
  icon,
  onClick,
  className,
}: LoginOptionCardProps) => {
  return (
    <Card 
      className={cn(
        "w-full transition-all duration-300 hover-lift animate-fade-up",
        isPrimary ? "border-brand-teal/30 bg-white" : "border-gray-200 bg-gray-50/50",
        className
      )}
    >
      <CardHeader className="p-4 pb-1 space-y-1">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
            {icon}
          </div>
          <CardTitle className="text-base font-semibold">{title}</CardTitle>
        </div>
        <CardDescription className="text-balance text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-2">
        <Button 
          onClick={onClick} 
          variant={isPrimary ? "default" : "outline"}
          className={cn(
            "w-full text-sm font-medium transition-all duration-200",
            isPrimary 
              ? "bg-brand-teal hover:bg-brand-teal/90" 
              : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-brand-teal"
          )}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginOptionCard;
