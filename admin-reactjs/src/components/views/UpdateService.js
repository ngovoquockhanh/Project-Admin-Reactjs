import Menubar from "../../components/Menu/Menu";
import HeaderService from "../../components/service/HeaderService";
import UpdateService from "../../components/service/UpdateService";

const ServicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderService />
          <UpdateService />
        </main>
      </div>
    </>
  );
};

export default ServicePage;
