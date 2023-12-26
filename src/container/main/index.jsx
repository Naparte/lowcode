import { Material } from "../material";
import { Editor } from "../editor";
import { Config } from "../config";
import { PageContext } from "../../store";
import { useState } from "react";

export const Main = () => {
  const [list, setList] = useState([]);
  const [currentConfigId, setCurrentConfigId] = useState();

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
      }}
    >
      <PageContext.Provider
        value={{
          list,
          setList,
          currentConfigId,
          setCurrentConfigId,
        }}
      >
        <Material></Material>
        <Editor></Editor>
        <Config></Config>
      </PageContext.Provider>
    </div>
  );
};
