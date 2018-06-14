import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components';

import PhoneUI from './components/PhoneUI';
import Welcome from './components/Welcome';
import { colors } from './helpers';

const App = () => {
  return (
    <View contentContainerStyle={styles.container}>
      <Welcome value="GOOD OLD T9" />
      <PhoneUI />
    </View>
  );
}

const View = styled.ScrollView`
  background-color: ${colors.body};
  height: 100%;
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default App;
