import React from 'react';
import App from './App';
import { render, fireEvent } from "@testing-library/react";

test("renders App without crashing", () => {
  render(<App />);
});

test("pink mode test", () => {
  const { getByText } = render(<App />);
  
   const  className = "pinkMode";
   const body = document.body;
  const pinkModeToggles = getByText(/pink mode/i);
  const pinkMode = pinkModeToggles.clicked;

  if (pinkMode) {
		expect(body.classList).toContain(className);
	} else {
		expect(body.classList).not.toContain(className);
	}



  fireEvent.click(getByText(/pink mode/i)); //click on the button
});
