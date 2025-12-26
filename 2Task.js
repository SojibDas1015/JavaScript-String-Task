let sentence = 'Count how many times a string has the letter a or A';
let cnt = 0;
for(let letter of sentence)
{
    if(letter === 'a' || letter === 'A')
    {
        cnt++;
    }
}
console.log(cnt);