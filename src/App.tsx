import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./componenet/pages/LandingPage";
import Dashboard from "./componenet/pages/dashboard/Dashboard";
import DashboardContents from "./componenet/pages/dashboard/DashboardContents";
import UserDetailsTemplate from "./componenet/users/UserDetailsTemplate";
import UserDetailsHome from "./componenet/pages/UserDetailsHome";
import Document from "./componenet/users/Document";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<Dashboard />}>
        <Route path="dashboard" element={<DashboardContents />} />
        <Route path="users" element={<DashboardContents />} />
        <Route path="users/:id" element={<UserDetailsTemplate />}>
          <Route path="general-details" element={<UserDetailsHome />} />
          <Route path="document" element={<Document />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
