// // // variable

// // let x;
// // x=23;
// // console.log(x);


// // // string

// // let fullname = "hamda";
// // console.log(fullname);

// window.alert("Done")

// // // Boolean

// // let student = false;
// // console.log(student);


// // let firstname = "hamda adan abdi";
// // let age = "20";
// // let enroll = false;

// // // console.log(`firstname ${firstname}`,
// // // `her age is ${age}` ,
// // //  `enroll ${enroll}`);

// // document.getElementById("h1").textContent = `your name is ${fullname}`;
// // document.getElementById("h2").textContent = `your age is ${age} years old`;
// // document.getElementById("h3").textContent = `enrolled: ${enroll}`




// // arithmetic


// let students = 41;

// // students = students +1;
// // students = students -1;
// // students = students *2;
// // students = students /2;
// // students = students **2;
// // students = students %2;
// let exraStudents = students %3;

// // Augmented Assigment Operator

// // students +=1;
// // students -=1;
// //  students *=2;
// //  students /=2;
// //   students **=2;
//   students %=2;


// console.log(students);




// operator precendence 

// parenthesis ()
// exponents
// multiplication and division and modulo
// addition and substraction



// let result = 6/2 **(2+5);

// console.log(result)


// how to accept user input 


// 1. Easy way = window prompt
// 2. professional way = HTML textbox


// let username;

// username = window.prompt("what is your username");


// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// };


// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`

//     console.log(username)

// }



//    Number


// let age = window.prompt("how old are you?");
// age = Number(age);

// age+=1;

// console.log(age, typeof age);



// // let = x;
// // let = y;
// // let = z;


// // x = Number(x);
// // y = String(y);
// // z = Boolean(z);


// // console.log(x, typeof x);
// // console.log(y, typeof y);
// // console.log(z, typeof z);



// // constance or const = avariable that can not be changed


// // const PI = 3.14153;
// // let radius ;
// // let circumference;



// // document.getElementById("mySubmit").onclick = function(){
// //     radius = document.getElementById("myText").value;
// //     radius = Number(radius);
// //     circumference = 2*PI*radius;
// //     document.getElementById("myH3").textContent = circumference +"cm";
// // };



// // counter program

// const increaseBtn = document.getElementById("increase");
// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");
// const counterLabelBtn = document.getElementById("counteLabel");

// let count = 0;

// increaseBtn.onclick = function(){
//     count ++;
//     countLabel.textContent = count;
// };
// decreaseBtn.onclick = function(){
//     count --;
//     countLabel.textContent = count;
// };
// resetBtn.onclick = function(){
//     count =0;
//     countLabel.textContent = count;
// };


// Math in Object that provides collection of 
//  properties and method

// let x = 3;
// let y = 2;

// let z = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
//  z = Math.sign(x);
// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);

// console.log(min);


// RONDOM NUMBER GENERATOR


// let min =50;
// let max =100;

// let randomNum = Math.floor(Math.random()*(max-min)) + min;

// console.log(randomNum);

// const Mybutton = document.getElementById("myButton");
// const Label1 = document.getElementById("Label1");
// const Label2 = document.getElementById("Label2");
// const Label3 = document.getElementById("Label3");
// const min = 1;
// const max = 6;
// let randumNum1;
// let randumNum2;
// let randumNum3;


// Mybutton.onclick = function(){
//     randumNum1 = Math.floor(Math.random() * max) + min;
//     randumNum2 = Math.floor(Math.random() * max) + min;
//     randumNum3 = Math.floor(Math.random() * max) + min;
//     Label1.textContent = randumNum1;
//     Label2.textContent = randumNum2;
//     Label3.textContent = randumNum3;
// }


// IF STATEMENTS = IF A CONDITION IS TRUE , EXECUTE SOME CODE 
//         IF NOT , DO SOMETHING ELSE

//Number
// let age = 16;

// if(age >=18 ){
//     console.log("your Age is ok")
// }else{
//     console.log("only are allowed 18+  ")
// }

// let time = 9;

// if (time < 8){
//     console.log("Good morning");

// }else{
//     console.log("Good Afternoon")
// };

//Boolen

// let isStudent = false;
// if(isStudent){
//    console.log("You are a student!");

// }else{
//     console.log("You are NOT student!");
// };


// let age = 18;

// let hasLicense = true;

// if(age >= 16){
//     console.log("you are old enough to drive ");

// if(hasLicense){
//       console.log("you have your license ");
// }else{
//     console.log("you have Not  your license Yet ");
// }


// }else{
//     console.log("you are Not  old enough to drive ");
// }


// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement  = document.getElementById("resultElement ");

// let age;

// mySubmit.onclick = function(){


//     age = myText.value;
//     age = Number(age);

//     if(age >=100){
//         resultElement.textContent = `you are Too old to enter this site`

//     }
    
//     else if(age == 0){
//         resultElement.textContent = `you cant enter you were just born`
//     }
    
//     else if(age >=18){
//         resultElement.textContent = `you are old enought to enter this site`
//     }
    
//     else if(age < 0){
//         resultElement.textContent = `your age cant be below 0`
//     }

// }


// .checked = property that determines the checkd state of an HTML checkbox or radio button element 

const myCheckbox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult");
const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed !`;
    }
     else{
        subResult.textContent = `You are Not subscribed !`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `you are paying with visa`
    }
     else if(masterCardBtn.checked){
        paymentResult.textContent = `you are paying with mastercard`;
    } 
    else if (payPalBtn.checked){
        paymentResult.textContent = `you are paying with paypal`;
    } else{
        paymentResult.textContent = `You must Select a payment type`
    }
}