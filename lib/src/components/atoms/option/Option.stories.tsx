import React from "react"
import Option from "./Option"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Option> = {
  title: "Components/Atoms/Option",
  component: Option,
}

export default meta
type Story = StoryObj<typeof Option>

export const Component: Story = {
  args: {
    children: "Option 1",
    disabled: false,
  },
}
