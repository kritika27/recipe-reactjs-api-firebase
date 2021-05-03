import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
import Auth from "../../utils/Auth";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const googleSignIn = async () => {
    try {
      await Auth();
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        setFirstName(user.displayName);
        console.log(firstName);
        history.push("/recipe");
      } else console.log("No user is logged in.");
    });
  }, [history, firstName]);

  return (
    <header>
      <nav id="nav">
        <div className="container">
          <h1 className="logo">
            <i className="fa fa-cutlery"></i> foodclub
          </h1>

          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipe">Recipes</Link>
            </li>
          </ul>

          {firstName ? (
            <Link
              to="/"
              onClick={() => {
                auth().signOut();
                setFirstName("");
              }}
            >
              {" "}
              <button className="btn">Sign Out</button>
            </Link>
          ) : (
            <button className="btn" onClick={googleSignIn}>
              Sign Up
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
