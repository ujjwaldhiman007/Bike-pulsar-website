import React, { useState } from "react";

export default function Bike() {
  const [colorName, setColorName] = useState("pewter-gray");
  const [Bike, setBike] = useState(
    "https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-rs-200/pulsar-rs200-grey/00.png"
  );
  const whiteColorHandler = (e) => {
    e.preventDefault();
    setBike(
      "https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-rs-200/pulsar-rs200-white/00.png"
    );
    setColorName("white");
  };
  const redColorHandler = (e) => {
    e.preventDefault();
    setBike(
      "https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-rs-200/red/00.png"
    );
    setColorName("red");
  };
  const grayColorHandler = (e) => {
    e.preventDefault();
    setBike(
      "https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-rs-200/pulsar-rs200-grey/00.png"
    );
    setColorName("gray");
  };
  return (
    <div className="bg-dimWhite rounded-lg text-gray-300 w-4/5 hover:bg-blue-400 shadow-secondary duration-500 sm:pb-2">
      {/* <Navlinks />
      <PriceSection /> */}

      {/* bike function container  */}
      <main className="w-90 mx-auto my-4  ">
        <img className="mx-auto sm:w-4/5" src={Bike} alt="" />
        <div className="sm:w-3/5 sm:px-3 sm:mx-auto sm:rounded-xl sm:flex-row sm:justify-between bg-gray-300 text-black flex gap-3 flex-col items-center py-3 md:w-96 md:py-1">
          <p className="text-xs">pick a shade thats fix your persona</p>
          <div className="text-center flex flex-col gap-1">
            <h2 className="text-md font-semibold capitalize md:text-xs">
              exciting color option
            </h2>
            <div className="flex gap-2 justify-center">
              <button
                className="bg-white p-3 rounded-full"
                onClick={whiteColorHandler}
              ></button>
              <button
                className="bg-red-600 p-3 rounded-full"
                onClick={redColorHandler}
              ></button>
              <button
                className="bg-gray-600 p-3 rounded-full"
                onClick={grayColorHandler}
              ></button>
            </div>
            <p className="capitalize">{colorName}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
