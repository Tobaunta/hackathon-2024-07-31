import React, { useState } from "react";
import "./CardPanel.css";

const ELEMENTS = [
  { name: "0" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
];

const CardPanel = () => {
  const [isSmall, setIsSmall] = useState(false);
  const handleClick = () => {
    setIsSmall(!isSmall);
  };


  const returnElement = () => {
    return ELEMENTS.map((element, index) => {
      const delay = `${index * 1}s`
      return (
        <div
          key={element.name}
          className={isSmall ? "small-elements__card" : "large-elements__card"}
          style={{ animationDelay: delay }}
          onClick={handleClick}
        ></div>

      );
    });
  };

  return (
    <div className="card-panel">
      <div className={isSmall ? "small-elements" : "large-elements"}>
        {returnElement(false)}
      </div>
    </div>
  );
};

export default CardPanel;
