import * as React from "react";
import "../styles.css";
import { observable, action } from "mobx";

export function Demo3() {
  const cart = observable.object({
    items: [] as string[],
    modified: new Date(),

    get description() {
      switch (this.items.length) {
        case 0:
          return "There are no items in the cart";
        case 1:
          return "There is one item in the cart";
        default:
          return `There are ${this.items.length} items in the cart`;
      }
    }
  });
  console.log(cart.description);

  const addItem = action((name: string) => {
    cart.items.push(name);
  });
  addItem("Apple");
  console.log(cart.description);

  // const removeItem = action((name: string) => {
  //   const item = cart.items.find((x) => x === name);
  //   if (item) {
  //     cart.items.remove(item);
  //   }
  // });

  return (
    <>
      <div className="App">
        <h1>MobX Demos</h1>
        <h2>Best part is in the console.</h2>
      </div>
    </>
  );
}
