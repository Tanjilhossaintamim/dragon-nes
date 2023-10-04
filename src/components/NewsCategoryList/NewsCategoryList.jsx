import NewsCategory from "../NewsCategory/NewsCategory";

const NewsCategoryList = () => {
  return (
    <div className="grid place-content-center gap-8 mt-8">
      <NewsCategory title="Breaking News" />
      <NewsCategory title="Regular News" />
      <NewsCategory title="International News" />
    </div>
  );
};

export default NewsCategoryList;
