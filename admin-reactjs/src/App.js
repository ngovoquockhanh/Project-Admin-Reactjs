import "./styles/app.scss";
import Login from './components/Login/Login';
import Forgotpassword from './components/Forgotpassword/Forgotpassword';
import Resetnewpassword from './components/Reset new password/Resetnewpassword';
import DashboardPage from "./components/views/DashboardPage";
import HomePage from "./components/views/HomePage";
import DevicePage from "./components/views/DevicePage";
import Menu from './components/Menu/Menu';
import DeviceDetailPage from "./components/views/DeviceDetailPage";
import ServicePage from "./components/views/ServicePage";
import AddServicePage from "./components/views/AddServicePage";
import NumberPage from "./components/views/NumberPage";
import ServiceDetailPage from "./components/views/ServiceDetailPage";
import ReportPage from "./components/views/ReportPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Resetnewpassword" element={<Resetnewpassword />} />
          <Route path="/Menu/*" element={<Menu />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/device" element={<DevicePage />} />
          <Route path="/user" element={<HomePage />} />
          <Route path="/device/detail" element={<DeviceDetailPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/add/service" element={<AddServicePage />} />
          <Route path="/service/detail" element={<ServiceDetailPage />} />
          <Route path="/number" element={<NumberPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
