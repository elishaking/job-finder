import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from './Navbar';

describe('Navbar Component', () => {
  it('should render without errors', () => {
    const component = shallow(<Navbar />);
    const wrapper = component.find('nav');
    expect(wrapper.length).toEqual(1);
  });
})

