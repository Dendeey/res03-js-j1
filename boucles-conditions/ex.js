let i = 0;
while(i < 11)
{
    console.log(i);
    i = i + 1;
}

let a = 25;
while(a > 19)
{
    console.log(a);
    a = a - 1;
}

let b = 0;
while(b < 21)
{
    if(b%2 === 0)
    {
        console.log(b);
        b++;
    }
    else
    {
        b++;
    }
}

let c = 0;
while(c <= 10)
{
    if(c%2 ===0)
    {
        console.log(`${c} Pair`);
        c++;
    }
    else
    {
        console.log(`${c} Impair`);
        c++;
    }
}

let d = 0;
while(d <= 100)
{
    if(d%2 === 0)
    {
        console.log(`${d} Pair`);
        d++;
    }
    else
    {
        console.log(`${d} Impair`);
        d++;
    }
    
    while(d <= 50)
    {
        d = d + 2;
        console.log(d);
    }
    
    while(d <= 100)
    {
        d = d + 3;
        console.log(d);
    }
}



