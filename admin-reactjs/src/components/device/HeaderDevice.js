import imgnotify from "../../assets/images/iconnotify.png";
import chandung from "../../assets/images/chandung.jpg";
import { RightOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
const HeaderDevice = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard">
        <div className="headerdashboard-main">
          <h2>
            Thiết bị
            <RightOutlined
              style={{
                color: "#d4d4d7",
                fontSize: "1.4rem",
                padding: "0 1rem",
              }}
            />
        <NavLink  to="/device"
            exact="true" >
      <span>Danh sách thiết bị</span>
  </NavLink>

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

export default HeaderDevice;
