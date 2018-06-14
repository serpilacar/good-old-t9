import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors} from '../helpers';

const Welcome = ({ value }) => {
  return (
    <Bar>
      <Text>{value}</Text>
    </Bar>
  )
}
Welcome.propTypes = {
  value: PropTypes.string.isRequired
}
export default Welcome;

const Text = styled.Text`
  color: ${colors.text};
  font-size: 20;
  margin: 0;
  font-weight: 600;
`;
const Bar = styled.View`
  border-bottom-width: 2;
  border-style: solid;
  border-bottom-color: ${colors.text};
  background-color: ${colors.body};
  height: 50;
  width: 90%;
  align-items: center;
  justify-content: center;
`;
