import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from '../button/button.component'
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {
      email,
      password
    } = formFields
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormFields({...formFields,[name]:value})
    }
    const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{
            const response = await signInAuthUserWithEmailAndPassword(
              email,
              password
            );
            console.log(response);
            resetFormFields()
        }catch(error){
            switch (error.code) {
              case "auth/wrong-password":
                alert("incorrect password for email");
                break;
              case "auth/user-not-found":
                alert("no user associated with this email");
                break;
              default:
                console.log(error);
            }
        }
        
    }
    return (
      <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Signin with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="buttons-container">
            <Button type="submit">Sign in</Button>
            <Button type="submit" buttonType="google" onClick={signInWithGoogle}>
              Google sign in
            </Button>
          </div>
        </form>
      </div>
    );
}

export default SignInForm