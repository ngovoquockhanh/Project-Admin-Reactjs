import chandung from "../../assets/images/chandung.jpg";
import iconcamera from "../../assets/images/iconcamera.png";
const Main = () => {
  return (
    <>
      <section className="main" id="main">
        <div className="main-info">
          <img src={chandung} alt="" className="imgusers" />
          <img src={iconcamera} alt="" className="imgcamera" />
          <h4 className="label">Ngô Võ Quốc Khánh</h4>
        </div>
        <div className="main-content">
          <div className="main-content-group">
            <div className="main-content-group-box">
              <h5 className="label">Tên người dùng</h5>
              <input type="text" placeholder="Ngô Võ Quốc Khánh" />
            </div>
            <div className="main-content-group-box">
              <h5 className="label">Tên đăng nhập</h5>
              <input type="text" placeholder="lequynhaivan01" />
            </div>
          </div>
          <div className="main-content-group">
            <div className="main-content-group-box">
              <h5 className="label">Số điện thoại</h5>
              <input type="text" placeholder="0767375921" />
            </div>
            <div className="main-content-group-box">
              <h5 className="label">Mật khẩu</h5>
              <input type="text" placeholder="311940211" />
            </div>
          </div>
          <div className="main-content-group">
            <div className="main-content-group-box">
              <h5 className="label">Email</h5>
              <input type="text" placeholder="adminSS01@domain.com" />
            </div>
            <div className="main-content-group-box">
              <h5 className="label">Vai trò:</h5>
              <input type="text" placeholder="Kế toán" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
