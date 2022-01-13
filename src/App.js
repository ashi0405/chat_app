import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Message from "./Message";
import Login from "./Login.js";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <div className="app">{user ? <Message /> : <Login />}</div>;
}

export default App;
