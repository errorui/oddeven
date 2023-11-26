import React, { useState, useEffect, useRef } from "react";

const Game = (props: any) => {
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
  };
  const userChoiceRef = useRef(0);
  const finalRef = useRef<number[]>([]);
  const sumRef = useRef<number[]>([]);

  const [computerChoice, setComputerChoice] = useState<number>();
  const [result, setResult] = useState<string>("");
  const [endresult, setendResult] = useState<string>("");
  const [yourscore, setyourscore] = useState<string>("");
  const [turn, setturn] = useState<boolean>(false);
  const [isplaying, setplaying] = useState<boolean>(false);
  let player: string = props.player;
  let batting: string | null;
  let bowling: string | null;
  if (player === "you") {
    batting = player;
    bowling = "computer";
    console.log({
      batting,
      bowling,
    });
  } else {
    batting = player;
    bowling = "you";
    console.log({
      batting,
      bowling,
    });
  }

  useEffect(() => {
    setendResult(`${bowling} score is ${gamebreaker}`);
  }, [computerChoice]);
  useEffect(() => {
    setyourscore(`${batting} score ${answer}`);
  }, [computerChoice]);

  useEffect(() => {
    if (isplaying && gamebreaker > answer) {
      alert(`${bowling} won`);
    }
  }, [computerChoice]);

  const generateComputerChoice = () => {
    const computerNumber: number = Math.floor(Math.random() * 10) + 1;
    setComputerChoice(computerNumber);
    checkResult(computerNumber, userChoiceRef.current);
  };
  const generateComputerChoice2 = () => {
    const computerNumber: number = Math.floor(Math.random() * 10) + 1;
    setComputerChoice(computerNumber);
    checkResult2(computerNumber, userChoiceRef.current);
  };

  const choiceset = (choice: number) => {
    userChoiceRef.current = choice;
    generateComputerChoice();
  };
  const choiceset2 = (choice: number) => {
    userChoiceRef.current = choice;
    generateComputerChoice2();
  };

  const handleUserChoice = (choice: number) => {
    choiceset(choice);
  };
  const handleUserChoice2 = (choice: number) => {
    choiceset2(choice);
  };

  const checkResult = (computerNumber: number, userChoice: number) => {
    if (computerNumber && userChoice) {
      if (userChoice === computerNumber) {
        alert(`now ${bowling} turn to bat `);
        setResult("ok");
        setturn(true);
      } else {
        sumRef.current = [...sumRef.current, userChoice, computerNumber];

        console.log("Sum:", sumRef);
      }
    }
  };

  const checkResult2 = (computerNumber: number, userChoice: number) => {
    if (computerNumber && userChoice) {
      if (userChoice === computerNumber) {
        if (gamebreaker < answer) {
          setendResult(`${bowling} score is ${gamebreaker}`);
          alert(`${batting} won the game`);
        } else if (gamebreaker === answer) {
          alert("draw");
          setendResult(`${bowling} score is ${gamebreaker}`);
        } else {
          setendResult("you won");
          setendResult(`${bowling} score is ${gamebreaker}`);
        }
      } else {
        finalRef.current = [...finalRef.current, userChoice, computerNumber];

        console.log("finalSum:", finalRef.current);
        if (answer - 20 <= gamebreaker) {
          setplaying(true);
        }
      }
    }
  };
  let answer = sumRef.current.reduce((acc, value) => acc + (value || 0), 0);
  let gamebreaker = finalRef.current.reduce(
    (acc, value) => acc + (value || 0),
    0
  );

  return (
    <div>
      {!result && (
        <div className=" text-black">
          <h1 className=" font-extrabold p-3 shadow-xl bg-[#34eb3a] text-white bold text-center rounded-3xl mb-3">
            batting by {props.player}
          </h1>

          <p>Choose a number from 1 to 10:</p>
          <ul className="flex " style={gridStyles}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <li
                key={number}
                className="text-black
                 bg-slate-50 text-center 
                 rounded-lg cursor-pointer 
                 hover:bg-slate-200  hover:shadow-xl transition duration-400 ease-in"
                onClick={() => handleUserChoice(number)}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      )}
      {result && (
        <div className=" text-black p-2">
          <h1 className=" font-extrabold p-3 shadow-xl bg-[#e64040] text-white bold text-center rounded-3xl mb-3">
            batting by {props.player === "you" ? "computer" : "you"}
          </h1>

          <p>Choose a number from 1 to 10:</p>
          <ul className="flex " style={gridStyles}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <li
                key={number}
                className=" 
                text-black bg-slate-50 
                text-center rounded-lg cursor-pointer
                 hover:bg-slate-200 shadow-md
                 transition duration-400 ease-in"
                onClick={() => handleUserChoice2(number)}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      )}

      {computerChoice && (
        <div className=" text-black p-2">
          <p>Your choice: {userChoiceRef.current}</p>
          <p>Computer's choice: {computerChoice}</p>
          <p>{yourscore}</p>

          <p>{endresult}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
