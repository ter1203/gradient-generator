import React from "react";
function App() {
  const [colors, setColors] = React.useState([
    "#FFD500",
    "#FF0040",
    "#FF0040",
    "#FF0040",
    "#FF0040",
  ]);
  const [numOfVisibleColors, setNumOfVisibleColors] = React.useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);
  const colorStops = colors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  function addColor() {
    if (numOfVisibleColors.length >= 5) return;

    setNumOfVisibleColors(numOfVisibleColors + 1);
  }

  function removeColor() {
    if (numOfVisibleColors.length <= 2) return;

    setNumOfVisibleColors(numOfVisibleColors - 1);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>Remove color</button>
        <button onClick={addColor}>Add color</button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {visibleColors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(event) => {
                    const newColors = [...colors];
                    newColors[index] = event.target.value;
                    setColors(newColors);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
