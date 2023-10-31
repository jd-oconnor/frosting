import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { vars } from "../../../variables"
import Box from "../box"
import Button from "../button"
import Card from "./Card"

const meta: Meta<typeof Card> = {
  title: "Components/Atoms/Card",
  component: Card,
  argTypes: {
    margin: {
      options: [undefined, "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    marginY: {
      options: [undefined, "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    marginX: {
      options: [undefined, "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    padding: {
      options: [undefined, "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    paddingY: {
      options: [undefined, "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    paddingX: {
      options: [undefined, "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
  },
  args: {
    paddingX: "xl",
    paddingY: "md",
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Component: Story = {
  render: (args) => (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      width="100%"
      marginTop="$xl"
    >
      <Card {...args}>
        <h2>This is a header</h2>
        <Box marginBottom="16px" height="100px">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Box>
        <Button style={{ marginBottom: vars.space.lg }}>Click Me</Button>
      </Card>
    </Box>
  ),
}
