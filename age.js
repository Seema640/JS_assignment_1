function calculateAgeInFuture(current=0,future=0)
{
    let year=future-current;
    return "You will be" + year + "old";
}

console.log(calculateAgeInFuture(2006,2078));