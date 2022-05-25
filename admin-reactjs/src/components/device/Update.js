import { NavLink } from "react-router-dom";
import icondropdown from "../../assets/images/icondropdown.png";
const ManageDevice = () => {
  return (
    <>
      <section className="manageDevice">
        <div className="manageDevice-container">
          <h2 className="title">Quản lý thiết bị</h2>
          <div className="manageDevice-container-main">
            <h3 className="heading">Thông tin thiết bị</h3>
            <div className="flex-box">
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Mã thiết bị: <span>*</span>
                </h5>
                <input type="text" placeholder="Nhập mã thiết bị" />
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Loại thiết bị: <span>*</span>
                </h5>
                <div className="dropdown">
                  <div className="dropdown-select">
                    <span className="select">Chọn loại thiết bị</span>
                    <img src={icondropdown} alt="" />
                  </div>
                  <div className="dropdown-list">
                    <div className="dropdown-list__item">Kiosk</div>
                    <div className="dropdown-list__item">Display couter</div>
                  </div>
                </div>
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Mã thiết bị: <span>*</span>
                </h5>
                <input type="text" placeholder="Nhập mã thiết bị" />
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Tên thiết bị: <span>*</span>
                </h5>
                <input type="text" placeholder="Nhập tên thiết bị" />
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Tên đăng nhập: <span>*</span>
                </h5>
                <input type="text" placeholder="Nhập tên tài khoản" />
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Địa chỉ IP: <span>*</span>
                </h5>
                <input type="text" placeholder="Nhập địa chỉ IP" />
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Dịch vụ sử dụng: <span>*</span>
                </h5>
                
                <input className="" type="text" placeholder="Khám tim mạch, Khám sản- Phụ khoa, Khám răng hàm mặt, Khám tai
                  mũi họng, Khám tổng quát, Khám bao quát." />
              </div>
            </div>
            <div className="manageDevice-container-main-note">
              <span>*</span>
              <h3 className="sub-note">Là trường thông tin bắt buộc</h3>
            </div>
          </div>
          <NavLink to='/device' exact='true'>
          <div className="function">

           <button  className="btn-cancel">Hủy bỏ</button>

            <button className="btn">Cập nhật</button>
          </div>
          </NavLink> 
        </div>

      </section>
    </>
  );
};

export default ManageDevice;