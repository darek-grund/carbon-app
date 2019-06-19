import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import HeaderText from './HeaderText';
import { theme } from '../../context/ThemeContext';

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

  it('applies default styles', () => {
    const wrapper = renderer.create(<HeaderText />).toJSON();
    expect(wrapper).toHaveStyleRule('padding', '30px');
    expect(wrapper).toHaveStyleRule('text-align', 'center');
    expect(wrapper).toHaveStyleRule('font-size', '20px');
    expect(wrapper).toHaveStyleRule('font-weight', '700');
  });

  it('applies default theme styles', () => {
    const wrapper = renderWithTheme({ theme: theme.default }).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('applies dark theme styles', () => {
    const wrapper = renderWithTheme({ theme: theme.dark }).toJSON();
    expect(wrapper).toHaveStyleRule('color', '#eee');
    expect(wrapper).toHaveStyleRule('background-color', '#333');
  });
});

// eslint-disable-next-line no-shadow
function renderWithTheme({ theme, ...props }) {
  return renderer.create(
    <ThemeProvider theme={ theme }>
      <HeaderText { ...props } />
    </ThemeProvider>
  );
}
