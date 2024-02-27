import { Button } from "react-native";

const meta = {
  title: "ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const primary = {
  args: {
    label: "Primary",
  },
};

export const secondary = {
  args: {
    label: "Secondary",
    variant: "secondary",
  },
};
