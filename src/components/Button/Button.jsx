import PropTypes from "prop-types";
const Button = ({ name, icon, color, action }) => {
  return (
    <button
      onClick={action}
      className={`text-center py-1 flex justify-center items-center gap-1`}
      style={{ border: `1px solid ${color}`, borderRadius: "5px", color }}
    >
      {icon} {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  action: PropTypes.func,
};
export default Button;
