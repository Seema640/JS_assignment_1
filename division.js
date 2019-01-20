
function DivisionEvaluator(percentage)
{
        if(percentage>=80)
        {
            console.log("Distinction");
        }
        else if(percentage>=60 && percentage<80)
        {
            console.log("First division");
        }
        else if(percentage>=40 && percentage<60)
        {
            console.log("Second");
        
        }
        else if(percentage>=32 && percentage<40)
        {
            console.log("Third");
        
        }
        else
        {
            console.log("Fail");
        }
}
DivisionEvaluator(56);