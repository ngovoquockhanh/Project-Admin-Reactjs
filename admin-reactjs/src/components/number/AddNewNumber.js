import { NavLink } from "react-router-dom";
import icondropdown from "../../assets/images/icondropdown.png";
import fix from "../../assets/images/fi_x.png";
import swal from 'sweetalert2';
import Popup from "reactjs-popup";
const AddNewNumber = () => {
  
  return (
    <>
      <section className="addnewnumber">
        <div className="addnewnumber-container">
          <div className="addnewnumber-container-box">
            <h2 className="heading">cấp số mới</h2>
            <p className="sub-heading">Dịch vụ khách hàng lựa chọn</p>
            <div className="dropdown">
              <div className="dropdown-select">
                <span className="select">Chọn dịch vụ</span>
                <img src={icondropdown} alt="" />
              </div>
              <div className="dropdown-list">
                <div className="dropdown-list__item">Khám tim mạch</div>
                <div className="dropdown-list__item">Khám sản- Phụ khoa</div>
                <div className="dropdown-list__item">Khám tai mũi họng</div>
              </div>
            </div>
            <div className="function">
              <NavLink to="/number">
              <button className="btn-cancel">Hủy bỏ</button>
              </NavLink>
          

              <Popup modal trigger={<button className="btn">In số</button>}>
                <div className="In-number">
                <img src={fix} alt=""  className="fix"/>
                  <p  className="Number-grant">Số thứ tự được cấp</p>
                  <p  className="Number-ber">2001201</p>
                  <p  className="Examination">DV: Khám hàm mặt(tại quầy số 1)</p>
                </div>
                <div   className="In-number1">
                <p  className="Time-number">Thời gian cấp :09:30: 06/09/2022</p>
                <p  className="Time-number1">Thời gian hết hạn: 17:30: 06/09/2022</p>
                </div>
      </Popup>
      

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddNewNumber;
