import * as React from "react";
import "../styles.css";
import { observable, autorun, action } from "mobx";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function Demo2() {
  let cart = observable({ itemCount: 0, modified: new Date() });

  autorun(() => {
    console.log(`The Cart contains ${cart.itemCount} item(s).`);
  });

  const incrementCount = action(() => {
    cart.itemCount++;
  });

  (async () => {
    await delay(1000);
    incrementCount();
  })();

  (async () => {
    await delay(2000);
    incrementCount();
  })();

  (async () => {
    await delay(3000);
    incrementCount();
  })();

  (async () => {
    await delay(4000);
    incrementCount();
  })();

  return (
    <>
      <div className="App">
        <h1>MobX Demos</h1>
        <h2>Best part is in the console.</h2>
      </div>
    </>
  );
}
