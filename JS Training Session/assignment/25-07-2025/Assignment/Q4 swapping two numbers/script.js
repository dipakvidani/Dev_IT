function swnum1ptwonumnum2ers(){
    let num1=10;
    let num2=23;

    console.log("Before swap",`number1=>${num1} and number2=>${num2}`);
    

    num1=num1+num2;
    num2=num1-num2;

    num1=num1-num2;

    console.log("After swap",`number1=>${num1} and number2=>${num2}`);
    
}

swnum1ptwonumnum2ers()