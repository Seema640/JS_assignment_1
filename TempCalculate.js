function TempConvert(Cel) {
    
    let Fahren = Cel * (9/5) + 32;
    console.log ( "The conversion from celsius to fahrenheit is: " +Cel + "C" + " " + "is" + " "+ Fahren + "F");
    
    console.log ( "The conversion from  fahrenheit to celsius  is: " +Fahren + "F" + " " + "is" + " "+ Cel + "C" );
    
    console.log ((32 * Fahren -32) * (5/9));

}

TempConvert(32);