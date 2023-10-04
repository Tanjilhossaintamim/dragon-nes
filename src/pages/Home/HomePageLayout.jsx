import LeftSide from "../../components/LeftSide/LeftSide";
import Middle from "../../components/Middle/Middle";
import RightSide from "../../components/RightSide/RightSide";

const HomePageLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-20">
      <LeftSide />
      <Middle />
      <RightSide />
    </div>
  );
};

export default HomePageLayout;
