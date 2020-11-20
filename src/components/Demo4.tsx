import { observer } from "mobx-react";
import { observable } from "mobx";
import React from "react";

export function Demo4() {
  // you need to use the box function for premitives.
  const item = observable.box(30);
  // 1. Create the component with observer function
  const ItemComponent = observer(() => {
    // 2. Read an observable item
    return <h1>Current Item Value = {item.get()}</h1>;
  });

  // 3. Update item
  setTimeout(() => item.set(50), 5000);
  return (
    <>
      <ItemComponent />
    </>
  );
}
