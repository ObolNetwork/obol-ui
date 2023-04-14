import { Button } from "../../../components/atoms/Button/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

describe("Button Component", () => {
  const mockProps = {
    onClick: jest.fn(),
  };

  describe("Rendering", () => {
    test("Renders with text content", () => {
      render(<Button {...mockProps}>test</Button>);
      expect(screen.getByText("test")).toBeInTheDocument();
    });

    // Add more rendering tests here if needed
  });

  describe("User Interactions", () => {
    test("Calls onClick function passed in", async () => {
      render(<Button {...mockProps}>test</Button>);

      const testButton = screen.getByText("test");
      await userEvent.click(testButton);

      expect(mockProps.onClick).toHaveBeenCalledTimes(1);
    });

    // Add more interaction tests here if needed
  });

  describe("Accessibility", () => {
    test("Has accessible role", () => {
      render(<Button {...mockProps}>test</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    // Add more accessibility tests here if needed
  });
});
