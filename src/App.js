import React from 'react';
import styled from 'styled-components';
import PhoneUI from './components/PhoneUI'
import { colors } from './helpers';

const App = () => {
  return (
    <Div>
      <PhoneUI />
    </Div>
  );
}

const Div = styled.div`
  background-color: ${colors.body};
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export default App;
