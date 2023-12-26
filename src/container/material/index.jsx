import { useState } from "react";
import { componentsList } from "../../components";
export const Material = () => {
  const [isDragging, setDragging] = useState(false);

  const handleDragStart = (e, item) => {
    setDragging(true);
    e.dataTransfer.setData("text/plain", item.name);
    console.log(item.name);
  };
  const handleDragEnd = () => {
    setDragging(false);
  };
  return (
    <div
      style={{
        width: "200px",
        borderRight: "1px solid #bdbdbd",
      }}
    >
      组件库区
      <div style={{ padding: "10px" }}>
        {componentsList.map((item) => {
          return (
            <div
              draggable
              style={{
                border: "1px solid #bdbdbd",
                borderRadius: "5px",
                padding: "5px",
                marginBottom: "5px",
              }}
              onDragStart={(e) => handleDragStart(e, item)}
              onDragEnd={handleDragEnd}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
