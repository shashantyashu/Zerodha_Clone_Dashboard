import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                
                
                  <Summary />
                
              }
            />
            <Route
              path="/orders"
              element={
                // <ProtectedRoute>
                 
                  <Orders />
                // {/* </ProtectedRoute> */}
              }
            />
            <Route
              path="/holdings"
              element={
                // <ProtectedRoute>
                  
                  <Holdings />
                // {/* </ProtectedRoute> */}
              }
            />
            <Route
              path="/positions"
              element={
                // <ProtectedRoute>
                 
                  <Positions />
                // {/* </ProtectedRoute> */}
              }
            />
            <Route
              path="/funds"
              element={
                // <ProtectedRoute>
                  
                  <Funds />
                // {/* </ProtectedRoute> */}
              }
            />
            <Route
              path="/apps"
              element={
                // <ProtectedRoute>
                 
                  <Apps />
                // {/* </ProtectedRoute> */}
              }
            />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
};

export default Dashboard;
