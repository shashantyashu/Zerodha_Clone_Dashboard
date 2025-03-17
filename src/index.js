import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path="/*" element={ <Home /> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);
