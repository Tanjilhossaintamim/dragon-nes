import Button from "../Button/Button";
import FindUs from "../FindUs/FindUs";
import Heading from "../Heading/Heading";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import QzoneList from "../Qzone/QzoneList";
import Advertarise from "../Advertarise/Advertarise";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useMatch } from "react-router-dom";

const RightSide = () => {
  const { user, signInWithGoogleAccount } = useContext(AuthContext);
  const home = useMatch("/");
  const loginWithGoogle = () => {
    signInWithGoogleAccount();
  };

  return (
    <div className="px-4 lg:px-0">
      {/* login buttons */}
      {!user && (
        <>
          <Heading title="Login With" />
          <div className="mt-5 flex justify-center flex-col gap-3">
            <Button
              name={"Login With Google"}
              color={"#1569C7"}
              icon={<AiOutlineGoogle size={16} />}
              action={() => loginWithGoogle()}
            />
            <Button
              name={"Login With Github"}
              color={"#403f3f"}
              icon={<AiFillGithub size={16} />}
              action={() => alert("This feature not availabel!")}
            />
          </div>
        </>
      )}
      {/* find us/social link */}
      <FindUs />
      {home && <QzoneList />}
      <Advertarise />
    </div>
  );
};

export default RightSide;
