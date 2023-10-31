import type { Meta, StoryObj } from "@storybook/react"
import Label from "./Label"

const meta: Meta<typeof Label> = {
  title: "Components/Atoms/Label",
  component: Label,
}

export default meta
type Story = StoryObj<typeof Label>

export const Component: Story = {
  args: {
    children: "This is a label",
    htmlFor: "story",
    error: false,
    disabled: false,
    required: false,
  },
}
