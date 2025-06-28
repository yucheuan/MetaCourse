import "./App.css";
import { useEffect, useState } from "react";

//MousePosition only take care of parameter, instead of visualization logic
const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    };

    //keep tracking window's mouse
    // 👇 in useEffect, This runs once after the component is first added to the DOM
    window.addEventListener("mousemove", handleMousePositionChange);

    // 👇 in useEffect, This function is registered by React
    return () => {
      // 🧹 React will call this when the component is unmounted
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render({mousePosition});
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({mousePosition}) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = ({mousePosition}) => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  return (
    <MousePosition 
      render={( {mousePosition} ) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  )
};

export { PanelMouseLogger, PointMouseLogger }