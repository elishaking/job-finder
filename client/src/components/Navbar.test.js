import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from './Navbar';
import { findByTestAttr } from '../utils/testUtils';

/**
 * Shallow render the navbar component
 * @param {*} props 
 */
const setUp = (props = {}) => {
  const component = shallow(<Navbar {...props} />);

  return component;
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

