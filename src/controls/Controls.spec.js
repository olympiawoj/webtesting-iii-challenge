// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import Controls from "./Controls";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Controls", () => {
  it("renders the Controls component without failure", () => {
    render(<Controls />);
  });

  //   it("should render two toggle buttons", () => {
  //     const buttons = document.querySelectorAll(".toggle-btn");
  //     console.log(buttons);
  //     expect(buttons).toHaveLength(2);
  //   });

  it("should display disabled 'lock gate' button on default", () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/lock gate/i)).toBeDisabled();
  });

  it("should display enabled 'close gate' button on default", () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/close gate/i)).toBeEnabled();
  });

  it("should display enabled 'lock gate' button after closing gate with props", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    expect(getByText(/lock gate/i)).toBeEnabled();
  });

  it("should display disabled 'open gate' after locking gate with props", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);

    expect(getByText(/open gate/i)).toBeDisabled();
  });
});
