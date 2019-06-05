import React, { useState } from 'react';
import { Row, Column } from 'carbon-react/lib/components/row';
import Fieldset from 'carbon-react/lib/components/fieldset';
import Textbox from 'carbon-react/lib/components/textbox';
import Textarea from 'carbon-react/lib/components/textarea';
import DateInput from 'carbon-react/lib/components/date';
import LengthValidator from 'carbon-react/lib/utils/validations/length';
import PresenceValidator from 'carbon-react/lib/utils/validations/presence';
import RegexValidator from 'carbon-react/lib/utils/validations/regex';
import DateValidator from 'carbon-react/lib/utils/validations/date-within-range';
import DateHelper from 'carbon-react/lib/utils/helpers/date';

const today = DateHelper.todayFormatted('YYYY-MM-DD');

const LandingPage = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(today);
  const [text, setText] = useState('');

  return (
    <Row>
      <Column>
        <Fieldset>
          <Textbox
            label='Name'
            value={ name }
            onChange={ e => setName(e.target.value) }
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
            value={ date }
            onChange={ e => setDate(e.target.value) }
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
            value={ text }
            onChange={ e => setText(e.target.value) }
            validations={ [
              new RegexValidator({
                format: /^[^@#$%^&*]+$/,
                customMessage: 'Text should not contain any of the signs: @#$%^&*'
              })
            ] }
            labelInline
            labelWidth={ 20 }
          />
        </Fieldset>
      </Column>
    </Row>
  );
};

export default LandingPage;
