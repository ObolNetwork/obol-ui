This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Testing
We use Jest and React Testing Library for testing our React components and functions. Jest is a testing framework that provides us with test runners, assertions, and mocks, while React Testing Library is a set of utilities that helps us write tests that are closer to how our end-users will interact with our application.

### Running tests
To run the tests, simply run the following command in your terminal:

```bash 
yarn run test
```

This will start the Jest test runner, which will automatically find and run all the tests in our project that match the naming pattern *.test.js or *.spec.js. located at __tests__ You can also run a specific test file by running the following command:

```bash
yarn run test <path-to-file>
```

This will run only the tests in the Button.test.js file.

### Writing tests
We write tests using Jest and React Testing Library in the same file as the component or function we are testing. For example, if we are testing a component called Button, we would create a file called Button.test.js in the same directory as the Button.js file.

Here's an example test file:

```typescript
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
```

In this example, we're testing the Button component by rendering it with different props and checking that the correct elements are present and that the onClick function is called when the button is clicked.

Husky and pre-commit hooks
We use Husky to manage Git hooks, such as pre-commit hooks. Our pre-commit hook runs the tests before committing any code changes, ensuring that we only commit code that passes all the tests.

If you try to commit changes that break the tests, Husky will prevent the commit from going through and display an error message in your terminal.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
