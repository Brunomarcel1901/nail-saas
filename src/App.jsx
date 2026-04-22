import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookingPage from "./pages/BookingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Simple auth placeholder (you can upgrade later)
import { auth } from "./firebase";

function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  if (!user) {
    return <Login />;
  }

  return children;
}

function PublicLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <BookingPage />
            </PublicLayout>
          }
        />

        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicLayout>
              <Signup />
            </PublicLayout>
          }
        />

        {/* DASHBOARD (PROTECTED) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}
