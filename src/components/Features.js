import React from "react";
import { logo } from "./Data";
import { specifications } from "./Data";

function Features() {
  return (
    <div className="w-4/5 h-fit mx-auto my-12 md:mb-18">
      <div className="pulsar-logo-box">
        <img src={logo} className=" pulsar-logo  mx-auto" alt="" />
      </div>
      <header className=" bg-gray-300 text-black font-bold p-2 capitalize font-poppins ">
        <span>features</span>
      </header>
      <main className=" w-5/8 mx-auto mt-14 mb-40 md:w-3/6">
        <h1 className="uppercase font-black text-xl text-center my-3">
          bajaj pulsar <span className="text-blue-600">RS200</span>{" "}
          specifications
        </h1>
        {specifications.map((items) => {
          const {
            id,
            title,
            head_1,
            text_1,
            head_2,
            text_2,
            head_3,
            text_3,
            head_4,
            text_4,
            head_5,
            text_5,
            head_6,
            text_6,
          } = items;
          {
            console.log(items);
          }
          return (
            <div key={id}>
              <div className=" specification-table bg-blue-500 text-white uppercase p-2">
                {title}
              </div>
              <div className="specification-table__inside">
                <h2>{head_1}</h2>
                <p>{text_1}</p>
              </div>
              <div className="specification-table__inside">
                <h2>{head_2}</h2>
                <p>{text_2}</p>
              </div>
              <div className="specification-table__inside">
                <h2>{head_3}</h2>
                <p>{text_3}</p>
              </div>
              <div className="specification-table__inside">
                <h2>{head_4}</h2>
                <p>{text_4}</p>
              </div>
              <div className="specification-table__inside">
                <h2>{head_5}</h2>
                <p>{text_5}</p>
              </div>
              <div className="specification-table__inside">
                <h2>{head_6}</h2>
                <p>{text_6}</p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Features;
