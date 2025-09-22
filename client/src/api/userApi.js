//import axios from "axios";

const API_URL = "https://gymfit-backend.vercel.app/api/users/"; // backend URL

// Register
export const registerUser = async ({ name, email, password }) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Registration failed");
  return data; // { user, token }
};

// Login
export const loginUser = async ({ email, password }) => {
  const res = await fetch(`${ API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data; // { user, token }
};

// Get Profile
// 🔹 Profile
export const getProfile = async (token) => {
  const res = await fetch(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to fetch profile");
  return data; // { _id, name, email, ... }
};
