import { useState } from "react";

export default function Compteur(props) {
  let [score, setScore] = useState(0);
  const inscrementation = () => {
    if ((score) => 0) {
      score = setScore(score + 1);
    } else {
      score = 0;
    }
  };

  const init = () => {
    if (score) {
      score = setScore(0);
    }
  };

  const dinscrementation = () => {
    if (score > 0) {
      score = setScore(score - 1);
    } else {
      score = 0;
    }
  };
  return (
    <div>
      <div className="flex flex-col space-y-3 items-center justify-center">
        <h2 className="">{score}</h2>
      </div>
      <div>
        <button onClick={inscrementation} className="btn btn-primary">
          Add
        </button>
        <button onClick={dinscrementation} className="btn btn-error">
          Del
        </button>
        <button onClick={init} className="btn btn-warning">
          Init
        </button>
      </div>
    </div>
  );
}
