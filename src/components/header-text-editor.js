import React from 'react';
import PropTypes from 'prop-types';
import Textbox from 'carbon-react/lib/components/textbox';


const HeaderTextEditor = (props) => {
  const { text, saveText } = props;

  return (
    <div>
      <Textbox
        value={ text }
        onChange={ e => saveText(e.target.value) }
        label='Header Text'
        labelHelp='This input modifies header text'
      />
    </div>
  );
};

HeaderTextEditor.propTypes = {
  text: PropTypes.string,
  saveText: PropTypes.func
};

HeaderTextEditor.defaultProps = {
  text: '',
  saveText: () => {}
};

export default HeaderTextEditor;
