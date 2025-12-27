let sentence = 'SEQuoIA tree';
let word = sentence.toLowerCase();
let A = false;
let E = false;
let I = false;
let O = false;
let U = false;
for(let letter of word)
{
    if(letter === 'a')
    {
        A = true;
    }
    if(letter === 'e')
    {
        E = true;
    }
    if(letter === 'i')
    {
        I = true;
    }
    if(letter === 'o')
    {
        O = true;
    }
    if(letter === 'u')
    {
        U = true;
    }
}
if(A == true && E == true && I == true && O == true && U == true)
{
    console.log("is vowel");
}
else
{
    console.log("not vowel");
}