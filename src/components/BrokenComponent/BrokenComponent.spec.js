import React from 'react';
import { shallow } from 'enzyme';
import BrokenComponent from './BrokenComponent';

// Demonstration of a simple test for the HelloWorld component:
describe('<BrokenComponent />', () => {
  it('throws error', () => {
    expect(() => shallow(<BrokenComponent />)).toThrowError();
  });
});
