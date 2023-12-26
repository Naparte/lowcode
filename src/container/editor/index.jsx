import { useState } from "react";
import { componentsList } from "../../components";

export const Editor = () => {
  const [list, setList] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const droppedElementName = e.dataTransfer.getData("text/plain");
    console.log(droppedElementName);

    setList(
      list.concat({
        id: new Date().getTime(),
        name: droppedElementName,
        props: {},
        children: [],
      })
    );
  };

  const getComponent = (name) => {
    return componentsList.find((item) => {
      return item.name === name;
    });
  };

  const renderComponent = () => {
    return list.map((item) => {
      const Component = getComponent(item.name).component;
      return <Component {...item.props}></Component>;
    });
  };

  return (
    <div style={{ flex: 1, padding: "10px" }}>
      <div>设计区域</div>
      <div
        style={{
          border: "1px solid #bdbdbd",
          height: "80vh",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {renderComponent()}
      </div>
    </div>
  );
};
