import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import { findByTestAttr } from '../../utils/testUtils';

const setUp = (props = {}) => {
  const component = shallow(<Home {...props} />);

  return component;
};

describe('Home Route Component', () => {
  describe('Have Props', () => {
    const props = {
      testProp: true
    }

    const component = setUp(props);

    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'homeComponent');

      expect(wrapper.length).toEqual(1);
    });

    it('should render a form', () => {
      const form = findByTestAttr(component, 'searchForm');

      expect(form.length).toEqual(1);
    });

    it('should render actions', () => {
      const actions = findByTestAttr(component, 'actions');

      expect(actions.length).toEqual(1);
    });

    it('should render test element', () => {
      const testElem = findByTestAttr(component, 'test');

      expect(testElem.length).toEqual(1);
    });
  });

  describe('Have No Props', () => {
    const component = setUp();

    it('should not render test element', () => {
      const testElem = findByTestAttr(component, 'test');

      expect(testElem.length).toEqual(0);
    });
  });
});
