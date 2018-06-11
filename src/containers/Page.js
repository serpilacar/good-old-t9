import React, { Component } from 'react';

import Keyboard from '../components/Keyboard/index';
import * as S from './styled';

class Page extends Component {
  render() {
    return (
      <S.Div>
        <Keyboard />
      </S.Div>
    );
  }
}

export default Page;
