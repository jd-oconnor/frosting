import { render } from "@testing-library/react"
import { Card } from "../../src/components/atoms"

describe("<Card />", () => {
  test("should render a Card component with an h3 and body text", () => {
    const { container } = render(
      <Card>
        <h3>Card 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </Card>,
    )

    expect(container).toMatchSnapshot()
  })
})
