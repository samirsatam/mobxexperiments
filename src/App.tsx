import { Demo1 } from "./components/Demo1";
import { Demo2 } from "./components/Demo2";
import { Demo3 } from "./components/Demo3";

export default function App() {
  //return Demo1();
  return Demo3();
}
/*import * as React from "react";
import "./styles.css";
import { observable, autorun } from "mobx";

export default function App() {
  let cart = observable({ itemCount: 0, modified: new Date() });
  autorun(() => {
    console.log(`The Cart contains ${cart.itemCount} item(s).`);
  });
  cart.itemCount++;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


import * as React from "react";
import "./styles.css";
import { observable, autorun, action } from "mobx";

export default function App() {
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
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/
