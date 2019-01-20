"use strict";
function mixUp ( string1 , string2)
{
    if( string1.length >= 2 && string2.length >= 2)
    {
        let value1 = string1.slice(0,2)+ string2.slice(2);
        let value2 = string2.slice(0,2) + string1.slice(2);

       
        console.log(value2);
        
        console.log(value1) ;
   
    }
}

mixUp ( "dog" , "dinner");