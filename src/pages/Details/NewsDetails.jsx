import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Details from "../../components/NewsDetails/Details";
import RightSide from "../../components/RightSide/RightSide";
import { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.find((singelNews) => singelNews._id === id));
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="px-4 lg:px-0">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
        <div className="lg:col-span-2">
          <Heading title={"Dragon News"} />
          <Details news={news} />
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default NewsDetails;
