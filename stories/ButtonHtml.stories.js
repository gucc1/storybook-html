import { createButton } from "./ButtonHtmlString";
import { injectParamForHtml } from "./injectParamForHtml";
import template from "./html/button.html";

export default {
  title: "Example/HTMLを外部ファイルとして読み込む",
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = ({ label, ...args }) => {
  const size = args.size || "medium";
  const blockClass = [
    "storybook-button",
    `storybook-button--${size}`,
    args.primary ? "storybook-button--primary" : "storybook-button--secondary",
  ];

  // argsの整形はここでやる
  const params = {
    label,
    blockClass,
  };

  return injectParamForHtml(template, params);
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
