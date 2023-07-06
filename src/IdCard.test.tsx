import React from "react"
import { waitFor, render } from "@testing-library/react"
import "@testing-library/jest-dom"

// import { renderWithProvider } from "__tests__/support/redux/renderWith"
import IdCard from "./IdCard"

describe("IdCard", () => {
  test("it renders page", async () => {
    const title = "Login with ID Card"
    const { asFragment, getByText, getByTestId } = render(
      <IdCard />,
    )

    // await waitFor(() => getByTestId("login-id-card-page"))
    expect(asFragment()).toMatchSnapshot()
    // expect(getByText(title)).toBeInTheDocument()
  })
})
