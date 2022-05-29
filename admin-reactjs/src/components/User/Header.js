import imgnotify from "../../assets/images/iconnotify.png";
import chandung from "../../assets/images/chandung.jpg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard">
        <div className="headerdashboard-main">
          <h2>Thông tin cá nhân</h2>
        </div>
      
      <div className="headerdashboard-content">
        <img src={imgnotify} alt="" className="imgnotify" />
        <NavLink className="headerdashboard-content-box" to="/user">
          <img src={chandung} alt="" className="imguser" />
          <div className="infomation">
            <h3 className="sub-label">Xin chào</h3>
            <h4 className="label">Ngô Võ Quốc Khánh</h4>
          </div> 
        </NavLink>
      </div>
      </section>
    </>
  );
};

export default Header;
