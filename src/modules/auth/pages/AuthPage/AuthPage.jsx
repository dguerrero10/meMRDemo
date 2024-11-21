import LoginForm from "../../components/LoginForm/LoginForm";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";

export default function AuthPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
