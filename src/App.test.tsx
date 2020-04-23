import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  
  it('renders', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('matches snapshot', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});