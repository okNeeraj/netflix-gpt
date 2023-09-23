import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const authenticate = async (email, password) => {
  const response = {};
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    response.user = user;
  } catch (error) {
    response.error = error;
  }
  return response;
}

export default authenticate;
