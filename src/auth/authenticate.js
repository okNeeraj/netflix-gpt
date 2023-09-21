import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const authenticate = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user)
    return null
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage;
  }
}

export default authenticate;
