import { useState } from "react";

export default function AffMas(props) {
  const [etat, setEtat] = useState(true);
  const state = () => {
    setEtat(!etat);
  };

  return (
    <button
      onClick={state}
      className={"btn " + (etat ? "btn-primary" : "btn-warning")}
    >
      {etat ? "Afficher" : "Masquer"}
    </button>
  );
}
