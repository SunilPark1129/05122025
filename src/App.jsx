import React, { Component } from "react";
import ColorPicker from "./components/ColorPicker";

const mockColorData = [
  {
    label: "Color 1",
    color: "red",
    id: "1234",
  },
  {
    label: "Color 2",
    color: "red",
    id: "5667",
  },
  {
    label: "Color 3",
    color: "red",
    id: "8942",
  },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      colors: [...mockColorData],
      result: "",
    };
  }

  handleColorChange = (e, id) => {
    const { value } = e.target;
    const newColors = [...this.state.colors];
    let index = newColors.findIndex((color) => color.id === id);
    newColors[index] = { ...newColors[index], color: value };

    this.setState({ colors: newColors });
  };
  render() {
    return (
      <div>
        <h1>Color Picker</h1>
        <div style={{ display: "grid", gap: "1rem" }}>
          {this.state.colors.map((item) => (
            <ColorPicker
              key={item.id}
              handleColorChange={this.handleColorChange}
              item={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
