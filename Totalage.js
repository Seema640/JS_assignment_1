function TotalAge(birth_year,future_year)
{
    let actual_age =future_year - birth_year;
    return actual_age;
}

Value = TotalAge(2000,2018);
AnotherValue = Value+1;

console.log(Value);
console.log(AnotherValue);

console.log("I will be either" + " " + Value + " " + "or" + " " + AnotherValue + " " + "in 2018" );