import { observable, action, autorun } from "mobx";
import React from "react";
// DOESNT WORK!!
class Cart {
  @observable modified = new Date();
  @observable.shallow items = [];
  constructor() {
    autorun(() => {
      console.log(`Items in Cart: ${this.items.length}`);
    });
  }

  @action
  addItem(name: string, quantity: number) {
    this.items.push({ name, quantity });
    this.modified = new Date();
  }
}

export function Demo5() {
  const cart = new Cart();
  cart.addItem("Power Cable", 1);
  cart.addItem("Shoes", 1);
  return (
    <>
      <div className="App">
        <h1>MobX Demos</h1>
        <h2>Best part is in the console.</h2>
      </div>
    </>
  );
}
