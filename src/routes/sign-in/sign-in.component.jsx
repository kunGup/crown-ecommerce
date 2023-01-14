import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/sign-up-form/sign-up-form.component";
const Signin = () => {
  // useEffect(async ()=>{
  //     const response = await getRedirectResult(auth)
  //     if(response){
  //         const userDocRef = await createUserDocumentFromAuth(response.user)
  //         console.log(userDocRef);
  //     }
  // },[])
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignupForm/>
    </div>
  );
};

export default Signin;
