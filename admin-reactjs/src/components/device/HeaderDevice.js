import imgnotify from "../../assets/images/iconnotify.png";
import chandung from "../../assets/images/chandung.jpg";
import Line from "../../assets/images/Line 42.png";
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
      
      <div className="headerdashboard-content">
         <div className="manageDevice-container-main-box">
              <div className="dropdown">
                <img src={imgnotify} alt="" className="imgnotify" />
                <div className="dropdown-list">
                  <div className="Notify">
                    <h5 className="Notify-1">Thông báo</h5>
                  </div>
                  <div className="Notify-2">
                    <h5 className="user-name">
                      Người dùng : Nguyễn Thị Thùy Dung
                    </h5>
                    <h5 className="time-number">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line" />
                    <h5 className="user-name-1">
                      Người dùng : Nguyễn Thiên Chính
                    </h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                    <h5 className="user-name-1">
                      Người dùng : Võ Thị Kim Liên
                    </h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                    <h5 className="user-name-1">
                      Người dùng : Nguyễn Quốc Huy
                    </h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                    <h5 className="user-name-1">
                      Người dùng : Võ Lan Anh
                    </h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                    <h5 className="user-name-1">
                      Người dùng : Nguyễn Trúc Anh
                    </h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                  </div>
                </div>
              </div>
            </div>
        <NavLink className="headerdashboard-content-box"  to="/user"
            exact="true">
          <img src={chandung} alt="" className="imguser" />
          <div className="infomation">
            <h3 className="sub-label">Xin chào</h3>
            <h4 className="label">Ngô Võ Quốc Khánh</h4>
          </div>
          </NavLink >
      </div>
     
      </section>
    </>
  );
};

export default HeaderDevice;
