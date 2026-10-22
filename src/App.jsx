
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import Flights from "./pages/Flights";
import Weather from "./pages/Weather";
import Resources from "./pages/Resources";
import Staff from "./pages/Staff";
import AIDecisions from "./pages/AIDecisions";

function ProtectedLayout() {
  const isLoggedIn =
    sessionStorage.getItem("airport-demo-login") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <Header />

          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/ai-decisions" element={<AIDecisions />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ProtectedLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
