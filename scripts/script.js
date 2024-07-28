var num1 = prompt("Enter your number");
var num2 = prompt("Enter your number2:");
var operation = prompt(" Menu : 1. Sum - 2. Subs - 3. Div - 4. Mult");
    
 if(operation=="1"){
    var sum=Number(num1)+Number(num2);//sum operation
    document.write(num1 + " + " + num2 + "=" +sum  ); //display the result
}


if(operation=="2"){
    var  sum=num1+num2;//sum operation
    document.write(num1+ "-" + nunm2 + "=" +subs);

}

if(operation=="3"){
    var  mult=num1+num2;
    document.write(num1+ "x" + nunm2 + "=" +subs);

}

if(operation=="4"){
    var  div=num1+num2;
    document.write(num1+ "/" + nunm2 + "=" +subs);

}