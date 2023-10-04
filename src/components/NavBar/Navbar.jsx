import { NavLink } from "react-router-dom";
import UserImg from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-center mx-auto">
      <div></div>
      <ul className="flex items-center space-x-7 text-color-dark-3 text-lg">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center">
        <div className="w-10 h-10 relative">
          <img src={UserImg} alt="" className="w-full" />
        </div>
        <button className="w-36 h-11 bg-color-dark-2 text-white text-xl font-semibold ml-4">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
