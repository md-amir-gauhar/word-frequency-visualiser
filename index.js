const inputTxt = document.querySelector('#inputTxt');
const btnCalc = document.querySelector('#btnCalc');

btnCalc.addEventListener('click', () => {
  // console.log(inputTxt.value);
  let text = inputTxt.value;
  let words = getWords(text);
  let wc = getWordCounts(words);
  let wcArr = sortWordCounts(wc);
  printWordCountTable(wcArr);
  generateChart(wcArr);
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
  return words;
};

const getWordCounts = (words) => {
  let wordCounts = {};
  words.forEach((word) => {
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  });

  return wordCounts;
};

const sortWordCounts = (wordCounts) => {
  let wcArr = [];
  Object.keys(wordCounts).forEach((wc) => {
    if (wc == '') return;
    wcArr.push({
      word: wc,
      count: wordCounts[wc],
    });
  });

  return wcArr.sort((a, b) => b.count - a.count).slice(0, 50);
};

const printWordCountTable = (wordCountArray) => {
  document.getElementById('tableWordCount').innerHTML = `
    <tr>
      <th>Word</th>
      <th>Count</th>
    </tr>
  `;
  wordCountArray.forEach((wc) => {
    let table = `
      
      <tr>
        <td>${wc.word}</td>
        <td>${wc.count}</td>
      </tr>
    `;
    document.getElementById('tableWordCount').innerHTML += table;
  });
};

const generateChart = (wcArr) => {
  let ctx = document.getElementById('cvsWcChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: wcArr.map((wc) => wc.word),
      datasets: [
        {
          label: 'Word Frequency',
          data: wcArr.map((wc) => wc.count),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
  });
};
