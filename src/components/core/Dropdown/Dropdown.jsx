import { Select } from '@mantine/core';
import { arrayOf, string, shape, func, bool, oneOfType, object } from 'prop-types';

import style from './dropdown.module.css';

export const Dropdown = ({
  data,
  value,
  classes,
  onChange,
  className,
  isDisabled,
  inlineStyle,
  allowOptionDeselect,
}) => {
  return (
    <Select
      classNames={classes}
      className={className}
      style={inlineStyle}
      data={data}
      value={value}
      onChange={(val) => onChange(val)}
      disabled={isDisabled}
      allowDeselect={allowOptionDeselect}
    />
  );
};

Dropdown.propTypes = {
  data: oneOfType([arrayOf(string).isRequired, arrayOf(shape({ label: string, value: string }))]).isRequired,
  value: string.isRequired,
  classes: object,
  onChange: func.isRequired,
  className: string,
  isDisabled: bool,
  inlineStyle: object,
  allowOptionDeselect: bool,
};

Dropdown.defaultProps = {
  classes: {
    input: style.input,
    dropdown: style.dropdown,
    option: style.option,
    root: style.root,
    section: style.section,
  },
  className: '',
  isDisabled: false,
  inlineStyle: {},
  allowOptionDeselect: false,
};
