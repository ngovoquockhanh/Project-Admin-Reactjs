import React from 'react'
import './Resetnewpassword.css'
import logo from "../../assets/images/Logoalta.png";
import imgIntro from "../../assets/images/intro.png";
export default function Resetnewpassword() {
  return (
    <div className="container">
  <div className="left">
    <div className="logo">
    <img src={logo} />

      <div className="namelogin">
      <p>Mật Khẩu*</p>
      <input
            className="inputpawword"
            type="password"
            id="pwd"
            name="pwd"
            minLength={8}
          />
          <br/>
          <br />
     
          <p className='pwnew'> Nhập lại mật khẩu*</p>
            <input
            
            className="inputpawword"
            type="password"
            id="pwd"
            name="pwd"
            minLength={8}
          />
        <br />
        <br />
        <a href="login">
          <button
            className="Confirm"
            classname="container-login100-form-btn"
            type="button"
            value="Xác nhận"
          >
            {" "}
            <a className='Confirm1'>Xác Nhậc</a>  
          </button>
        </a>

      </div>
      <div className="newpawr">
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
