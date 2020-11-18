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
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
