// Test away
import React from "react";
import { render } from "react-testing-library";
import Dashboard from "./Dashboard.js";
import Display from "../display/display.js";
import Controls from "../controls/Controls.js";

// ### Dashboard
// - shows the controls and display

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
