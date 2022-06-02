import React from "react";
import "./style.css";
import logo from "../../assets/images/Logoalta.png";
import eyeClose from "../../assets/images/eye-close.png";
import imgIntro from "../../assets/images/intro.png";
import { Link } from "react-router-dom";
export default function index() {
  return (
    <>
      <section className="login" id="login">
        <div className="login-main">
          <div className="login-main-box">
            <img srcSet={logo} alt="" className="image" />
            <div className="login-main-box-group">
              <h3 className="label">Tên đăng nhập *</h3>
              <input type="text" className="input-login" />
            </div>
            <div className="login-main-box-group">
              <h3 className="label">Mật khẩu *</h3>
              <input type="password" className="input-login" />
              <img src={eyeClose} alt="" className="icon" />
              <Link to="/Forgotpassword" className="forgotpass">
                Quên mật khẩu?
              </Link>
            </div>
            <Link to="/Menu">
              <button className="btn">Đăng Nhập</button>
            </Link>
          </div>
        </div>
        <div className="login-intro">
          <img src={imgIntro} alt="" className="imageIntro" />
          <span>hệ thống</span>
          <h4>quản lý xếp hàng</h4>
        </div>
      </section>
    </>
  );
}
