import React from 'react';
import { mount } from 'enzyme';
import { StyledChip } from './chip';

// Demonstration of a simple test for the HelloWorld component:
describe('<StyledChip />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<StyledChip />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render children when passed in', () => {
    wrapper.setProps({ children: <div>child element</div> });
    expect(wrapper.contains([<div>child element</div>])).toBe(true);
  });

  describe('close button', () => {
    let closeButton;

    beforeEach(() => {
      wrapper.setProps({ close: true });
      closeButton = wrapper.find('.close');
    });

    it('should render correctly', () => {
      expect(closeButton).toHaveLength(1);
    });

    it('should call function on click', () => {
      const onCloseCallback = jest.fn();
      wrapper.setProps({ onClose: onCloseCallback });
      closeButton.simulate('click');
      expect(onCloseCallback).toHaveBeenCalledTimes(1);
    });
  });
});
