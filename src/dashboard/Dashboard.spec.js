// Test away
import React from "react";
import { render } from "react-testing-library";
import Dashboard from "./Dashboard.js";
import Display from "../display/display.js";
import Controls from "../controls/Controls.js";

// Does it render without failure?
// Does it render correctly / the right thing(s)?
// Does it render expect output based on props/state/default state?
// Does it handle events correctly?

describe("<Dashboard/>", () => {
  // Does it render without failure?
  it("renders without failure", () => {
    render(<Dashboard />);
  });

  //Does it render correctly/the right things?

  it("renders the controls without failure", () => {
    render(<Display />);
  });

  it("renders the display without failure", () => {
    render(<Controls />);
  });
});
