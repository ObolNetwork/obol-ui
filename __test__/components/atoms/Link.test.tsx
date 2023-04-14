import { render, screen } from "@testing-library/react";
import { Link } from "../../../components/atoms/Link/Link";
import '@testing-library/jest-dom';

// Create a simple test component using the Link styled component

describe("Link Component", () => {
  describe("Rendering", () => {
    test("Renders with text content", () => {
      render(<Link href="#">Test Link</Link>);
      expect(screen.getByText("Test Link")).toBeInTheDocument();
    });
  });

  describe("Styling", () => {
    test("Applies default variant styles", () => {
      render(<Link href="#">Test Link</Link>);

      const testLink = screen.getByText("Test Link");
      expect(testLink).toHaveStyle({ color: "var(--colors-obolGreen)" });
    });

    test("Applies docs variant styles", () => {
      render(<Link href="#" variant="docs">Test Link</Link>);

      const testLink = screen.getByText("Test Link");
      expect(testLink).toHaveStyle({ color: "var(--colors-textMiddle)" });
    });

    test("Applies disabled styles", () => {
      render(<Link href="#" disabled>Test Link</Link>);

      const testLink = screen.getByText("Test Link");
      expect(testLink).toHaveStyle({ color: "var(--colors-muted)" });
    });
  });

  // Add more tests if needed
});
