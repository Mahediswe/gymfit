

import { createContext, useState, useEffect } from "react";
import { loginUser, registerUser, getProfile } from "../api/userApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Fetch profile when token changes
  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    }
  }, [token]);

  // 🔹 Login
  const login = async ({ email, password }) => {
    const data = await loginUser({ email, password });
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("token", data.token);
  };

  // 🔹 Register
  const register = async ({ name, email, password }) => {
    const data = await registerUser({ name, email, password });
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("token", data.token);
  };

  // 🔹 Profile
  const fetchUserProfile = async (token) => {
    try {
      const data = await getProfile(token);
      setUser(data);
    } catch (err) {
      console.error("Profile fetch failed", err);
      logout();
    }
  };

  // 🔹 Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
