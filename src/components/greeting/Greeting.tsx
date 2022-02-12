import React, { useEffect, useState } from "react";
import "./style/style.scss";

function Greeting() {
  const [ErrorVisible, setErrorVisible] = useState(false);
  //
  useEffect(() => {
    setTimeout(() => {
      setErrorVisible(true);
    }, 1600);
  }, []);

  return (
    <div className="greetingWrapper">
      {!ErrorVisible ? (
        <h1 className="font-weight-bold">Greeting!</h1>
      ) : (
        <h1 className="font-weight-bold">Error!</h1>
        
      )}
    </div>
  );
}

export default Greeting;
