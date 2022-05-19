import React from "react";
import logo from "../../assets/images/logo.png";
import './main.css';

import './util.css';

export default function Login() {
   return (
    <>
      <title>Đăng nhập quản trị | Website quản trị v2.0</title>
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
                <b>ĐĂNG NHẬP HỆ THỐNG </b>
              </span>
              {/*=====FORM INPUT TÀI KHOẢN VÀ PASSWORD======*/}
              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  placeholder="Tài khoản quản trị"
                  name="username"
                  id="username"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="bx bx-user" />
                </span>
              </div>
              <div className="wrap-input100 validate-input">
                <input
                  autoComplete="off"
                  className="input100"
                  type="password"
                  placeholder="Mật khẩu"
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
              <a  href="http://localhost:3000/dashboard">
            <button className="container-login100-form-btn"
                   type="button"
                   Value="Tiếp Tục"  > Đăng Nhập
           
            </button>

            </a>
              {/*=====LINK TÌM MẬT KHẨU======*/}
              <div className="text-right p-t-12">
                <a className="txt2" href="http://localhost:3000/quenmatkhau">
                  Bạn quên mật khẩu?
                </a>
              </div>
            </form>
            {/*=====FOOTER======*/}
          </div>
        </div>
      </div>
      {/*Javascript*/}
  
    </>
   )
  
   
  }
  