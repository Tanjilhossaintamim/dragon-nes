import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, setLoading, error, setError } = useContext(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    const check = e.target.check.checked;
    console.log(email, name, photo, password, check);
    createUser(email, password)
      .then(() => setLoading(false))
      .catch((error) => setError(error.message));
  };
  document.title = "Register";
  return (
    <div className="bg-color-dark-7 h-screen">
      <div className="max-w-6xl mx-auto py-16 bg-color-dark-7">
        <Navbar></Navbar>
      </div>
      <div className="w-full relative lg:w-[752px] lg:h-[730px] flex flex-col justify-center items-center mx-auto bg-white py-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-color-dark-2 text-center">
          Register your account
        </h1>
        {error && <p className="text-red-700">{error}</p>}
        <form
          className="w-full px-4 lg:px-0 lg:w-auto mx-auto mt-20"
          onSubmit={handelRegister}
        >
          <div className="flex flex-col gap-2 mb-4">
            <label
              className="text-xl font-semibold text-color-dark-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="w-full lg:w-[558px] h-16 rounded text-color-dark-2 bg-color-dark-7 outline-none px-5 text-[16px]"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label
              className="text-xl font-semibold text-color-dark-2"
              htmlFor="photo"
            >
              Photo URL
            </label>
            <input
              className="w-full lg:w-[558px] h-16 rounded text-color-dark-2 bg-color-dark-7 outline-none px-5 text-[16px]"
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL"
              id="photo"
              required
            />
          </div>
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
          </div>
          <div className="text-color-dark-3">
            <input
              type="checkbox"
              name="check"
              id=""
              required
              className="p-2 rounded"
            />{" "}
            Accept Term & Conditions
          </div>
          <button
            type="submit"
            className="w-full lg:w-[558px] h-16 bg-color-dark-2 rounded text-xl text-white font-semibold mt-4"
          >
            Register
          </button>
          <p className="text-center mt-3">
            Already Have An Account ? &nbsp;
            <Link to={"/login"} className="readmorebtn hover:underline">
              login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
