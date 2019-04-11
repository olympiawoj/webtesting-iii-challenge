// Test away!
import React from "react";
import { render } from "react-testing-library";
import Controls from "./Controls";

describe("Controls", () => {
  it("renders the Controls component without failure", () => {
    render(<Controls />);
  });
});
