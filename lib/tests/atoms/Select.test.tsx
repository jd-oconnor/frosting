import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import Select, { SelectProps } from "../../src/components/atoms/select/Select"

const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
]

const DEFAULT_PROPS = {
  id: "pizza",
  label: "Is pineapple a pizza topping?",
  options: options,
}

describe("<Select />", () => {
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

  test("should display the correct number of options", () => {
    render(<TestSelect {...DEFAULT_PROPS} />)

    const optionList = screen.getAllByRole("option")
    expect(optionList.length).toBe(3) // includes placeholder
  })

  test("renders", () => {
    const { container } = render(<TestSelect {...DEFAULT_PROPS} />)

    expect(container).toMatchSnapshot()
  })

  test("renders a placeholder", () => {
    const { container } = render(
      <TestSelect {...DEFAULT_PROPS} placeholder="Select yes or no..." />,
    )

    const select = screen.getByRole("combobox")
    expect(select).toHaveAttribute("placeholder", "Select yes or no...")
    expect(container).toMatchSnapshot()
  })

  test("removes invalid styling when input becomes valid", async () => {
    const user = userEvent.setup()

    const { container } = render(<TestSelect {...DEFAULT_PROPS} required />)

    const select = screen.getByRole("combobox")
    expect(select).toBeInvalid()

    await user.selectOptions(select, "yes")

    expect(select).toBeValid()
    expect(container).toMatchSnapshot()
  })

  test("calls a given onChange prop when change event is dispatched", async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()

    render(<TestSelect {...DEFAULT_PROPS} onChange={onChange} />)

    await user.selectOptions(screen.getByRole("combobox"), "yes")

    expect(onChange).toBeCalledTimes(1)
  })
})
