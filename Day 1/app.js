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



// let = x;
// let = y;
// let = z;


// x = Number(x);
// y = String(y);
// z = Boolean(z);


// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);



// constance or const = avariable that can not be changed


// const PI = 3.14153;
// let radius ;
// let circumference;



// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2*PI*radius;
//     document.getElementById("myH3").textContent = circumference +"cm";
// };



// counter program


const  increaseBtn = document.getElementById("increase");
const  resetBtn = document.getElementById("reset");
const  decreaseBtn = document.getElementById("decrease");
const countLabelBtn = document.getElementById("countLabel");

let counte = 0;

decreaseBtn.onclick = function(){
    counte  --;
    countLabelBtn.textContent = counte
};
increaseBtn.onclick = function(){
    counte  ++;
    countLabelBtn.textContent = counte
};
resetBtn.onclick = function(){
    counte   = 0;
    countLabelBtn.textContent = counte
};
