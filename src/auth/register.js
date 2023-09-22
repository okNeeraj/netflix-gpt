import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const register = async (email, password) => {
  const response = {};
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    response.user = user;
  } catch (error) {
    response.error = error;
  }
  return response;
}

export default register;
