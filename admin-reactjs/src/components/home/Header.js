import imgnotify from "../../assets/images/iconnotify.png";
import user from "../../assets/images/user.png";

const Header = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard">
        <div className="headerdashboard-main">
          <h2>Thông tin cá nhân</h2>
        </div>
        <a class="profile-pic" href="profile.html">
        <div className="headerdashboard-content">
          <img src={imgnotify} alt="" className="imgnotify" />
          <div className="headerdashboard-content-box">
            <img src={user} alt="" className="imguser" />
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

export default Header;
