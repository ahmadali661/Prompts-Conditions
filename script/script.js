
document.getElementById("btr").onclick = function () {
    let name = " ";
    document.getElementById("statement").innerHTML = name;
}
document.getElementById("btn").onclick = function () {
    let name = " ";
    document.getElementById("output").innerHTML = name;
}



document.getElementById("concatinateString").onclick = function () {
    let firstName = "Hello";
    let lastName = "Ahmad Ali";
    let banger = "!";
    alert(firstName + " " + lastName + banger)
    document.getElementById("statement").innerHTML = firstName + " " + lastName + banger;
}

document.getElementById("askName").onclick = function () {
    let name = prompt("Please Enter Your Full Name");
    document.getElementById("statement").innerHTML = name;
}
document.getElementById("comparisonOperators").onclick = function () {
    document.getElementById("statement").innerHTML = "let num1 = 7 <br> let num2 = 7 <br> Is 7 !== 7 ?";
    var num1 = 7;
    var num2 = 7;
    if (num1 !== num2) {
        document.getElementById("output").innerHTML = "This Condition is True";
    } else {
        document.getElementById("output").innerHTML = "This Condition is False";
    }
}

document.getElementById("ifElse").onclick = function () {

    document.getElementById("statement").innerHTML = "let num1 = 2 <br> let num2 = 3 <br> Is 2 == 3 ?";
    var num1 = 2;
    var num2 = 3;
    if (num1 == num2) {
        document.getElementById("output").innerHTML = "This Condition is True";
    } else {
        document.getElementById("output").innerHTML = "This Condition is False";
    }
}

// document.getElementById("testingSets").onclick = function () {

//     document.getElementById("statement").innerHTML = "If Age >=18 or Weight <=70 'You Are a Fit Person' <br>If Age >=18 or Weight >70 'You Are a Fat Person' <br> Else 'You Are a baby'  " ;
// let age = +prompt("Enter Your Age");
// let weight = +prompt("Enter Your Weight");
// if(age >=18 && weight <=70 ){
//     document.getElementById("output").innerHTML = "You Are a Fit Person";
// } else if(age >=18 && weight >70 ){
//     document.getElementById("output").innerHTML = "You Are a Fat Person";
// } else {
//     document.getElementById("output").innerHTML = "You Are a baby";
// }
// }
document.getElementById("testingSets").onclick = function () {

    document.getElementById("statement").innerHTML = "If Age >=18 or Weight <=70 'You Are a Fit Person' <br>If Age >=18 or Weight >70 'You Are a Fat Person' <br> Else 'You Are a baby'  ";

    let age = +prompt("Enter Your Age");

    if (age >= 18) {
        let weigth = +prompt("Enter Your Weight")
        if (weigth <= 70) {
            document.getElementById("output").innerHTML = "You Are a Fit Person";
        } else {
            document.getElementById("output").innerHTML = "You Are a Fat Person";
        }

    } else {
        document.getElementById("output").innerHTML = "You Are a baby";
    }
}

document.getElementById("ifStatement").onclick = function (){
    document.getElementById("statement").innerHTML = "let num1 = 2 <br> let num2 = 3 <br> Is 2 !== 3 ?";
    var num1 = 2;
    var num2 = 3;
    if (num1 !== num2) {
        document.getElementById("output").innerHTML = "This Condition is True";
    } else {
        document.getElementById("output").innerHTML = "This Condition is False";
    }
}

document.getElementById("login").onclick = function () {
    let name = " ";
    document.getElementById("output").innerHTML = name;
    var username = prompt("Enter Your UserName")
    var password = prompt("Enter Your Password")
    if (username === "admin" && password === "123") {
        alert("You Are Logged In")
        document.getElementById("statement").innerHTML = "You Are Logged Inn";
    } else {
        alert("Username or password is incorrect")
        document.getElementById("statement").innerHTML = "Username or password is incorrect";
    }
}
document.getElementById("check").onclick = function () {
    let marks = +prompt("Enter your Marks <50 = Fail >=50 = Pass ");
    if( marks >=50){
let name = "Congratulations! You Will Pass this Exam";
document.getElementById("output").innerHTML =  name  ;
document.getElementById("output").style.color = "green" ;
    } else{
        let name = "Sorry! You Are Fail"; 
        document.getElementById("output").innerHTML = name ;
        document.getElementById("output").style.color = "red" ;
    }
}