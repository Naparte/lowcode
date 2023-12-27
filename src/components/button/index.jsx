import "./index.css";

export const ButtonPropsType = [
  {
    name: "text",
    type: "input",
    default: "Default button",
    label: "按钮内容",
  },
  {
    name: "size",
    type: "select",
    values: [
      {
        label: "大",
        value: "big",
      },
      {
        label: "中",
        value: "middle",
      },
      {
        label: "小",
        value: "smalll",
      },
    ],
    default: "big",
    label: "按钮大小",
  },
];

export const Button = ({ text, size, style }) => {
  return (
    <button style={style} className={`button-size-${size}`}>
      {text || "Default Btn"}
    </button>
  );
};
