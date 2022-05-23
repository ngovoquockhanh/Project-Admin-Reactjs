import React from 'react'
import './Forgotpassword.css'
import logo from "../../assets/images/Logoalta.png";
import imgIntro from "../../assets/images/intro.png";
export default function Forgotpassword() {
  return (
    <div className="container">
  <div className="left">
    <div className="logo">
    <img src={logo} />

      <div className="namelogin">
      <p className='email'> Vui lòng nhập email để đặt lại mật khẩu của bạn*</p>
        <input
          className="inputpawword"
          type="text"
          placeholder="Nhập email"
          name="emailInput"
          id="emailInput"
        />
        <br />
        <br />
        <a href="Resetnewpassword">
          <button
            className="Continue"
            classname="container-login100-form-btn"
            type="button"
            value="Tiếp Tục"
          >
            {" "}
            <a className='Continue1'>Tiếp tục</a>  
          </button>
        </a>
        <a href="login">
          <button
            className="huy"
            classname="container-login100-form-btn"
            type="button"
            value="Tiếp Tục"
          >
            {" "}
            <a className='Cancel'>Hủy</a> 
          </button>
        </a>
      </div>
      <div className="Forgotpassword">
        <p>Đặt lại mật khẩu</p>
      </div>
    </div>
  </div>
  <div className="right">
    <div className="logo1">
    <img src={imgIntro} />
 
    </div>
  </div>
</div>

  )
}
