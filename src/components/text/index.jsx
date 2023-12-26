export const TextPorpsType = [
  {
    name: "string",
    type: "input",
    default: "default Text",
  },
  {
    name: "size",
    type: "select",
    default: "big",
  },
  {
    name: "color",
    type: "color",
    default: "#000000",
  },
];

export const Text = ({ string, size, color }) => {
  return <sapn> {string || "Default Text"}</sapn>;
};
