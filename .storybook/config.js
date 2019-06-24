import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);



/*
import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
*/
/*
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
*/

//const req = requireContext('../src', true, /\.stories\.js$/);
/*
const infoOptions = {
  header: false,
  inline: true
};
*/

/*
addDecorator(withInfo(infoOptions));
addDecorator(withKnobs);
addDecorator(withA11y);
*/
/*
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);*/
