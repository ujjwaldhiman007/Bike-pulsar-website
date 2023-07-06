import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* top navbar */}
      <nav className="bg-primary shadow-lg shadow-white flex items-center px-7">
        <div>
          <Link to="/">
            <img
              src="https://cdn.bajajauto.com/-/media/Assets/bajajauto/global/bajaj-logo2.ashx"
              alt=""
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
