import React from 'react';
import { mount, shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

const ComponentWithError = () => <div>Error Component</div>;

// Demonstration of a simple test for the HelloWorld component:
describe('<ErrorBoundary />', () => {
  it('renders as expected', () => {
    const children = <div>children</div>;
    const wrapper = shallow(<ErrorBoundary>{children}</ErrorBoundary>);
    expect(wrapper).toMatchSnapshot();
  });

  it('displays error message when wrapped component throws', () => {
    const wrapper = mount(<ErrorBoundary><ComponentWithError /></ErrorBoundary>);
    wrapper.find(ComponentWithError).simulateError(new Error());
    expect(wrapper.state('hasError')).toBe(true);
  });
});
