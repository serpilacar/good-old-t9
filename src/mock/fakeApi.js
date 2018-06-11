import T9 from './T9';
import words from './dict.txt';

const getWords = () => {
  return fetch(words, {
    method: 'GET'
  })
    .then(res => res.text())
    .then(data => T9.init(data))
    .catch(err => console.log('err', err))
}

export default getWords;
