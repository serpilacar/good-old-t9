import { Alert } from 'react-native';

const uri = 'https://goodoldt9.herokuapp.com/words';

const filterWords = (letter) => {
  return fetch(`${uri}/${letter}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => Alert.alert(
      JSON.stringify(err),
      '',
      [
        {text: 'OK'}
      ],
      { cancelable: true }
    )
  )
}

export default filterWords;
