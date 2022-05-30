import Out from "../../assets/images/out.png"
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
const DeviceDetail = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/device/manage");
  };

  return (
    <>
      <section className="deviceDetail">
        <div className="deviceDetail-container">
          <h2 className="title">Quản lý cấp số</h2>
          <div className="deviceDetail-container-main">
            <h3 className="heading">Thông tin cấp số</h3>
            <div className="flex-box">
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Họ tên :</h5>
                <span>Nguyễn Thị Dung</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Tên Dịch Vụ:</h5>
                <span>Khám Tim Mạch</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Số thứ tự:</h5>
                <span>2000102</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Thời gian cấp:</h5>
                <span>14:35-30/05/2022</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Hạn Sử Dụng:</h5>
                <span>18:00 30/05/2022</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Nguồn Cấp:</h5>
                <span>Kiosk</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Trạng Thái :</h5>
                <span>Đang Chờ</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Địa chỉ email :</h5>
                <span>khanh@gmail.com</span>
              </div>
              <div className="deviceDetail-container-main-box">
                <h5 className="sub-heading">Số Điện Thoại :</h5>
                <span>0397835040</span>
              </div>
            </div>
          </div>
          <div className="deviceDetail-container-function">
            <NavLink to="/number" exact="true">
              <button className="btn-update">
                <img src={Out}/>
                Cập nhật <br /> thiết bị
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeviceDetail;
