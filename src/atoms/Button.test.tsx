import { render, screen } from "@testing-library/react";
import { Button } from "app/atoms/Button";

describe("<Button />", () => {
  it("should trigger click handler", () => {
    const mockHandleClick = jest.fn();
    render(<Button onClick={mockHandleClick}>Text Content</Button>);
    screen.getByRole("button", { name: "Text Content" }).click();
    expect(mockHandleClick).toBeCalled();
  });

  it.todo("should not call handler if type is 'submit'");
});
