import LeftSide from "../../components/LeftSide/LeftSide";

const HomePageLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-20">
      <LeftSide />
      <div className="lg:col-span-2 border">middle</div>
      <div className="border">right</div>
    </div>
  );
};

export default HomePageLayout;
