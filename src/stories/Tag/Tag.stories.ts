import type { Meta, StoryObj } from "@storybook/vue3-vite";

// import { fn } from "storybook/test";

import Tag from "./Tag.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Example/Tag",
  component: Tag,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    text: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: "https://example.com",
    text: "Tag",
  },
};

export const Secondary: Story = {
  args: {
    href: "https://example.com",
    text: "Tag",
  },
};

export const Large: Story = {
  args: {
    href: "https://example.com",
    text: "Tag",
  },
};

export const Small: Story = {
  args: {
    href: "https://example.com",
    text: "Tag",
  },
};
