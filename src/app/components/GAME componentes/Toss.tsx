import React, { useState } from "react";
import Start from "../Start";
import Game from "./Game";

const Toss: React.FC = () => {
  const [tossResult, setTossResult] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [bat, setBat] = useState<string>("");

  function chance(): number {
    const result: number = Math.floor(Math.random() * 2);
    setTossResult(result);
    return result;
  }
  function test() {
    if (tossResult === 0) {
      setBat("you");
    } else {
      setBat("computer");
    }
  }
  console.log(bat);

  return (
    <div>
      {!open ? (
        <Start
          color="#3446eb"
          onClick={() => {
            setOpen(!open);
            chance();
          }}
        >
          press to see who will bat
        </Start>
      ) : !bat ? (
        <div className="">
          <h3 className=" w-full bg-white text-center p-4 font-600 text-black  rounded-2xl">
            {open ? (tossResult === 0 ? "you" : "computer") : null}
          </h3>
          <div className=" flex flex-row gap-4">
            {" "}
            <Start
              color={"grey"}
              onClick={() => {
                setBat("");
                setOpen(!open);
                setTossResult(null);
              }}
            >
              toss again?
            </Start>
            <Start color="#34eb34" onClick={test}>
              start the game
            </Start>
          </div>
        </div>
      ) : (
        <div className="">
          <Game player={bat}></Game>
        </div>
      )}
    </div>
  );
};

export default Toss;
