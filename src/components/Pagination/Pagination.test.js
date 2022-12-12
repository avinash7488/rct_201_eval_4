
import { render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  it("should render correctly", () => {
    render(<Pagination count={10} />);
  });
  it("should correct props", () => {
    render(<Pagination currentPage={10}  />);
  });
  it("should correct props", () => {
    render(<Pagination updateCurrentPage={10}  />);
  });
});