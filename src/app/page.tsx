"use client";
import Image from "next/image";
import Start from "./components/Start";
import { ST } from "next/dist/shared/lib/utils";
import { useState } from "react";
import { tree } from "next/dist/build/templates/app-page";
import Toss from "./components/GAME componentes/Toss";

export default function Home() {
  const [startgame, setstartgame] = useState(false);
  return (
    <>
      <div className=" w-full h-full ">
        <div className="font-800 bg-red-500 text-center text-[32px] capitalize py-2">
          <h1>odd& even game</h1>
        </div>
        <div className=" bg-green-100 h-[75%] flex justify-center items-center">
          {startgame ? (
            <div className=" py-4 flex flex-col justify-center items-center">
              <Toss></Toss>
              <Start color="red" onClick={() => setstartgame(false)}>
                end the game
              </Start>
            </div>
          ) : (
            <div className=" py-4 flex justify-center items-center">
              <Start color="#34eb34" onClick={() => setstartgame(true)}>
                {" "}
                enter the game
              </Start>
            </div>
          )}
        </div>
        <div className=" text-black font-800  mt-0  bg-yellow-500 text-center text-[32px] capitalize py-2">
          <h1>multiplayer coming soon</h1>
        </div>
      </div>
    </>
  );
}
