import Heading from "../Heading/Heading";
import Qzone from "./Qzone";
import SwimingImg from "../../assets/swimming.png";
import ClassImg from "../../assets/class.png";
import PlayGroundImg from "../../assets/playground.png";

const QzoneList = () => {
  return (
    <div className="mt-8 bg-color-dark-7 p-3">
      <Heading title={"Q-Zone"} />
      <Qzone image={SwimingImg} title={"Swimming"} />
      <Qzone image={ClassImg} title={"Class"} />
      <Qzone image={PlayGroundImg} title={"Play Ground"} />
    </div>
  );
};

export default QzoneList;
