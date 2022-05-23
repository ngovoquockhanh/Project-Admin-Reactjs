import imgnotify from "../../assets/images/iconnotify.png";
import chandung from "../../assets/images/chandung.jpg";
import { RightOutlined } from "@ant-design/icons";
const HeaderAddService = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard">
        <div className="headerdashboard-main">
          <h2 style={{ color: "#7e7d88" }}>
            Dịch vụ
            <RightOutlined
              style={{
                color: "#d4d4d7",
                fontSize: "1.4rem",
                padding: "0 1rem",
              }}
            />
            <span style={{ color: "#7e7d88" }}>Danh sách dịch vụ</span>
            <RightOutlined
              style={{
                color: "#d4d4d7",
                fontSize: "1.4rem",
                padding: "0 1rem",
              }}
            />
            <span style={{ color: "#ff9138" }}>Thêm dịch vụ</span>
          </h2>
        </div>
        <a class="profile-pic" href="/user">
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
      </a>
      </section>
    </>
  );
};

export default HeaderAddService;
