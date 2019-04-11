// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import Controls from "./Controls";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each"; //add this line to our test file

describe("Controls", () => {
  it("renders the Controls component without failure", () => {
    render(<Controls />);
  });

  it("should render two toggle buttons", () => {
    render(<Controls />);
    const buttons = document.querySelectorAll(".toggle-btn");
    expect(buttons).toHaveLength(2);
  });

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

// describe('Lock/Unlock Button', () => {
//     it('is enabled if gate is closed', () => {
//       const closed = true;
//       const mock = jest.fn();
//       const { getByText } = render(
//         <Controls closed={closed} toggleLocked={mock} />
//       );
//       fireEvent.click(getByText(/^lock gate$/i));
//       expect(mock).toHaveBeenCalledTimes(1);
//     });
//   });
