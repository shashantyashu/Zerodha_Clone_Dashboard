import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://zerodha-clone-dashboard-kr6s.onrender.com",
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setUser(data.user);
        } else {
          setUser(null);
          navigate("/login"); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setUser(null);
        navigate("/login");
      }
    };

    verifyUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
