import { useEffect, useState } from "react";
import News from "./News";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="mt-5">
      {news.map((singelNews) => (
        <News key={singelNews._id} news={singelNews} />
      ))}
    </div>
  );
};

export default NewsList;
