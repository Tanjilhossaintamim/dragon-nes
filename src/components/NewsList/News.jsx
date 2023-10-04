import NewsAuthor from "../NewsAuthor/NewsAuthor";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const News = ({ news }) => {
  const { _id, title, total_view, author, image_url, details, rating } =
    news || {};
  return (
    <div className="mb-10 rounded border border-color-dark-6">
      <NewsAuthor author={author} />
      <div className="p-5">
        <h1 className="text-xl font-bold text-color-dark-2 leading-8 my-3">
          {title}
        </h1>
        <div className="news">
          <img src={image_url} alt="" />
          <p className="text-justify text-color-dark-3 text-[16px] leading-6 mt-3">
            {details.slice(0, 400)}...
          </p>
          <Link className="readmorebtn" to={`/news-details/${_id}`}>
            Read More
          </Link>
        </div>
        <hr className="border-1 w-[518px] mx-auto border-color-dark-6 my-6" />
        {/* ratting       */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.round(rating.number) }, (v, k) => k).map(
              (star, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                    fill="#FF8C47"
                  />
                </svg>
              )
            )}
            <span className="text-color-dark-3 text-[16px]">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z"
                fill="#706F6F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75C16.971 3.75 21.186 6.973 22.676 11.44C22.796 11.802 22.796 12.192 22.676 12.553C21.189 17.024 16.971 20.25 11.999 20.25C7.029 20.25 2.813 17.027 1.324 12.56C1.20375 12.1987 1.20375 11.8083 1.324 11.447H1.323ZM17.25 12C17.25 13.3924 16.6969 14.7277 15.7123 15.7123C14.7277 16.6969 13.3924 17.25 12 17.25C10.6076 17.25 9.27225 16.6969 8.28769 15.7123C7.30312 14.7277 6.75 13.3924 6.75 12C6.75 10.6076 7.30312 9.27225 8.28769 8.28769C9.27225 7.30312 10.6076 6.75 12 6.75C13.3924 6.75 14.7277 7.30312 15.7123 8.28769C16.6969 9.27225 17.25 10.6076 17.25 12Z"
                fill="#706F6F"
              />
            </svg>
            <span className="text-color-dark-3 text-[16px]">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
News.propTypes = {
  news: PropTypes.object,
};
export default News;
