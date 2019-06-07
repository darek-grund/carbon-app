import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Textbox from 'carbon-react/lib/components/textbox';


const TextDecorator = (props) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <Textbox
        label='Render Props Demo'
        value={ value }
        onChange={ e => setValue(e.target.value) }
      />
      {props.children(value)}
    </div>
  );
};

TextDecorator.propTypes = {
  children: PropTypes.func.isRequired
};

export default TextDecorator;
