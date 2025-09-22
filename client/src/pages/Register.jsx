// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { register } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await register({ name, email, password });
//       navigate("/profile");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto flex justify-center items-center h-[600px] bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <label className="block text-lg font-medium text-gray-700">
//           Name <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full p-2 border mb-4 rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <label className="block text-lg font-medium text-gray-700">
//           Email <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border mb-4 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label className="block text-lg font-medium text-gray-700">
//           Password <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border mb-4 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://gymfit-backend.vercel.app/api/auth/register",
        formData
      );
      console.log("Registration successful:", res.data);
      navigate("/login"); // registration successful -> go to login
    } catch (err) {
      console.error("Register error:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
