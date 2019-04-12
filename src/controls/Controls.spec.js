// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import Controls from "./Controls";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each"; //add this line to our test file
import { fireEvent } from "react-testing-library/dist";

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

  it("should call mock function 1x when 'lock gate' is pressed and onClick is triggered", () => {
    const mock = jest.fn();
    const { getByText } = render(
      <Controls closed={true} toggleLocked={mock} />
    );
    fireEvent.click(getByText(/lock gate/i));
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("should call mock function 1x when 'open gate' is pressed and onClick is triggered", () => {
    const mock = jest.fn();
    const { getByText } = render(
      <Controls closed={true} toggleClosed={mock} />
    );
    fireEvent.click(getByText(/open gate/i));
    expect(mock).toHaveBeenCalledTimes(1);
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

/* 
From the perspective of the Controls component in isolation, we only care about 2 things:
1. that the button text changes according to the props
2. that the buttons are enabled/disabled according to the props
For 1, we can test just as we did for the Display: pass in props and check the button text.

For 2, we finally have a use for *mocks*. Let's start with the basics: 
----If a button is *enabled*, then its onClick *will trigger* when the button is clicked. 
----If the button is *disabled*, then its onClick *will not trigger* when the button is clicked. 
But how would we know if the onClick is triggered if the function is stored in Dashboard (and is thus not available when testing Controls)?

onClick={toggleLocked} where toggleLocked is from dashboard

In order to test this, we must pass in a *mock* function as a prop, then check whether that function was triggered when the button was clicked. 



*/
