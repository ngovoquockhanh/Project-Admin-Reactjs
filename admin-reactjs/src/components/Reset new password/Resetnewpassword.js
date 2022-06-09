import logo from "../../assets/images/Logoalta.png";
import imgIntro from "../../assets/images/forgotpass-intro.png";
import eyeClose from "../../assets/images/eye-close.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
  const [showPass, setShowPass] = useState("password");
  const [showPass1, setShowPass1] = useState("password");
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <section className="resetpassword" id="resetpassword">
        <div className="resetpassword-main">
          <div className="resetpassword-main-box">
            <img srcSet={logo} alt="" className="image" />
            <h3 className="label-resetpass">Đặt lại mật khẩu mới</h3>
            <div className="resetpassword-main-box-group">
              <h3 className="label">Mật khẩu</h3>
              <input type={showPass} className="input-resetpassword" />
              <img src={eyeClose} alt="" className="icon" onClick={() =>{showPass === 'password' ? setShowPass('text'): setShowPass('password')}}/>
            </div>
            <div className="resetpassword-main-box-group">
              <h3 className="label">Nhập lại mật khẩu</h3>
              <input type={showPass1} className="input-resetpassword" />
              <img src={eyeClose} alt="" className="icon" onClick={() =>{showPass1 === 'password' ? setShowPass1('text'): setShowPass1('password')}}/>
            </div>
            <Link to="/login">      
            <button className="btn" >
              Xác nhận
            </button>
            </Link>
          </div>
        </div>
        <div className="resetpassword-intro">
          <img src={imgIntro} alt="" className="imageIntro" />
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
