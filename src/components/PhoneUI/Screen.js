import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class Screen extends PureComponent {
  renderListItems = (item, index) => {
    const g = String.fromCodePoint(0x1F49A)
    if (item === 't9mobile') {
      item = item.concat(` ${g}`)
    }
    return (<S.Li key={`${item}${index}`}>{item}</S.Li>);
  }

  renderList() {
    const { predictions } = this.props;

    return (
      <S.Ul>
        {predictions.map(this.renderListItems)}
      </S.Ul>
    )
  }

  render() {
    const { predictions } = this.props;
    const isArray = predictions.length > 0;

    return (
      <S.Screen>
        {isArray && this.renderList()}
      </S.Screen>
    )
  }
}

Screen.propTypes = {
  predictions: PropTypes.arrayOf(PropTypes.string)
};
Screen.defaultProps = {
  predictions: []
}

export default Screen;
