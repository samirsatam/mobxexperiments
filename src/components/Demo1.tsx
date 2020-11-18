import * as React from "react";
import "../styles.css";
import { observable, autorun } from "mobx";

export function Demo1() {
  let cart = observable({ itemCount: 0, modified: new Date() });
  autorun(() => {
    console.log(`The Cart contains ${cart.itemCount} item(s).`);
  });
  cart.itemCount++;
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
