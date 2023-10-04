import Heading from "../Heading/Heading";
import HighLightNewsList from "../HighLightNewsList/HighLightNewsList";
import NewsCategoryList from "../NewsCategoryList/NewsCategoryList";

const LeftSide = () => {
  return (
    <div className="sticky top-0 grow">
      <Heading title="All Category" />
      <div className="h-16 bg-color-dark-7 flex justify-center items-center mt-5 rounded border border-color-dark-6">
        <span className="text-xl font-semibold text-color-dark-2">
          National News
        </span>
      </div>
      {/* news category List  */}
      <NewsCategoryList />
      {/* high lighted news list */}
      <HighLightNewsList />
    </div>
  );
};

export default LeftSide;
