import React from 'react';
import { shallow } from 'enzyme';
import BrokenComponent from './BrokenComponent';

describe('<BrokenComponent />', () => {
  it('throws error', () => {
    expect(() => shallow(<BrokenComponent />)).toThrowError();
  });
});
