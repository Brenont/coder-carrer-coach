import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome</h1>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-2"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
        <button
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}