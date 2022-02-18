import React from "react";
import "./style/style.scss";

function Greeting({ ErrorVisible }: any) {
  //
  return (
    <div className="greetingWrapper">
      {!ErrorVisible ? (
        <h1 className="font-weight-bold">
          <div className="greetingText">
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span className="mr-3">O</span>
            <span>T</span>
            <span>H</span>
            <span>E</span>
            <span>R</span>
            <span>E</span>
          </div>
        </h1>
      ) : (
        <h1 className="font-weight-bold errorText" data-text="£3#@*&">
          Error!
        </h1>
      )}
    </div>
  );
}

export default Greeting;
