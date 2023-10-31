import { render, screen } from "@testing-library/react"
import * as React from "react"
import { Option, Select } from "../../src/components/atoms"
import { SelectProps } from "../../src/components/atoms/select/Select"

const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "maybe", label: "Maybe" },
]

const DEFAULT_PROPS = {
  id: "pizza",
  label: "Is pineapple a pizza topping?",
  options: options,
}

describe("<Option />", () => {
  function TestSelect(props: SelectProps) {
    const [value, setValue] = React.useState("")

    return (
      <Select
        name="pizza"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    )
  }

  test("should render options inside of a Select component", () => {
    const { container } = render(<TestSelect {...DEFAULT_PROPS} />)

    const optionList = screen.getAllByRole("option")
    expect(optionList.length).toBe(4)

    expect(container).toMatchSnapshot()
  })

  test("should render an option component", () => {
    const { container } = render(
      <Option key="key" value="test">
        Test
      </Option>,
    )

    const element = screen.getByRole("option")
    expect(element).toBeDefined()
    expect(element.className).toContain("Option_option")

    expect(container).toMatchSnapshot()
  })

  test("should render a disabled option component", () => {
    const { container } = render(
      <Option key="key" value="test" disabled>
        Test
      </Option>,
    )

    const element = screen.getByRole("option")
    expect(element).toBeDefined()
    expect(element.className).toContain("Option_disabled")

    expect(container).toMatchSnapshot()
  })
})
