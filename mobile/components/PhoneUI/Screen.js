import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class Screen extends PureComponent {
  static capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  renderListItems = (item, index) => (
    <S.Li key={`${item}${index}`}>
      {Screen.capitalize(item)}
    </S.Li>
  );

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
    const isArray = predictions.length;

    return (
      <S.Screen>
        {isArray > 0 && this.renderList()}
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
