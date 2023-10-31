import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "../../src/components/atoms"

const BUTTON_LABEL = "Test"

describe("<Button />", () => {
  test("renders correct button label", () => {
    const clickHandler = jest.fn()

    render(
      <>
        <Button variant="primary" onClick={clickHandler}>
          {BUTTON_LABEL}
        </Button>
      </>,
    )
    const button = screen.getByRole("button", { name: BUTTON_LABEL })

    expect(button).toBeDefined()
  })

  test("should be disabled", () => {
    const clickHandler = jest.fn()
    render(
      <>
        <Button disabled variant="primary" onClick={clickHandler}>
          {BUTTON_LABEL}
        </Button>
      </>,
    )

    const button = screen.getByRole("button", { name: BUTTON_LABEL })
    expect(button).toBeDefined()
    expect(button).toBeDisabled()

    userEvent.click(button)
    expect(clickHandler).toBeCalledTimes(0)
  })

  test("should fire onClick event", async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <>
        <Button onClick={handleClick} variant="primary">
          {BUTTON_LABEL}
        </Button>
      </>,
    )

    const button = screen.getByRole("button", { name: BUTTON_LABEL })
    expect(button).toBeDefined()

    await user.click(button)
    expect(handleClick).toBeCalledTimes(1)
  })

  test("should render primary variant", () => {
    const clickHandler = jest.fn()

    const { container } = render(
      <>
        <Button variant="primary" onClick={clickHandler}>
          {BUTTON_LABEL}
        </Button>
      </>,
    )

    expect(container).toMatchSnapshot()
  })

  test("should render primary variant and small fontSize", () => {
    const clickHandler = jest.fn()

    const { container } = render(
      <>
        <Button variant="primary" fontSize="small" onClick={clickHandler}>
          {BUTTON_LABEL}
        </Button>
      </>,
    )

    expect(container).toMatchSnapshot()
  })

  test("should render secondary variant", () => {
    const clickHandler = jest.fn()

    const { container } = render(
      <>
        <Button variant="secondary" onClick={clickHandler}>
          {BUTTON_LABEL}
        </Button>
      </>,
    )

    expect(container).toMatchSnapshot()
  })

  test("should render text variant", () => {
    const clickHandler = jest.fn()

    const { container } = render(
      <>
        <Button variant="text" onClick={clickHandler}>
          {BUTTON_LABEL}
        </Button>
      </>,
    )

    expect(container).toMatchSnapshot()
  })

  test("should render spinner when loading is true", () => {
    const clickHandler = jest.fn()

    const { container } = render(
      <>
        <Button loading variant="primary" onClick={clickHandler}>
          {BUTTON_LABEL}
        </Button>
      </>,
    )

    expect(container).toMatchSnapshot()

    const button = screen.getByRole("button", { name: BUTTON_LABEL })
    userEvent.click(button)
    expect(clickHandler).toBeCalledTimes(0)
  })
})
