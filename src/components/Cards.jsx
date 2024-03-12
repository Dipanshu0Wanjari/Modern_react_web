import React from "react";

function Cards() {
  return (
    <div className="flex items-center gap-5 w-full h-screen px-20  bg-zinc-900">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2020-2023
          </button>
        </div>
      </div>
      <div className=" flex gap-5 cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#13322e]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2020-2023
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#13322e]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2020-2023
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
