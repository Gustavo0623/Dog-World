import LoginForm from "./components/login-form";
import { AuthProvider } from "./components/authContext";

export default function Home() {
  return (
    <AuthProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LoginForm/>
      </main>
    </AuthProvider>
  )
}
