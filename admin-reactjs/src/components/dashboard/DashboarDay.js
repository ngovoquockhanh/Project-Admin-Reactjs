import icondropdown from "../../assets/images/icondropdown.png";
import imgchart from "../../assets/images/imgchart.png";
import imgchart1 from "../../assets/images/imgchart1.png";
import iconselect from "../../assets/images/iconselect.png";
import { useState } from "react";
 
const DashboardDay = () => {
 const [option, setOptions] = useState('day');
  return (
    <>

    <section className="dashboardDay">

        <div className="dashboardDay-container">
          <div className="dashboardDay-container-header">
            <div className="header-title">
            </div>
            <div className="header-followday">
              <span>Xem theo</span>
              <img src={icondropdown} alt="" className="dropdw" />
              <select
                id="cars"
                className="dropdown"
                onChange={(value) => {
                  setOptions(value.target.value);
                }}
              >
                <option className="dropdown-list__item" value={"day"}>
                  Ngày
                </option>
                <option className="dropdown-list__item" value={"week"}>
                  Tuần
                </option>
                <option className="dropdown-list__item" value={"month"}>
                  Tháng
                </option>
              </select>
            </div>
   
          </div>
          {option === "day" && (
            <div className="dashboardDay-container-content">
            <p className="statistics" >Bảng thống kê theo Ngày</p>
              <p>Tháng 11/2021</p>
              <div className="dashboardDay-container-content-box">
                <p>6000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>5000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>4000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>3000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>2000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>1000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>0</p>
              </div>
              <img src={imgchart} alt="" className="imgchart" />
              <div className="info">
                <button>4.221</button>
                <img src={iconselect} alt="" className="iconselect" />
              </div>
              <div className="dashboardDay-container-content-subbox">
                <p className="col1">01</p>
                <p className="col2">13</p>
                <p className="col3">19</p>
                <p className="col4">31</p>
              </div>
              <div className="param">
                <span>sl</span>
                <h5>/</h5>
                <h6>ngày</h6>
              </div>
            </div>
                  )}  
            
            {option === "week" && (
            <div className="dashboardDay-container-content">
            <p className="statistics" >Bảng thống kê theo Tuần</p>
              <p>Tháng 11/2021</p>
              <div className="dashboardDay-container-content-box">
                <p>6000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>5000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>4000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>3000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>2000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>1000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>0</p>
              </div>
              <img src={imgchart} alt="" className="imgchart" />
              <div className="info">
                <button>4.221</button>
                <img src={iconselect} alt="" className="iconselect" />
              </div>
              <div className="dashboardDay-container-content-subbox">
                <p className="col1">Tuần 1</p>
                <p className="col2">Tuần 2</p>
                <p className="col3">Tuần 3</p>
                <p className="col4">Tuần 4</p>
              </div>
              <div className="param">
                <span>sl</span>
                <h5>/</h5>
                <h6>Tuần</h6>
              </div>
            </div>
                  )}  
                   {option === "month" && (
            <div className="dashboardDay-container-content">
            <p className="statistics" >Bảng thống kê theo Tháng</p>
              <p>Tháng 11/2021</p>
              <div className="dashboardDay-container-content-box">
                <p>6000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>5000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>4000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>3000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>2000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>1000</p>
              </div>
              <div className="dashboardDay-container-content-box">
                <p>0</p>
              </div>
              <img src={imgchart} alt="" className="imgchart" />
              <div className="info">
                <button>4.221</button>
                <img src={iconselect} alt="" className="iconselect" />
              </div>
              <div className="dashboardDay-container-content-subbox">
                <p className="col1">01</p>
                <p className="col2">13</p>
                <p className="col3">19</p>
                <p className="col4">31</p>
              </div>
              <div className="param">
                <span>sl</span>
                <h5>/</h5>
                <h6>ngày</h6>
              </div>
            </div>
                  )}  
        </div>
      </section>


           
    </>
  );
};

export default DashboardDay;
