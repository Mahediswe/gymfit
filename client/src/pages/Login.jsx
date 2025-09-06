import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login({ email, password });
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className=" max-w-7xl mx-auto flex justify-center items-center p-24 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <label className="block text-lg font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>

        <input
          type="email"
          placeholder="Email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block text-lg font-medium text-gray-700">
          Password <span className="text-red-500">*</span>
        </label>

        <input
          type="password"
          placeholder="Password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Remember Me and Forget Password */}
        <div className="flex items-center justify-between mb-6">
          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">Remember Me</span>
          </div>

          {/* Forget Password Link */}
          <Link
            to="/forget-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forget Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Login
        </button>

        <div className="flex flex-row gap-10">
          <h1>Not a user? </h1>
          <Link
            to="/register"
            className="text-sm text-green-500 hover:underline  p-1"
          >
            Registation 
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
