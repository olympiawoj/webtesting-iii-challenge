// Test away!
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import Display from "./Display";
import Dashboard from "../dashboard/Dashboard.js";
import Controls from "../controls/Controls.js";
import "jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

describe("Display", () => {
  it("renders the Display component without failiure", () => {
    render(<Display />);
  });

  it("should display unlocked and open on default", () => {
    const { getByText } = render(<Display />);
    expect(getByText(/Unlocked/i));
    expect(getByText(/Open/i));
  });

  it("should display Unlock Gate if user pressers close button then lock button", () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText(/Close Gate/i);

    fireEvent.click(closeButton);
    const lockButton = getByText(/Lock Gate/i);

    fireEvent.click(lockButton);
    getByText(/Unlock Gate/i);
  });

  it("should display closed if closed prop is true", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
  });

  it("should display open if closed prop is false", () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/open/i);
  });

  it("should display locked if locked prop is true", () => {
    const { getByText } = render(<Display locked={true} />);
    getByText(/locked/i);
  });

  it("should display unlocked if locked prop is false", () => {
    const { getByText } = render(<Display locked={false} />);
    getByText("Unlocked");
  });

  it("should display red-led class if closed prop is true", () => {
    const { getByText } = render(<Display closed={true} />);
    // expect(getByText(/closed/i)).toHaveClass("red-led");

    const closeDiv = getByText(/closed/i);
    expect(closeDiv).toHaveClass("red-led");
  });

  it("should display red-led class if locked prop is true", () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/locked/i)).toHaveClass("red-led");
  });

  it("should display green-led class if closed prop is false", () => {
    const { getByText } = render(<Display closed={false} />);
    expect(getByText(/open/i)).toHaveClass("green-led");
  });

  it("should display green-led class if locked prop is false", () => {
    const { getByText } = render(<Display locked={false} />);
    expect(getByText(/unlocked/i)).toHaveClass("green-led");
  });
});
