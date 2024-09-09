import LoginForm from "@/components/auth/LoginForm";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center bg-sky-500 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <LoginForm />
    </div>
  );
}
