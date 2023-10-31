import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Box from "../box"
import MenuInput from "./MenuInput"

const meta: Meta<typeof MenuInput> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Atoms/MenuInput",
  component: MenuInput,
  args: {
    name: "name",
    label: "Name",
    required: true,
    disabled: false,
    placeholder: "Tap to Set Up",
    error: false,
    type: "text",
    value: "",
  },
  argTypes: {
    disabled: { type: "boolean" },
    error: { type: "boolean" },
    name: { type: "string" },
    placeholder: { type: "string" },
    type: {
      options: [
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ],
      control: { type: "select" },
    },
    required: { type: "boolean" },
    value: { type: "string" },
    min: { type: "number" },
    max: { type: "number" },
  },
}

export default meta
type Story = StoryObj<typeof MenuInput>

export const Component: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    return (
      <form>
        <Box display="flex" flexDirection="column" margin="xl">
          {/* <Label
            htmlFor="name"
            error={args.error && value === ""}
            disabled={args.disabled}
            required={args.required}
          >
            Name
          </Label> */}
          <MenuInput
            {...args}
            value={value}
            onChange={handleChange}
            error={args.error && value === ""}
          />
        </Box>
      </form>
    )
  },
}
