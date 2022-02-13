import React, { useEffect, useState } from "react";
import "./style/style.scss";

function Greeting({ ErrorVisible }: any) {
  //
  return (
    <div className="greetingWrapper">
      {!ErrorVisible ? (
        <h1 className="font-weight-bold">
          <div className="greetingText">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
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
