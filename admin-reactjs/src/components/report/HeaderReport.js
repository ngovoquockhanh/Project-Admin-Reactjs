import imgnotify from "../../assets/images/iconnotify.png";
import chandung from "../../assets/images/chandung.jpg";

const HeaderReport = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard">
        <div className="headerdashboard-main">
          <h2>Báo cáo</h2>
        </div>
        <a className="profile-pic" href="/user">
          <div className="headerdashboard-content">
            <img src={imgnotify} alt="" className="imgnotify-1" />
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

export default HeaderReport;
