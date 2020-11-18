import * as React from "react";
import "../styles.css";
import { observable, autorun, action } from "mobx";

export function Demo2() {
  let cart = observable({ itemCount: 0, modified: new Date() });

  autorun(() => {
    console.log(`The Cart contains ${cart.itemCount} item(s).`);
  });
  const incrementCount = action(() => {
    cart.itemCount++;
  });
  incrementCount();
  incrementCount();
  return (
    <>
      <div className="App">
        <h1>MobX Demos</h1>
        <h2>Best part is in the console.</h2>
      </div>
    </>
  );
}
