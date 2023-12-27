import { Rate } from "antd";

export const AntdRatePropsType = [
  {
    name: "allowHaf",
    label: "是否允许反选",
    type: "select",
    values: [
      {
        label: "是",
        value: true,
      },
      {
        label: "否",
        value: false,
      },
    ],
  },
  {
    name: "count",
    label: "star 总数",
    type: "input",
    value: 5,
  },
];

export const AntdRate = (props) => {
  return <Rate {...props} style={props.style} />;
};
