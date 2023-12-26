import { Material } from "../material";
import { Editor } from "../editor";
import { Config } from "../config";

export const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
      }}
    >
      <Material></Material>
      <Editor></Editor>
      <Config></Config>
    </div>
  );
};
