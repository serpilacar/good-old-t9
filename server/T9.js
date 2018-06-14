class T9 {
  constructor() {
    this.dictionary = '';
    this.dictionaryTree = {};
    this.words = [];
    this.keyMap = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
      0: 'space'
    };
  }

  init(dictionary) {
    this.dictionary = dictionary;
    this.words = dictionary.split(/\s+/g);

    let tree = {};

    this.words.forEach(word => {
      let letters = word.split('');
      let leaf = tree;
      letters.forEach((char, i) => {
        let letter = char.toLowerCase();
        let existing = leaf[letter];
        let last = (i === letters.length - 1);
        if (typeof existing === 'undefined') {
          leaf = leaf[letter] = last ? 1 : {};
        } else if (typeof existing === 'number') {
          if (last) {
            leaf[letter]++;
          } else {
            leaf = leaf[letter] = { exist: existing };
          }
        } else {
          leaf = leaf[letter];
        }
      })
    })
    this.dictionaryTree = tree;
  }

  predict(numericInput) {
    return this.findWords(numericInput, this.dictionaryTree, true);
  }

  findWords(sequence, tree, exact, words, currentWord, depth) {
    sequence = sequence.toString();
    words = words || [];
    currentWord = currentWord || '';
    depth = depth || 0;

    for (let leaf in tree) {
      let word = currentWord;
      let value = tree[leaf];
      let key;
      if (leaf === 'exist') {
        key = sequence.charAt(depth - 1);
        if (depth >= sequence.length) {
          words.push(word);
        }
      } else {
        key = sequence.charAt(depth);
        word += leaf;
        if (
          depth >= (sequence.length - 1) &&
          typeof (value) === 'number' && key &&
          (this.keyMap[key].indexOf(leaf) > -1)
        ) {
          words.push(word);
        }
      }
      const hasLeaf = key && this.keyMap.hasOwnProperty(key) && this.keyMap[key].indexOf(leaf) > -1;

      if (hasLeaf) {
        this.findWords(sequence, value, exact, words, word, depth + 1 );
      }
    }
    return words;
  }
}

module.exports = new T9();
