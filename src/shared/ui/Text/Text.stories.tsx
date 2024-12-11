import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title lorem ipsum",
    text: "Description description description",
  },
};

export const Error: Story = {
  args: {
    title: "Title lorem ipsum",
    text: "Description description description",
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Title lorem ipsum",
  },
};
export const onlyText: Story = {
  args: {
    text: "Description description description",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Title lorem ipsum",
    text: "Description description description",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
  args: {
    title: "Title lorem ipsum",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const onlyTextDark: Story = {
  args: {
    text: "Description description description",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
