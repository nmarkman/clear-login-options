
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building2, UserRound } from "lucide-react";
import LoginOptionCard from "./LoginOptionCard";

interface LoginModalProps {
  open: boolean;
  organizationName?: string;
  onClose: () => void;
  onLogin: () => void;
  onGuestLogin: () => void;
}

const LoginModal = ({
  open,
  organizationName = "Organization",
  onClose,
  onLogin,
  onGuestLogin,
}: LoginModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/10 to-transparent h-16 -z-10"></div>
        <DialogHeader className="p-4 pb-2">
          <DialogTitle className="text-xl font-semibold tracking-tight">
            You've been signed out
          </DialogTitle>
          <DialogDescription className="text-balance text-sm text-muted-foreground">
            How would you like to continue?
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 pt-0 space-y-3">
          <LoginOptionCard
            title={`Login to ${organizationName}`}
            description="Sign in securely to your organization account."
            buttonText="LOGIN"
            isPrimary={true}
            icon={<Building2 className="h-4 w-4" />}
            onClick={onLogin}
          />
          
          <LoginOptionCard
            title="Login as Guest"
            description="Access your co-marketed programs with limited functionality."
            buttonText="LOGIN AS GUEST"
            icon={<UserRound className="h-4 w-4" />}
            onClick={onGuestLogin}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
