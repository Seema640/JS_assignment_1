let pi=3.15;
function circumferenceAndArea(radius=0)
{

    let cir=2*pi*radius;
    //let area= Math.PI * (radius** 2);
    console.log("Circumference is " +cir);
    let area=pi*radius*radius;
    console.log("Area is " +area);
}

console.log(circumferenceAndArea(10));
