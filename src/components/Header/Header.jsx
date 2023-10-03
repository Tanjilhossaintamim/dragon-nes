import moment from "moment";
import Logo from "../../assets/The Dragon News.png";
const Header = () => {
  return (
    <div className="pt-12 text-center">
      <img src={Logo} alt="The Dragon News" className="mx-auto" />
      <p className="text-lg font-normal text-color-dark-3 leading-7 mt-5">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl text-color-dark-3 font-medium leading-7 mt-2">
        <span className="text-color-dark-2">{moment().format("dddd,")}</span>
        {moment().format(" MMMM DD, YYYY")}
      </p>
    </div>
  );
};

export default Header;
