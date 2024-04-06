import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  deleteUser,
} from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import app from "@/firebase.config";
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Function to check if the email is from "vitstudent.ac.in"
const isValidEmail = (email) => {
  const domain = "vitstudent.ac.in";
  return email.endsWith(`@${domain}`);
};

// Function to create user and store email in Firestore
const createUserAndStoreEmail = async () => {
  try {
    // Use the authentication provider to sign in with Google
    const result = await signInWithPopup(auth, provider);

    // Extract user information
    const user = result.user;
    const email = user.email;
    const name = user.displayName.split(" ");
    let fullname = "";
    for (let i = 0; i < name.length - 1; i++) {
      if (i == name.length - 1) {
        fullname += name[i];
      } else {
        fullname += name[i] + " ";
      }
    }
    const reg = name[name.length - 1];
    // Check if the email is valid
    if (isValidEmail(email)) {
      // Store email in Firestore in the "users" collection using email as the document ID
      const userDocRef = doc(collection(db, "users"), email);
      await setDoc(userDocRef, {
        email: email,
        name: fullname,
        regNo: reg,
        roomNo: "324",
        block: "A",
        mess: "Veg",
        contact: "9927084882",
      });

      console.log("User created and email stored successfully!");
      return true;
    } else {
      console.log("Invalid email domain. User not created.");
      deleteUser(user);
      return false;
    }
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
};

export default createUserAndStoreEmail;
