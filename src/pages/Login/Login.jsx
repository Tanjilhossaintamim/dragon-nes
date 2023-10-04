import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";

const Login = () => {
  document.title = "Login";
  return (
    <div className="bg-color-dark-7 h-screen">
      <div className="max-w-6xl mx-auto py-16 bg-color-dark-7">
        <Navbar></Navbar>
      </div>
      <div className="w-full lg:w-[752px] lg:h-[700px] flex flex-col justify-center items-center mx-auto bg-white">
        <h1 className="text-4xl font-semibold text-color-dark-2 text-center">
          Login your account
        </h1>
        <form className="w-full px-4 lg:px-0 lg:w-auto mx-auto mt-20">
          <div className="flex flex-col gap-2 mb-4">
            <label
              className="text-xl font-semibold text-color-dark-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full lg:w-[558px] h-16 rounded text-color-dark-2 bg-color-dark-7 outline-none px-5 text-[16px]"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label
              className="text-xl font-semibold text-color-dark-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full lg:w-[558px] h-16 rounded text-color-dark-2 bg-color-dark-7 outline-none px-5 text-[16px]"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              id="password"
              required
            />
            <button
              type="submit"
              className="w-full lg:w-[558px] h-16 bg-color-dark-2 rounded text-xl text-white font-semibold mt-4"
            >
              Login
            </button>
          </div>
          <p className="text-center">
            Dont&apos;t Have An Account ? &nbsp;
            <Link to={"/register"} className="readmorebtn hover:underline">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
