import React from "react";
import { Link } from "react-router-dom";

import { sideButtons } from "./Data";

function Sidebar() {
  return (
    <>
      <aside className=" sidebar bg-secondary h-20 fixed bottom-0 left-0 w-full flex p-3 justify-evenly md:sticky md:h-full md:top-0 md:flex-col md:w-24 md:hover:w-60 duration-500 ">
        {sideButtons.map((elements) => {
          const { id, icon, text, route } = elements;
          return (
            <Link
              key={id}
              to={route}
              className=" side-buttons duration-500 text-2xl text-white px-5 py-6 flex justify-between items-center hover:animate-pulse hover:bg-blue-200 w-full"
            >
              <span className="side-icons text-primary ">{icon}</span>
              <h4 className="icon-text font-bold capitalize">{text}</h4>
            </Link>
          );
        })}
      </aside>
    </>
  );
}

export default Sidebar;
