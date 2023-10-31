import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Box from "../box"
import Label from "../label/Label"
import Select from "./Select"

const options = [
  "Harvey Specter",
  "Mike Ross",
  "Louis Litt",
  "Donna Paulsen",
  "Jessica Pearson",
  "Rachel Zane",
  "Robert Zane",
  "Harold Gunderson",
  "Daniel Hardman",
  "Sean Cahill",
  "Alex Williams",
  "Katrina Bennett",
  "Charles Forstman",
  "Gretchen Bodinski",
  "Sheila Sazs",
  "Stu Buzzini",
  "Jonathan Sidwell",
  "Henry Gerard",
]

const meta: Meta<typeof Select> = {
  title: "Components/Atoms/Select",
  component: Select,
  args: {
    id: "suits-character",
    name: "characters",
    required: true,
    placeholder: "Select...",
    error: false,
    disabled: false,
    options: options,
  },
  argTypes: {
    error: { type: "boolean" },
    disabled: { type: "boolean" },
    placeholder: { type: "string" },
    required: { type: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Component: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.target.value)
    }

    return (
      <Box display="flex" flexDirection="column" margin="$md">
        <Label htmlFor="sauce">Who is your favorite Suits character?</Label>
        <Select
          {...args}
          options={options}
          value={value}
          onChange={handleChange}
          error={args.error}
          disabled={args.disabled}
          required={args.required}
        />
        {args.error && !args.disabled && (
          <p
            style={{
              color: "red",
              marginTop: "8px",
            }}
          >
            You must select a pasta sauce
          </p>
        )}
      </Box>
    )
  },
}
