import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null); // State to hold user information

  console.log("Current user:", user); // Log user state for debugging

  return (
    <BrowserRouter>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* UserDashboard route (protected) */}
        <Route path="/userdashboard" element={<PrivateRoute user={user}><UserDashboard user={user} /></PrivateRoute>} />


        {/* Root route (redirect based on user state) */}
        <Route
  path="/"
  element={
    user ? <Navigate to="/userdashboard"  /> : <Navigate to="/login" />
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

// PrivateRoute component to handle authentication
const PrivateRoute = ({ children, user }) => {
  return user ? children : <Navigate to="/login" replace />;
};

export default App;





