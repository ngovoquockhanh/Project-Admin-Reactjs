import "./styles/app.scss";
import Login from "./components/Login";
import Quenmatkhau from "./components/Quenmatkhau";
import Datmatkhau from "./components/Datmatkhau";
import DashboardPage from "./components/views/DashboardPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/quenmatkhau" element={<Quenmatkhau />} />
          <Route path="/datmatkhau" element={<Datmatkhau />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/user" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
