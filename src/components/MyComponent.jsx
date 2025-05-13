import React, { Component } from "react";

export class MyComponent extends Component {
  // shallow compare
  hasUpdatedProp(obj1, obj2) {
    // check if prop item is not an object type
    if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;
    if (obj1 === null || obj2 === null) return false;

    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    // check if key size has changed
    if (key1.length !== key2.length) return true;

    // check if value has changed
    for (let key of key1) {
      if (obj1[key] !== obj2[key]) return true;
    }

    // else prevent rendering
    return false;
  }

  // check only the item prop
  // if a change is detected -> re-render
  shouldComponentUpdate(nextProps) {
    return this.hasUpdatedProp(this.props.item, nextProps.item);
  }
}

export default MyComponent;
