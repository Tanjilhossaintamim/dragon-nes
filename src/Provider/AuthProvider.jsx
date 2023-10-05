import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../utils/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authValue = { createUser };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
