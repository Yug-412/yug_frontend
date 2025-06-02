import React, { useState } from "react";

const App = () => {
  const [citizen, setcitizen] = useState(false);
  const [over21, setover21] = useState(false);

  const handlechange = (e) => {
    const { name, checked } = e.target;

    if (name == "citizen") {
      setcitizen(checked);
    } else if (name == "over21") {
      setover21(checked);
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Are you a Citizen : {citizen ? "yess" : "no"}</h2>
      <h2>Are you over 21 :{over21 ? "yess" : "no"} </h2>

      <label>
        Are you a Citizen?
        <input
          type="checkbox"
          name="citizen"
          checked={citizen}
          onChange={handlechange}
        />
      </label>
      <br />
      <label>
        Are you over 21?
        <input
          type="checkbox"
          name="over21"
          checked={over21}
          onChange={handlechange}
        />
      </label>
    </div>
  );
};

export default App;
