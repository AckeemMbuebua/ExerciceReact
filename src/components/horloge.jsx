import React, { useState, useEffect } from "react";

export default function Clock() {
  // État pour stocker l'heure actuelle
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true); // État pour arrêter/redémarrer l'horloge

  // useEffect pour mettre à jour l'heure toutes les secondes
  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(timer); // Nettoyage de l'intervalle pour éviter des fuites de mémoire
    }
  }, [isRunning]); // Déclenche seulement si `isRunning` change

  // Fonction pour basculer l'état de l'horloge
  const toggleClock = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Horloge</h1>
      <p style={{ fontSize: "2rem" }}>{time.toLocaleTimeString()}</p>
      <button onClick={toggleClock}>
        {isRunning ? "Arrêter" : "Redémarrer"}
      </button>
    </div>
  );
}
