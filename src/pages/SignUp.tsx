import { useState } from "react";
import { signUpWithEmail } from "../services/authService";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { error } = await signUpWithEmail(email, password);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
        <input
          className="w-full px-3 py-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <PasswordInput
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        {error && <div className="text-red-600">{error}</div>}
        {success && (
          <div className="text-green-600">
            Sign up successful! Please check your email to confirm your account.
          </div>
        )}
      </form>
      <div className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}