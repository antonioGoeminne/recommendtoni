import { Select } from "../../src/ui/select/Select";

const meta = {
  title: "ui/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const SelectDefault = {
  args: {
    items: [
      { label: "option 1", value: 1 },
      { label: "option 2", value: 2 },
    ],
    onChange: (e) => console.log(e),
    placeHolder: "Seleccionar opcion",
  },
};
