import { Button, ButtonPropsType } from "./button";
import { Text, TextPorpsType } from "./text";
import { AntdRate, AntdRatePropsType } from "./antd-rate";
export const componentsList = [
  {
    name: "button",
    label: "Button",
    component: Button,
    propsType: ButtonPropsType,
    desc: "Button组件描述",
  },
  {
    name: "text",
    label: "Text",
    component: Text,
    propsType: TextPorpsType,
    desc: "Text组件描述",
  },
  {
    name: "antd-rate",
    label: "antd评分组件",
    component: AntdRate,
    propsType: AntdRatePropsType,
  },
];
