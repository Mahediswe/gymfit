// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   useEffect(() => {
//     if (token) {
//       fetchUserProfile(token);
//     }
//   }, [token]);

//   // Login function
//   // const login = async ({ email, password }) => {
//   //   try {
//   //     const res = await fetch("http://localhost:5000/api/users/login", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ email, password }),
//   //     });

//   //     const data = await res.json();
//   //     if (res.ok) {
//   //       setToken(data.token);
//   //       localStorage.setItem("token", data.token);
//   //       setUser(data.user);
//   //     } else {
//   //       alert(data.message || "Login failed");
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   const login = async ({ email, password }) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/users/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (res.ok && data.user && data.token) {
//       setToken(data.token);
//       localStorage.setItem("token", data.token);
//       setUser(data.user);
//     } else {
//       console.error("Login failed:", data.message || data);
//       alert(data.message || "Login failed");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     alert("Something went wrong");
//   }
// };


//   // Register function
//   const register = async ({ name, email, password }) => {
//     try {
//       const res = await fetch("http://localhost:5000/api/users/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setToken(data.token);
//         localStorage.setItem("token", data.token);
//         setUser(data.user);
//       } else {
//         alert(data.message || "Registration failed");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Fetch profile
//   const fetchUserProfile = async (token) => {
//     try {
//       const res = await fetch("http://localhost:5000/api/users/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setUser(data);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Logout
//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, token, login, register, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

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
