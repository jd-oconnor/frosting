import type { Meta, StoryObj } from "@storybook/react"
import Box from "./Box"

const meta: Meta<typeof Box> = {
  title: "Components/Atoms/Box",
  component: Box,
}

export default meta
type Story = StoryObj<typeof Box>

export const Component: Story = {
  args: {
    backgroundColor: "$primary",
    height: "200px",
    width: "400px",
  },
}
