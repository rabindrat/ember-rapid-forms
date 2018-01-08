import { not } from '@ember/object/computed';
import DS from 'ember-data';
const { Model, attr } = DS;
import { validator, buildValidations } from 'ember-cp-validations';
import InputErrors from 'ember-rapid-forms/mixins/input-errors';
import helper from 'ember-rapid-forms/mixins/ember-cp-validations-helper';

const Validations = buildValidations({
  user: [
    validator('presence', true),
    validator('length', {
      min: 3
    })
  ],
  password: [
    validator('presence', true),
    validator('length', {
      min: 4
    })
  ]
});

const Credentials = Model.extend(Validations, InputErrors, helper, {
  user: attr('string'),
  password: attr('string'),
  isntValid: not('isValid')
});

export default Credentials;
