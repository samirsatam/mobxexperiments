import * as React from "react";
import "../styles.css";
import { observable, autorun } from "mobx";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function Demo1() {
  let cart = observable({ itemCount: 0, modified: new Date() });
  autorun(() => {
    console.log(`The Cart contains ${cart.itemCount} item(s).`);
  });

  (async () => {
    await delay(3000);
    cart.itemCount++;
  })();

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
