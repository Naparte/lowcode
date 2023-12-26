import { useContext } from "react";
import { componentsList } from "../../components";
import { PageContext } from "../../store";

export const Editor = () => {
  const { list, setList, setCurrentConfigId } = useContext(PageContext);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const droppedElementName = e.dataTransfer.getData("text/plain");
    console.log(droppedElementName);

    setList(
      list.concat([
        {
          id: new Date().getTime(),
          name: droppedElementName,
          props: {},
          children: [],
        },
      ])
    );
  };

  const getComponent = (name) => {
    return componentsList.find((item) => {
      return item.name === name;
    });
  };

  const handleConfig = (id) => {
    setCurrentConfigId(id);
  };

  const renderComponent = () => {
    return list.map((item) => {
      const Component = getComponent(item.name).component;
      return (
        <span onClick={() => handleConfig(item.id)}>
          <Component {...item.props}></Component>
        </span>
      );
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
