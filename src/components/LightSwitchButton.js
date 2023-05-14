import React, {useState} from "react";

function LightSwitchButton(props){

  const [light, setLight ] = useState('off');

  const handleClick = () => setLight(light === "on" ? "off" : "on");

  // const handleClick = () => {
  //   if (light === 'on') {
  //     setLight('off');
  //   } else {
  //     setLight('on');
  //   }
  // }

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === "on" ? <span className="on"><i>💡</i> I'm on!</span>
       : <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;