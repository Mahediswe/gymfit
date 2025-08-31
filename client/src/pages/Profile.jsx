import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getProfile } from "../api/userApi";

const Profile = () => {
  const { user, token, logout } = useContext(AuthContext); 
  const [profile, setProfile] = useState(user || null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (token && !user) {   // যদি context এ user না থাকে
          const data = await getProfile(token);
          setProfile(data);
        }
      } catch (err) {
        console.log("Profile fetch error:", err);
      }
    };
    fetchProfile();
  }, [token, user]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p><span className="font-semibold">Name:</span> {profile.name}</p>
      <p><span className="font-semibold">Email:</span> {profile.email}</p>
      <p><span className="font-semibold">Role:</span> {profile.role}</p>

      {/* Logout button */}
      <button 
        onClick={logout} 
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
