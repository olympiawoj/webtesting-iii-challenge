// Test away!
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import Display from "./Display";
import Dashboard from "../dashboard/Dashboard.js";
import Controls from "../controls/Controls.js";

afterEach(() => {
  cleanup();
});

describe("Display", () => {
  // it("renders the Display component without failiure", () => {
  //   render(<Display />);
  // });

  // it("tests that gate is default to locked and open ", () => {
  //   const { getByText } = render(<Display />);
  //   expect(getByText(/Unlocked/i));
  //   expect(getByText(/Open/i));
  // });

  it("cannot be closed or opened if it is locked", () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText(/Close Gate/i);
    console.log(closeButton);

    // const closeButton = document.getElementById("openButton"); -- must set a reference

    fireEvent.click(closeButton);
    const lockButton = getByText(/Lock Gate/i);

    fireEvent.click(lockButton);
    getByText(/Unlock Gate/i);

    // console.log(lockButton);
  });
});
