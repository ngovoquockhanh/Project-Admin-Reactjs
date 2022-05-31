import { NavLink } from "react-router-dom";

const AddRole = () => {
  return (
    <>
      <section className="addrole">
        <div className="addrole-container">
          <h2 className="title">Danh sách vai trò</h2>
          <div className="addrole-container-main">
            <h3 className="heading">Thông tin vai trò</h3>
            <div className="flex-box">
              <div className="addrole-container-main-box">
                <div className="addrole-container-main-box-content-left">
                  <h5 className="sub-heading">
                    Tên vai trò: <span>*</span>
                  </h5>
                  <input type="text" placeholder="Kế toán" />
                  <h5 className="sub-heading">
                    Mô tả: <span>*</span>
                  </h5>
                  <textarea
                    rows="5"
                    cols="60"
                    placeholder="Chịu trách nhiệm thống kê số liệu và kiểm toán"
                  />
                  <div className="note">
                    <span>*</span>
                    <h3 className="sub-note">Là trường thông tin bắt buộc</h3>
                  </div>
                </div>
              </div>
              <div className="addrole-container-main-box">
                <div className="addrole-container-main-box-content-right">
                  <h5 className="sub-heading">
                    Phân quyền chức năng: <span>*</span>
                  </h5>
                  <form action="">
                    <label htmlFor="">Nhóm chức năng A</label>
                    <input type="checkbox" id="" className="name-all" />
                    <span className="all">Tất cả</span>
                    <input type="checkbox" id="" className="name-all" />
                    <span className="all1">Chức năng X</span>
                    <input type="checkbox" id="" className="name-all" />
                    <span className="all1">Chức năng Y</span>
                    <input type="checkbox" id="" className="name-all" />
                    <span className="all1">Chức năng Z</span>
                    <label htmlFor="">Nhóm chức năng B</label>
                    <input type="checkbox" id="" className="name-all" />
                    <span className="all">Tất cả</span>
                    <input type="checkbox" id="" className="name-all" />
                    <span className="all1">Chức năng X</span>
                    <input type="checkbox" id="" className="name-all" />
                    <span className="all1">Chức năng Y</span>
                    <input type="checkbox" id="" className="name-all" />
                    <span className="all1">Chức năng Z</span>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="function">
            <NavLink to="/manage-role">
              <button className="btn-cancel">Hủy bỏ</button>
            </NavLink>
            <NavLink to="/manage-role">
              <button className="btn">Cập nhât</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddRole;
