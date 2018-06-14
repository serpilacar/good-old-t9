import React, { PureComponent } from 'react';

import Screen from './Screen';
import KeyPad from './KeyPad';
import * as S from './styled';
import { filterWords } from '../../helpers';

class PhoneUI extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      predictions: [],
      currentWord: ''
    }
  }

  onPressKey = () => (key) => {
    const { currentWord } = this.state;
    const words = currentWord.concat(key);

    this.setState({
      currentWord: words
    }, () => this.predict(words));
  }

  onDelete = () => {
    const { currentWord } = this.state;
    const words = currentWord.substring(0, currentWord.length - 1);

    this.setState({
      currentWord: words
    }, () => this.afterDelete(words));
  }

  predict = async (currentWord) => {
    const { predictions } = this.state;
    const { data, firstLetter } = await filterWords(currentWord);
    const notFound = predictions.length > 0 ? [predictions[0].concat(firstLetter)] : [];

    if (data && data.length) {
      this.setState({
        predictions: data
      })
    } else {
      this.setState({
        predictions: notFound
      })
    }
  }

  afterDelete = async (currentWord) => {
    const { predictions } = this.state;
    const { data } = currentWord.length > 0 && await filterWords(currentWord);
    const sliced = predictions.length > 0 ? [predictions[0].slice(0, predictions[0].length - 1)] : [];

    if (data && data.length) {
      this.setState({
        predictions: data
      })
    } else {
      this.setState({
        predictions: sliced
      })
    }
  }

  render() {
    const { predictions } = this.state;

    return (
      <S.Div>
        <Screen predictions={predictions} />
        <KeyPad
          onPressKey={this.onPressKey()}
          onPressClear={this.onDelete}
        />
      </S.Div>
    )
  }
}

export default PhoneUI;
