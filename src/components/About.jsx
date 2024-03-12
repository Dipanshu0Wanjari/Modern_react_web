import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-rl-3xl text-black">
      <h1 className="font-['Neue Montreal']  text-[3.7vw] tracking-tight leading-[3.8vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
            <h1 className="text-7xl">Our approach :</h1>
            <button className="flex gap-10 uppercase items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
                Read More
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#819637]">

        </div>
      </div>
    </div>
  );
}   

export default About;