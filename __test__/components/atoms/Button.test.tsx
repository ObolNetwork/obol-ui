import { Button } from "../../../components/atoms/Button/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  describe("On Click Listener", () => {
    const user = userEvent.setup();
    const mockProps = {
      onClick: jest.fn(),
    };

    test("Calls onClick function passed in", async () => {
      render(<Button {...mockProps}>test</Button>);

      const testButton = screen.getByText("test");
      await user.click(testButton);

      expect(mockProps.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
