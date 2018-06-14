import React from 'react';
import { shallow } from 'enzyme';
import PhoneUI from './index';
import { filterWords } from '../../helpers';

describe('Pressed key returns correct value from the API', () => {
  const phoneUI = shallow(<PhoneUI />);
  const key = phoneUI.find('KeyPad');

  test('Pressing 4 should return an array containing g, h, i', async () => {
    key.props().onPressKey(4);
    const currentWord = phoneUI.state('currentWord');

    expect(currentWord).toEqual('4');
    await expect(filterWords(currentWord)).resolves.toHaveProperty('data', ["g", "h", "i"]);
  });

  test('Pressing 5-4-9-4 keys in order should return the word t9mobile', async () => {
    key.props().onPressClear();
    key.props().onPressKey(5);
    key.props().onPressKey(4);
    key.props().onPressKey(9);
    key.props().onPressKey(4);
    const currentWord = phoneUI.state('currentWord')

    expect(currentWord).toEqual('5494')
    await expect(filterWords(currentWord)).resolves.toHaveProperty('data', ["t9mobile"]);
  })
})
