import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      options: [undefined, "primary", "secondary", "destructive", "text"],
      control: { type: "select" },
    },
    fontSize: {
      options: [undefined, "small", "medium", "large"],
    },
    disabled: { control: { type: "boolean" } },
    loading: { control: { type: "boolean" } },
    borderRadius: {
      options: [undefined, "small", "medium", "large", "none", "pill"],
      control: { type: "select" },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "Primary Button",
    onClick: () => {
      console.log("clicked")
    },
    variant: "primary",
    fontSize: undefined,
    disabled: false,
    loading: false,
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    onClick: () => {
      console.log("clicked")
    },
    variant: "secondary",
    fontSize: undefined,
    disabled: false,
    loading: false,
  },
}

export const Text: Story = {
  args: {
    children: "Text Button",
    onClick: () => {
      console.log("clicked")
    },
    variant: "text",
    fontSize: undefined,
    disabled: false,
    loading: false,
  },
}
