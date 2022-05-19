import React from "react";
import logo from "../../assets/images/logo.png";
export default function Login() {
   return (
    <>
      <title>Đặt lại mật khẩu mới</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt="">
              <div >
              <img src={logo} />
              </div>
            </div>
            {/*=====TIÊU ĐỀ======*/}{" "}
            <form className="login100-form validate-form">
              <span className="login100-form-title">
                <b>Đặt lại mật khẩu mới </b>
              </span>
              {/*=====FORM INPUT TÀI KHOẢN VÀ PASSWORD======*/}
              <div className="wrap-input100 validate-input">
                <input
                  autoComplete="off"
                  className="input100"
                  type="password"
                  placeholder="Mật khẩu mới"
                  name="current-password"
                  id="password-field"
                />
                <span
                  toggle="#password-field"
                  className="bx fa-fw bx-hide field-icon click-eye"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="bx bx-key" />
                </span>
              </div>
              <div className="wrap-input100 validate-input">
                <input
                  autoComplete="off"
                  className="input100"
                  type="password"
                  placeholder="Nhập lại mật khẩu mới"
                  name="current-password"
                  id="password-field"
                />
                <span
                  toggle="#password-field"
                  className="bx fa-fw bx-hide field-icon click-eye"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="bx bx-key" />
                </span>
              </div>
              {/*=====ĐĂNG NHẬP======*/}
               
            <a   href="http://localhost:3000/login">
            <button className="container-login100-form-btn"
                   type="button"
                   Value="Tiếp Tục"  > Xác Nhận
           
            </button>

            </a>
           
              {/*=====LINK TÌM MẬT KHẨU======*/}
              
            </form>
            {/*=====FOOTER======*/}
          </div>
        </div>
      </div>
      {/*Javascript*/}
  
    </>
   )
  
   
  }
  