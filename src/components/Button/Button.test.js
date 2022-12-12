// TODO
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render correctly", () => {
    render(<Button children="abc" />);
  });
  it("should correct props", () => {
    render(<Button disabled={true || false} />);
  });
  it("should onclick", () => {
    render(<Button onClick={Function} />);
  });
  it("should varient", () => {
    render(<Button varient={"Primary || Secondry"} />);
  });

});