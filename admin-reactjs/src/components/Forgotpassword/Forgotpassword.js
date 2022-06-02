import logo from "../../assets/images/Logoalta.png";
import forgotpass from "../../assets/images/forgotpass-intro.png";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <>
      <section className="forgotpassword" id="forgotpassword">
        <div className="forgotpassword-main">
          <div className="forgotpassword-main-box">
            <img srcSet={logo} alt="" className="image" />
            <div className="forgotpassword-main-box-group">
              <h3 className="label-forgotpass">Đặt lại mật khẩu</h3>
              <p className="sub-label">
                Vui lòng nhập email để đặt lại mật khẩu của bạn *
              </p>
              <input type="text" className="input-forgotpassword" />
            </div>
            <div className="function">
            <Link to="/login">
              <button className="btn-cancel">
             Hủy
              </button>
              </Link>
              <Link to="/Resetnewpassword">
              <button className="btn">
               Tiếp tục
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="forgotpassword-intro">
          <img src={forgotpass} alt="" className="imageIntro" />
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
