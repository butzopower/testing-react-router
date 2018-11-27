import { shallow } from 'enzyme';
import React from "react";

import App from "../src/App";

describe("App", () => {
  it("should render some text", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.text()).toMatch("Hello from React");
  });
});