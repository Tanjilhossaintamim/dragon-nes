import LeftSide from "../../components/LeftSide/LeftSide";
import Middle from "../../components/Middle/Middle";

const HomePageLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-20">
      <LeftSide />
      <Middle />
      <div className="border">right</div>
    </div>
  );
};

export default HomePageLayout;
