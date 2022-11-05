import React, {useState} from "react";

function Toggle() {

  const [isButtonOn, setIsButtonOn] = useState(false) ;

  const handleIsButtonText = ()=> {
    setIsButtonOn(!isButtonOn);
  }

  const color = !isButtonOn ? "red" : "green";
  
  return (
    
    <button style={{background: color}} onClick={handleIsButtonText}>{isButtonOn? "ON" : "OFF"}</button>

  );
}

export default Toggle;
