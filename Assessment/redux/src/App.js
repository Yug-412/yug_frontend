import React, { useState } from "react";

const App = () => {
  
  const [isCitizen, setIsCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);


  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (name === "citizen") {
      setIsCitizen(checked);
    } else if (name === "over21") {
      setIsOver21(checked);
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
   
      <h2>Are you a Citizen : {isCitizen ? "Yes" : "No"}</h2>
      <h2>Are you over 21 : {isOver21 ? "Yes" : "No"}</h2>

      <label>
        Are you a Citizen?
        <input
          type="checkbox"
          name="citizen"
          checked={isCitizen}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label>
        Are you over 21?
        <input
          type="checkbox"
          name="over21"
          checked={isOver21}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};

export default App;
