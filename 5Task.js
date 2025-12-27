let sentence = 'capitalize every first letter of each word in a string';
let sentenceNew = sentence.split(' ');
let newsen = '';
for(let word of sentenceNew)
{
    let upper = word.slice(0,1).toUpperCase();
    let capital = upper + word.slice(1);
    newsen = newsen + " " + capital;
    // console.log(capital);
}
console.log(newsen.trim());