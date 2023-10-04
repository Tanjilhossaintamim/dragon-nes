import { useEffect, useState } from "react";
import NewsCategory from "../NewsCategory/NewsCategory";

const NewsCategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid place-content-center gap-8 mt-8">
      {categories.map((category) => (
        <NewsCategory title={category.name} key={category.id} />
      ))}
    </div>
  );
};

export default NewsCategoryList;
