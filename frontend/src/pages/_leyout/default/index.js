import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaultLeyout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLeyout.propTypes = {
  children: PropTypes.element.isRequired,
};
