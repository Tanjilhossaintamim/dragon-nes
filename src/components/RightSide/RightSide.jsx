import Button from "../Button/Button";
import FindUs from "../FindUs/FindUs";
import Heading from "../Heading/Heading";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import QzoneList from "../Qzone/QzoneList";
import Advertarise from "../Advertarise/Advertarise";

const RightSide = () => {
  return (
    <div>
      <Heading title="Login With" />
      {/* login buttons */}
      <div className="mt-5 flex justify-center flex-col gap-3">
        <Button
          name={"Login With Google"}
          color={"#1569C7"}
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
      {/* find us/social link */}
      <FindUs />
      <QzoneList />
      <Advertarise />
    </div>
  );
};

export default RightSide;
