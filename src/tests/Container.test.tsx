// Container.test.tsx
import { render, screen } from "@testing-library/react";
import Container from "components/Container";

describe("Container component", () => {
  it("renders children correctly", () => {
    const testId = "test-child";
    render(
      <Container>
        <div data-testid={testId}>Test Child</div>
      </Container>
    );

    const childElement = screen.getByTestId(testId);
    expect(childElement).toBeInTheDocument();
  });

  it("applies additional classes when className prop is provided", () => {
    const testClassName = "test-class";
    render(
      <Container className={testClassName}>
        <div>Test Child</div>
      </Container>
    );

    const containerElement = screen.getByTestId("container");
    expect(containerElement).toHaveClass(testClassName);
  });
});
