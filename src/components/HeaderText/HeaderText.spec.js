import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import HeaderText from './HeaderText';

// Demonstration of a simple test for the HelloWorld component:
describe('<HeaderText />', () => {
  it('renders as expected', () => {
    const wrapper = renderer.create(<HeaderText />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders text', () => {
    const text = 'just random text';
    const wrapper = shallow(<HeaderText text={ text } />);
    expect(wrapper.contains(text)).toBe(true);
  });
});
