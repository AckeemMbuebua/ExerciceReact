import { useState } from "react";

function Child({ value, onClick }) {
  return (
    <>
      <p>Valeur actuelle : {value}</p>
      <button className="btn btn-primary" onClick={onClick}>
        Incrementation
      </button>
    </>
  );
}

export default function Parent(params) {
  const [values, setValue] = useState([0, 0, 0]);
  const incrementValue = (index) => {
    setValue((prevValues) =>
      prevValues.map((val, i) => (i === index ? val + 1 : val))
    );
  };
  return (
    <>
      <div>
        <h1>Composant parent</h1>
        {values.map((val, index) => (
          <Child
            key={index}
            value={val}
            onClick={() => incrementValue(index)}
          />
        ))}
      </div>
    </>
  );
}
