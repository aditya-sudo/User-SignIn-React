import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  const { photo, name, email, phoneno } = useSelector(
    (state) => state.allUsers
  );

  return (
    <div>
      <div className="logout">
        <Link to="/">
          <button type="button" className="btn btn-sm btn-primary">
            Log out
          </button>
        </Link>
      </div>

      <div className="userdata">
        <img className="Photo" src={photo} alt="user profile" />
        <p className="Content">
          Hello {name},you are registered with the email id - {email} and phone
          number - {phoneno}
        </p>
      </div>
    </div>
  );
}

export default Home;
