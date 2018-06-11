import React, { PureComponent } from 'react';

import * as S from './styled';
import getWords from '../mock/fakeApi';
import T9 from '../mock/T9';
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['*', 0, '#']
];

class Keyboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      predictions: [],
      currentWord: ''
    }
  }

  componentDidMount() {
    getWords();
  }

  arrayMapper() {
    var r = [], arg = arguments[0], max = arg.length - 1;
    function helper(arr, i) {
      for (var j = 0, l = arg[i].length; j < l; j++) {
        var a = arr.slice(0);
        a.push(arg[i][j]);
        if (i == max) {
          r.push(a);
        } else {
          helper(a, i + 1);
        }
      }
    }
    helper([], 0);
    return r;
  }

  renderListItems = (item) => {
    const { prev } = this.state;

    return <li>{item}</li>;
  }

  renderList() {
    return (
      <S.Ul>
        {this.state.currentText.map(this.renderListItems)}
      </S.Ul>
    )
  }

  predict = (key, currentWord) => {
    const { currentText } = this.state;
    const value = T9.keyMap[key];
    const currentPredictions = T9.predict(currentWord);

    if (currentPredictions.length) {
      this.setState({
        currentText: currentPredictions
      })
    } else {
      this.setState({
        currentText: [currentText[0].concat(value[0])]
      })
    }
  }

  onPressKey = (key) => (e) => {
    const { currentWord } = this.state;
    const words = currentWord.concat(key);
    this.setState({
      currentWord: words
    }, () => this.predict(key, words));
  }

  afterDelete = (currentWord) => {
    const currentPredictions = T9.predict(currentWord);
    const { currentText } = this.state;
    const sliced = [currentText[0].slice(0, currentText[0].length - 1)];

    if (currentPredictions.length) {
      this.setState({
        currentText: currentPredictions
      })
    } else {
      this.setState({
        currentText: sliced
      })
    }
  }

  onDelete = () => {
    const { currentWord } = this.state;
    const words = currentWord.substring(0, currentWord.length - 1);

    this.setState({
      currentWord: words
    }, () => this.afterDelete(words));
  }

  renderKey = (number) => {
    const disabled = number === 1 || ['*', 0, '#'].some(item => item === number);
    const onClick = disabled ? null : this.onPressKey(number);
    const value = T9.keyMap[number];

    return (
      <S.Key value={value} key={number} onClick={onClick}>
        <S.Number>{number}</S.Number>
        <S.Value>{value}</S.Value>
      </S.Key>
    )
  }
  renderRow = (item, index) => {
    return (
      <S.Row key={`${item}`}>
        {item.map(this.renderKey)}
      </S.Row>
    )
  }

  render() {
    const { currentText, currentWord } = this.state;
    const isArray = typeof currentText === 'object';

    return (
      <S.Div>
        {isArray && this.state.currentWord.length > 0 && this.renderList()}
        <h4 onClick={this.onDelete}>Clear</h4>
        <S.Column>
          {numbers.map(this.renderRow)}
        </S.Column>
      </S.Div>
    )
  }
}

export default Keyboard;
