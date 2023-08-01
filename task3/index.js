const fs = require('fs');

const filename = 'data.txt';
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file ${filename}: ${err.message}`);
    return;
  }

  const wordCount = countWords(data);
  console.log(`Total word count in ${filename}: ${wordCount}`);
});

const countWords = (text) =>{
  // Remove any leading/trailing whitespaces and split the text into an array of words
  const wordsArray = text.trim().split(/\s+/);
  return wordsArray.length;
};
