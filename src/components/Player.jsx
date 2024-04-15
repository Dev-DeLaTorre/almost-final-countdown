import { useState } from "react";

export default function Player() {
  
  const [name, setName] = useState("");
  
  let newName = "";
  
  function ClickHandler(){
    setName(newName);
  }

  function ChangeName(event){
    newName = event.target.value; 
  }

  return (
    <section id="player">
      <h2>Welcome {(name) ? name : "unknown entity" }</h2>
      <p>
        <input type="text" onChange={(e) => ChangeName(e)}/>
        <button onClick={ClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
