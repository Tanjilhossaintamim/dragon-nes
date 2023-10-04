import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCategory = ({ title }) => {
  return (
    <Link to={`/`} className="text-color-dark-4 text-xl font-medium">
      {title}
    </Link>
  );
};
NewsCategory.propTypes = {
  title: PropTypes.string,
};

export default NewsCategory;
