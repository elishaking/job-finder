import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Navbar } from './Navbar';

/**
 * Shallow render the navbar component
 * @param {*} props 
 */
const setUp = (props = {}) => {
  const component = shallow(<Navbar {...props} />);

  return component;
};

/**
 * 
 * @param {ShallowWrapper} component 
 * @param {string} attr 
 */
const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);

  return wrapper;
};

describe('Navbar Component', () => {
  const component = setUp();

  it('should render without errors', () => {
    const wrapper = component.find('nav');
    const wrapper2 = findByTestAttr(component, 'navbarComponent');

    expect(wrapper.length).toEqual(1);
    expect(wrapper2.length).toEqual(1);
  });

  it('should render a logo', () => {
    const wrapper = component.find('h1');
    expect(wrapper.length).toEqual(1);
  });
})

