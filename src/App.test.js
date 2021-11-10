import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders is user online text", () => {
  render(<App />);
  const linkElement = screen.getByText("is user online");
  expect(linkElement).toBeInTheDocument();
});
