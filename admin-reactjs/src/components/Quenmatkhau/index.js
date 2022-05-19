import React from "react";
import logo from "../../assets/images/logo.png";

export default function Quenmatkhau() {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt="">
            <img src={logo} />
          </div>
          <form className="login100-form validate-form">
            <span className="login100-form-title">
              <b>KHÔI PHỤC MẬT KHẨU</b>
            </span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Bạn cần nhập đúng thông tin như: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                placeholder="Nhập email"
                name="emailInput"
                id="emailInput"
                Value=""
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="bx bx-mail-send" />
              </span>
            </div>
         
            <a  href="http://localhost:3000/datmatkhau">
            <button className="container-login100-form-btn"
                   type="button"
                   Value="Tiếp Tục"  > Tiếp Tục
           
            </button>

            </a>
           

        
            <div className="text-center p-t-12">
              <a className="txt2" href="http://localhost:3000/login">
                Trở về đăng nhập
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
