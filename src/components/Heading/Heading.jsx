import PropTypes from "prop-types";
const Heading = ({ title }) => {
  return <h1 className="text-xl text-color-dark-2 font-semibold">{title}</h1>;
};
Heading.propTypes = {
  title: PropTypes.string,
};
export default Heading;
