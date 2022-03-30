import React from "react";
import Signup from "./Signup";

function Entry({ setLogin }) {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup setLogin={setLogin} />
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid w-100"
            src="https://squahr.com/assets/images/authentication/signup.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Entry;
