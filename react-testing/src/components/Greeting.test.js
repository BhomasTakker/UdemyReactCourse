import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("<Greeting>", () => {
  test("Renders Hello Worldie yeah", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    //   const helloWorldElement2 = screen.getByText("Hello Worldie", {exact: false});
    //   expect(helloWorldElement2).toBeInTheDocument();
    const helloWorldElement = screen.getByText("Hello Worldie!!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});

describe("Greeting component Also tests", () => {
  test("Renders Good to see you if button not clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    const helloWorldElement2 = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(helloWorldElement2).toBeInTheDocument();
    //   const helloWorldElement = screen.getByText("Hello Worldie!!");
    //   expect(helloWorldElement).toBeInTheDocument();
  });
  test("Renders Still good to see you if button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    //   const helloWorldElement2 = screen.getByText("Hello Worldie", {exact: false});
    //   expect(helloWorldElement2).toBeInTheDocument();
    const helloWorldElement = screen.getByText("It's still good to see you");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("After click first paragraph should not be visible after button click ", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const textElement = screen.queryByText("It's good to see you");
    expect(textElement).toBeNull();
  });
});
