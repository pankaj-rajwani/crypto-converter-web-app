import { NumberInput, TextInput } from '@mantine/core';
import { oneOf, shape, string, func, number, bool, object } from 'prop-types';

import style from './inputField.module.css';

export const Inputfield = ({ variant, numConfig, textConfig, classes, className, inlineStyle }) => {
  return variant === 'number' ? (
    <NumberInput
      classNames={classes}
      className={className}
      style={inlineStyle}
      label={numConfig.label ?? ''}
      placeholder={numConfig.placeholder ?? ''}
      value={numConfig.value}
      onChange={numConfig.onChange}
      min={numConfig.minValue ?? 0}
      max={numConfig.maxValue ?? 10000}
      prefix={numConfig.prefix ?? ''}
      disabled={numConfig.isDisabled ?? false}
      decimalScale={numConfig.noOfDecimalPlaces ?? 0}
      required={numConfig.isRequired ?? false}
      error={numConfig.errorMessage ?? ''}
      allowNegative={numConfig.allowNegativeNumber ?? false}
      fixedDecimalScale
      clampBehavior='strict'
    />
  ) : variant === 'text' ? (
    <TextInput
      classNames={classes}
      className={className}
      label={textConfig.label ?? ''}
      placeholder={textConfig.placeholder ?? ''}
      value={textConfig.value}
      onChange={textConfig.onChange}
      disabled={textConfig.isDisabled ?? false}
      required={textConfig.isRequired ?? false}
      error={textConfig.errorMessage ?? ''}
    />
  ) : null;
};

Inputfield.propTypes = {
  variant: oneOf(['number', 'text']),
  numConfig: shape({
    label: string,
    placeholder: string,
    defaultValue: number,
    value: number.isRequired,
    onChange: func.isRequired,
    minValue: number,
    maxValue: number,
    prefix: string,
    isDisabled: bool,
    noOfDecimalPlaces: number,
    isRequired: bool,
    errorMessage: string,
    allowNegativeNumber: bool,
  }),
  textConfig: shape({
    label: string,
    placeholder: string,
    defaultValue: string,
    value: string.isRequired,
    onChange: func.isRequired,
    isDisabled: bool,
    isRequired: bool,
    errorMessage: string,
  }),
  classes: object,
  className: string,
  inlineStyle: object,
};

Inputfield.defaultProps = {
  variant: 'number',
  numConfig: {
    label: 'Number field',
    placeholder: 'Number field',
    defaultValue: 100,
    value: 100,
    onChange: () => {},
    minValue: 1,
    maxValue: 10000,
    prefix: null,
    isDisabled: false,
    noOfDecimalPlaces: 0,
    isRequired: false,
    errorMessage: 'Error in number field',
    allowNegativeNumber: false,
  },
  textConfig: {
    label: 'Text field',
    placeholder: 'Text field',
    defaultValue: '',
    value: '',
    onChange: () => {},
    isDisabled: false,
    isRequired: false,
    errorMessage: 'Error in text field',
  },
  classes: { wrapper: style.input_field_wrapper, input: style.input_field, control: style.control },
  className: '',
  inlineStyle: {},
};
