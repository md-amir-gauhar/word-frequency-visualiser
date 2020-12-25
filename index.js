const inputTxt = document.querySelector('#inputTxt');
const btnCalc = document.querySelector('#btnCalc');

btnCalc.addEventListener('click', () => {
  // console.log(inputTxt.value);
  let text = inputTxt.value;
  let words = getWords(text);
  console.log(words);
});

const getWords = (inputText) => {
  let chars = inputText.split('');
  let newChars = [];
  chars.forEach((char) => {
    switch (char) {
      case `.`:
      case `,`:
      case `?`:
      case `’`:
      case `“`:
      case `”`:
      case `-`:
      case `_`:
      case `:`:
      case `(`:
      case `)`:
      case `;`:
        return;
      case `  `:
        newChars.push(' ');
        break;
      case `   `:
        newChars.push(' ');
        break;
      case `\n`:
        newChars.push(' ');
        break;
      default:
        newChars.push(char.toLowerCase());
    }
  });
  let newText = newChars.join('');
  let words = newText.split(' ');
  return newText;
};
