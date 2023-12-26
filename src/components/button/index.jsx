import "./index.css";

export const ButtonPropsType = [
  {
    name: "text",
    type: "input",
    default: "Default button",
  },
  {
    name: "size",
    type: "select",
    default: "big",
  },
];

export const Button = ({ text, size }) => {
  return <button className={`${size}`}>{text || "Default Btn"}</button>;
};
