const uri = 'https://goodoldt9.herokuapp.com/words';

const filterWords = (letter) => {
  return fetch(`${uri}/${letter}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => err)
}

export default filterWords;
