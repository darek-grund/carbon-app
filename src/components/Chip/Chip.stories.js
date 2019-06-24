import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import {
  withKnobs, text, boolean
} from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { StyledChip as Chip } from './Chip';

const stories = storiesOf('Chip', module);
addDecorator(withKnobs);
addDecorator(withA11y);

stories
  .add('Default', () => (
    <Chip
      close={ boolean('With close button', true) }
    >
      {text('Children', 'Just default chip')}
    </Chip>
  ));
