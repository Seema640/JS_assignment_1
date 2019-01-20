function pluralize ( noun = "hi" , number =2 )

{
    if (number ==1)
    {
        if(noun.slice(-1) == "s") 
        {
            
            let element = noun.slice(0,-1);
        
            console.log( number + " " +element);
            
        }
        else if ( noun.slice(-1) == "es")
        {
            let element =  noun.splice(0,-2);

            console.log(number + " " +element);
        }
        
        //console.log(number + " " + noun);
    }
    else if(number>1)
    {
        let Value = noun.concat("s");
        console.log(number + " " +Value);
    }
}

pluralize ( "cat" , 1 );
pluralize ("cat", 5);
pluralize ("fan", 7);
pluralize ("dogs" , 1 );
pluralize ("roses",1);

