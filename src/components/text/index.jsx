export const TextPorpsType = [
  {
    name: "string",
    type: "input",
    default: "default Text",
    label: "文字内容",
  },
  {
    name: "size",
    type: "select",
    default: "big",
    label: "文字大小",
  },
  {
    name: "color",
    type: "color",
    default: "#000000",
    label: "文字颜色",
  },
];

export const Text = ({ string, size, color }) => {
  return <sapn> {string || "Default Text"}</sapn>;
};
