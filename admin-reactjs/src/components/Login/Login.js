import React from "react";

import logo from "../../assets/images/Logoalta.png";
import eyeClose from "../../assets/images/eye-close.png";
import imgIntro from "../../assets/images/intro.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import swal from "sweetalert2";

const Index = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState("password");

  const signIn = (e) => {
    console.log(e);
    if (email == "Khanhngo381@gmail.com" && password == "123") {
      swal.fire({
        title: "",
        text: "Xin chào ",
        icon: "success",
        close: true,
        button: false,
      });
      navigate("/dashboard");
      return true;
    } else {
      swal.fire({
        title: "",
        text: "Sai tài khoản hoặc mật khẩu vui lòng nhập lại ! ",
        icon: "error",
        close: true,
        button: "Thử lại",
      });
    }

    if (email == "" && password == "") {
      swal.fire({
        title: "",
        text: "Bạn chưa điền đầy đủ thông tin đăng nhập...",
        icon: "error",
        close: true,
        button: "Thử lại",
      });
      return false;
    }

    if (email == "Khanhngo381@gmail.com" && password == "") {
      swal.fire({
        title: "",
        text: "Mật khẩu đang để trống",
        icon: "warning",
        close: true,
        button: "Thử lại",
      });
      return false;
    }
    if (email == "" && password == "123") {
      swal.fire({
        title: "",
        text: "Tài khoản đang để trống",
        icon: "warning",
        close: true,
        button: "Thử lại",
      });
      return false;
    }
  };

  return (
    <>
      <section className="login" id="login">
        <div className="login-main">
          <div className="login-main-box">
            <img srcSet={logo} alt="" className="image" />
            <div className="login-main-box-group">
              <h3 className="label">Tên đăng nhập *</h3>
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
            <div className="login-main-box-group">
              <h3 className="label">Mật khẩu *</h3>
              <input
                type={showPass}
                className="input-login"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
              />
              <img
                src={eyeClose}
                alt=""
                className="icon"
                onClick={() => {
                  showPass === "password"
                    ? setShowPass("text")
                    : setShowPass("password");
                }}
              />
              <Link to="/Forgotpassword" className="forgotpass">
                Quên mật khẩu?
              </Link>
            </div>
            <button text="Đăng nhập" className="btn" onClick={(e) => signIn(e)}>
              Đăng Nhập
            </button>
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
};
export default Index;
