import { ShallowWrapper } from 'enzyme';

/**
 * 
 * @param {ShallowWrapper} component 
 * @param {string} attr 
 */
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);

  return wrapper;
};