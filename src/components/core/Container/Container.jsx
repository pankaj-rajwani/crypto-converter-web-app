import { Card } from '@mantine/core';
import { oneOf, oneOfType, element, string, object, bool, array } from 'prop-types';

import style from './container.module.css';

export const Container = ({ shadow, padding, radius, borderRequired, className, inlineStyle, children }) => {
  return (
    <Card
      className={`${style.container_root} ${className}`}
      style={inlineStyle}
      shadow={shadow}
      padding={padding}
      radius={radius}
      withBorder={borderRequired}
    >
      {children}
    </Card>
  );
};

const sizeType = oneOf(['xs', 'sm', 'md', 'lg', 'xl']);

Container.propTypes = {
  shadow: sizeType,
  padding: sizeType,
  radius: sizeType,
  borderRequired: bool,
  className: string,
  inlineStyle: object,
  children: oneOfType([element, array]).isRequired,
};

Container.defaultProps = {
  shadow: 'md',
  padding: 'md',
  radius: 'md',
  borderRequired: false,
  className: '',
  inlineStyle: {},
};
