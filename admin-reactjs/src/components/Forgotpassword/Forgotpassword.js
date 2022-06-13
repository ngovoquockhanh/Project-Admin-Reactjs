import logo from "../../assets/images/Logoalta.png";
import forgotpass from "../../assets/images/forgotpass-intro.png";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ForgotPassword = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState("password");
  const Forgotpassword = (e) => {
    console.log(e);
    if (email == "Khanhngo381@gmail.com" ) {
      swal.fire({
        title: "",
        text: "Hệ thống đã gửi thông báo về Email trên ! ",
        icon: "success",
        close: true,
        button: false,
      });
      navigate("/Resetnewpassword");
      return true;
    } else {
      swal.fire({
        title: "",
        text: "Sai Email vui lòng nhập lại ! ",
        icon: "error",
        close: true,
        button: "Thử lại",
      });
    }
  }
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
              <input
                type="text "
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input-login"
                id="email"
              />
            </div>
            <div className="function">
              <Link to="/login">
                <button className="btn-cancel-1">Hủy</button>
              </Link>
      
              <div>
                <button text="Tiếp Tục" className="btn" onClick={(e)=>Forgotpassword(e)}>Tiếp tục</button>
             
              </div>
          
  
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
