import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import Products from './index';
import { AppContextProvider } from '../../store/AppContext';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('renders without crashing', () => {
  render(
    <AppContextProvider>
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    </AppContextProvider>
    , container
  );
});

it("has greated table", () => {
  act(() => {
    render(
      <AppContextProvider>
        <BrowserRouter>
          <Products />
        </BrowserRouter>
      </AppContextProvider>
      , container
    );
  });
  
  expect(
    container.querySelector("[data-testid='products-table']").children.length
  ).toBe(4)
})