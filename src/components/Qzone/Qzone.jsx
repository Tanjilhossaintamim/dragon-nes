import PropTypes from "prop-types";
const Qzone = ({ image, title }) => {
  return (
    <div className="py-5 mb-10">
      <div className="h-[194px] rounded border border-color-dark-6 bg-white relative">
        <div className="h-[194px] border rounded border-color-dark-6 bg-white -rotate-6 relative">
          <div className="h-[194px] rotate-6 p-3">
            <img src={image} alt={title} className="w-full" />
            <h1 className="text-center mt-2 font-semibold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
Qzone.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
export default Qzone;
