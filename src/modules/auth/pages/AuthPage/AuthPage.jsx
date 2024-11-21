import { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { useLocation } from "react-router-dom";

export default function AuthPage() {
  const [onLoginPage, setOnLoginPage] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/auth') {
      document.body.classList.add("no-overflow");
    } else {
      document.body.classList.remove("no-overflow");
    }
  }, [location])

  return (
    <AuthLayout>
      {onLoginPage && <LoginForm setOnLoginPage={setOnLoginPage} /> }
      {!onLoginPage && <SignupForm setOnLoginPage={setOnLoginPage} /> }
    </AuthLayout>
  );
}
