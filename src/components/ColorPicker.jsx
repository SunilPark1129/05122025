import MyComponent from "./MyComponent";

class ColorPicker extends MyComponent {
  render() {
    const { label, color, id } = this.props.item;
    const { handleColorChange } = this.props;
    const items = ["red", "blue", "green"];

    // this text appears after the component has rendered
    console.log("render:", label);

    return (
      <div style={{ border: "1px solid #454545", padding: ".5rem" }}>
        <h2>{label}</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          {items.map((item) => (
            <label key={item}>
              {item}
              <input
                type="radio"
                onChange={(e) => handleColorChange(e, id)}
                name={label}
                value={item}
                checked={color === item}
              />
            </label>
          ))}
        </div>
        <p>
          You chose <b>{color}</b> for {label}.
        </p>
      </div>
    );
  }
}

export default ColorPicker;
