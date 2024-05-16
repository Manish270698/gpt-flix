import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import DOMPurify from "dompurify";

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Manages current user for signIn/signOut and signUp
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        // Sanitize displayName before dispatching
        const sanitizedDisplayName = DOMPurify.sanitize(displayName);
        // console.log(sanitizedDisplayName);

        dispatch(addUser({ uid, email, displayName: sanitizedDisplayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when the component unmounts
    return unsubscribe; // Cleanup function to prevent memory leaks
  }, []);

  return (
    // <div className="bg-gradient-to-t mt- w-screen border-red-500 border-2 from-black text-white flex justify-center text-xs h-8 items-center">
    <div>  
    </div>
  );
};

export default Footer;
