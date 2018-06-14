import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import { numbers } from '../../helpers';

class KeyPad extends PureComponent {
  onPressKey = (key) => () => {
    const { onPressKey } = this.props;

    onPressKey(key)
  }

  renderKey = (item, index) => {
    const number = item[0];
    const value = item[1];
    const disabled = number <= 1 || typeof number !== 'number';
    const onPress = disabled ? null : this.onPressKey(number)

    return (
      <S.Key
        count={index}
        key={number}
        onPress={onPress}
        disabled={disabled}
      >
        <S.Number>{number}</S.Number>
        <S.Value>{value}</S.Value>
      </S.Key>
    )
  }

  renderRow = (item) => {
    return (
      <S.Row key={`${item}`}>
        {item.map(this.renderKey)}
      </S.Row>
    )
  }

  render() {
    const { onPressClear } = this.props;

    return (
      <S.Column>
        <S.Clear onPress={onPressClear}><S.ClearText>Clear</S.ClearText></S.Clear>
        {numbers.map(this.renderRow)}
      </S.Column>
    )
  }
}

KeyPad.propTypes = {
  onPressKey: PropTypes.func,
  onPressClear: PropTypes.func
};
KeyPad.defaultProps = {
  onPressKey: () => null,
  onPressClear: () => null
};

export default KeyPad;
