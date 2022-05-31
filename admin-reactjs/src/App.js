import "./components/styles/app.scss";
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
import ManageDevicePage from "./components/views/ManageDevicePage";
import Update from "./components/views/update";
import SettingPage from "./components/views/SettingPage";
import AddRolePage from "./components/views/AddRolePage";
import ManageUserPage from "./components/views/ManageUserPage";
import ReportPage from "./components/views/ReportPage";
import AddUserPage from "./components/views/AddUserPage";
import HistoryUserPage from "./components/views/HistoryUserPage";
import UpdateService from "./components/views/UpdateService";
import NumberDetail from "./components/views/NumberDetail";
import AddNewNumberPage from "./components/views/AddNewNumberPage";
import UserDetail from "./components/views/UserDetail";
import RoleDetail from "./components/views/RoleDetail";
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
          <Route path="/device/manage" element={<ManageDevicePage />} />
          <Route path="/device/Update" element={<Update />} />
          <Route path="/manage-role" element={<SettingPage />} />
          <Route path="/add/manage-role" element={<AddRolePage />} />
          <Route path="/manage-user" element={<ManageUserPage />} />
          <Route path="/add/manage-user" element={<AddUserPage />} />
          <Route path="/history" element={<HistoryUserPage />} />
          <Route path="/service/updateService" element={<UpdateService />} />
          <Route path="/number/numberDetail" element={<NumberDetail />} />
          <Route path="/number/add" element={<AddNewNumberPage />} />
          <Route path="/manage-role/detail" element={<RoleDetail />} />
          <Route path="/manage-user/userDetail" element={<UserDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
