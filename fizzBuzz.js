// Ethan Treece fizz buzz.

for(var i = 1; i < 100 + 1; i ++)
{
    if(i % 3 == 0)
    {
        console.log('fizz');
        i++;
    }
    if(i % 5 == 0 && i % 3 != 0)
    {
        console.log('buzz') 
        i++;
    }
    else
    {
        console.log(i);
    }
}
