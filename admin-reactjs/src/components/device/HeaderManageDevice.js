import imgnotify from "../../assets/images/iconnotify.png";
import chandung from "../../assets/images/chandung.jpg";
import { RightOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const HeaderManageDevice = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard">
        <div className="headerdashboard-main">
          <h2 style={{ color: "#7e7d88" }}>
            Thiết bị
            <RightOutlined
              style={{
                color: "#d4d4d7",
                fontSize: "1.4rem",
                padding: "0 1rem",
              }}
            />
           <NavLink to="/device"
            exact="true" >
            <span style={{ color: "#7e7d88" }}>Danh sách thiết bị</span>
            </NavLink>
            <RightOutlined
              style={{
                color: "#d4d4d7",
                fontSize: "1.4rem",
                padding: "0 1rem",
              }}
            />
            <span style={{ color: "#ff9138" }}>Thêm thiết bị</span>
          </h2>
        </div>
        <NavLink class="profile-pic"   to="/user"
            exact="true">
      <div className="headerdashboard-content">
        <img src={imgnotify} alt="" className="imgnotify" />
        <div className="headerdashboard-content-box">
          <img src={chandung} alt="" className="imguser" />
          <div className="infomation">
            <h3 className="sub-label">Xin chào</h3>
            <h4 className="label">Ngô Võ Quốc Khánh</h4>
          </div>
        </div>
      </div>
      </NavLink >
      </section>
    </>
  );
};

export default HeaderManageDevice;
