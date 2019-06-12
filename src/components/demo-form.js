import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fieldset from 'carbon-react/lib/components/fieldset';
import Textbox from 'carbon-react/lib/components/textbox';
import Textarea from 'carbon-react/lib/components/textarea';
import DateInput from 'carbon-react/lib/components/date';
import Form from 'carbon-react/lib/components/form';
import Dropdown from 'carbon-react/lib/components/dropdown';
import LengthValidator from 'carbon-react/lib/utils/validations/length';
import PresenceValidator from 'carbon-react/lib/utils/validations/presence';
import RegexValidator from 'carbon-react/lib/utils/validations/regex';
import DateValidator from 'carbon-react/lib/utils/validations/date-within-range';
import DateHelper from 'carbon-react/lib/utils/helpers/date';
import ImmutableHelper from 'carbon-react/lib/utils/helpers/immutable';

const today = DateHelper.todayFormatted('YYYY-MM-DD');
const items = ImmutableHelper.parseJSON([
  { id: 1, name: 'First Item' },
  { id: 2, name: 'Second Item' },
  { id: 3, name: 'Third Item' }
]);

export default class DemoForm extends Component {
  state = {
    name: '',
    date: today,
    text: '',
    item: null
  };

  static propTypes = {
    saveForm: PropTypes.func.isRequired
  }

  setStateValue = (stateKey, value) => {
    this.setState({
      [stateKey]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveForm({
      name: this.state.name,
      date: this.state.date,
      text: this.state.text,
      item: this.state.item
    });
  }

  render() {
    return (
      <Form
        unsavedWarning={ false }
        cancel={ false }
        onSubmit={ this.handleSubmit }
      >
        <Fieldset>
          <Textbox
            label='Name'
            fieldHelp='Name should be 4 - 10 letters long'
            value={ this.state.name }
            onChange={ e => this.setStateValue('name', e.target.value) }
            validations={ [
              new PresenceValidator({ customMessage: 'Name is required' }),
              new LengthValidator({
                min: 4,
                max: 10,
                customMessage: 'Name should Should be at least 2 length'
              })
            ] }
            labelInline
            labelWidth={ 20 }
          />
          <DateInput
            fieldHelp='Date date must be in range of 3 days from today'
            value={ this.state.date }
            onChange={ e => this.setStateValue('date', e.target.value) }
            validations={ [
              new DateValidator(3, {
                customMessage: 'Selected date must be in range of 3 days from today'
              })
            ] }
            label='Date'
            labelInline
            labelWidth={ 20 }
          />
          <Textarea
            label='Text'
            fieldHelp='Signs like @#$%^&amp;* are not allowed'
            value={ this.state.text }
            onChange={ e => this.setStateValue('text', e.target.value) }
            validations={ [
              new RegexValidator({
                format: /^[^@#$%^&*]+$/,
                customMessage: 'Text should not contain any of the signs: @#$%^&*'
              })
            ] }
            labelInline
            labelWidth={ 20 }
          />
          <Dropdown
            label='Items'
            value={ this.state.item }
            onChange={ e => this.setStateValue('item', e.target.value) }
            options={ items }
            labelInline
            labelWidth={ 20 }
          />
        </Fieldset>
      </Form>
    );
  }
}
