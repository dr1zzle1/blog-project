import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia qui impedit reprehenderit incidunt vitae ullam. Illo architecto eos molestias ullam.",
  },
};

export const Dark: Story = {
  args: {
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia qui impedit reprehenderit incidunt vitae ullam. Illo architecto eos molestias ullam.",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
