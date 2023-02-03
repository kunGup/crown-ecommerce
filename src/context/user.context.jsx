import { createContext, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setCurrentUser } from "../store/user/user.action";
import { selectCurrentUser } from "../store/user/user.selector";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

//actual value you want to access
export const UserContext = createContext({
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
