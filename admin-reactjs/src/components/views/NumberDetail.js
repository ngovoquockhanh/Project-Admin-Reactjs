import Menubar from "../../components/Menu/Menu";
import HeaderNumber from "../../components/number/HeaderNumber";
import NumberDetail from "../../components/number/NumberDetail";
const DeviceDetailPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderNumber />
          <NumberDetail />
        </main>
      </div>
    </>
  );
};

export default DeviceDetailPage;
