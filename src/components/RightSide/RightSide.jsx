import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";

const RightSide = () => {
  return (
    <div>
      <Heading title="Login With" />
      <div className="mt-5 flex justify-center flex-col gap-3">
        <Button
          name={"Login With Google"}
          color={"blue"}
          icon={<AiOutlineGoogle size={16} />}
          action={() => console.log("Pressed")}
        />
        <Button
          name={"Login With Github"}
          color={"#403f3f"}
          icon={<AiFillGithub size={16} />}
          action={() => console.log("Pressed")}
        />
      </div>
    </div>
  );
};

export default RightSide;
