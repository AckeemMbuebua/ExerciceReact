import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Compteur from "./components/compteur";
import AffMas from "./components/AfficherMasquer";
import ListeElement from "./components/listeElements";
import Parent from "./components/childParent";
import Clock from "./components/horloge";
function App() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleInit = () => {
    setValue("");
  };
  return (
    <>
      <div className="justify-center flex items-center content-center p-10 flex-row flex-wrap gap-5">
        <ProfileCard
          image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          name={value}
          description="If a dog chews shoes whose shoes does he choose?"
        ></ProfileCard>
        <Compteur></Compteur>
        <div className="space-y-3">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              className="grow"
              value={value}
              placeholder="Username"
            />
          </label>
          <button onClick={handleInit} className="btn btn-error w-full h-3">
            Initaliser
          </button>
        </div>

        <AffMas />
        <ListeElement />
        <Parent />
        <Clock />
      </div>
    </>
  );
}

export default App;
