function milliseconds(x) 
{
    if (isNaN(x)) 
    {
      return 'Not a Number!';
    }
    return x * 1000;
}

console.log(milliseconds("121g"));

console.log(milliseconds('0.5516'));