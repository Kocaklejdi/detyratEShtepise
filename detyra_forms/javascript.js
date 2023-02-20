const button = document.getElementById("sendButton");
const form = document.getElementById("form");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const errorSigns = document.getElementsByClassName("placeholder");
const usernameError = errorSigns[0];
const emailError = errorSigns[1];
const passwordError = errorSigns[2];

const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=(.*[0-9]){1,})(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const numRegex = /(?=.*?[0-9])/;
const specialRegex = /(?=[^!@#$&*]*[!@#$&*])/;
const upperCaseRegex = /(?=(?:[^A-Z]*[A-Z]){1})/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

const usernameCircle = document.getElementById("usernameCircle");
const emailCircle = document.getElementById("emailCircle");
const passwordCircle = document.getElementById("passwordCircle");

const userNameDiv = document.getElementById("usernameHolder");
const spanUsername = document.getElementById("usernameText");

const emailDiv = document.getElementById("emailHolder");
const spanEmail = document.getElementById("emailText");

const passwordDiv = document.getElementById("passwordHolder");
const spanPassword = document.getElementById("passwordText");


const checkBox1 = document.getElementById("check1");
const checkBox2 = document.getElementById("check2");
const checkBox3 = document.getElementById("check3");

const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");

const checkBox1div = document.getElementById("check1div");
const checkBox2div = document.getElementById("check2div");
const checkBox3div = document.getElementById("check3div");

const radio1div = document.getElementById("radio1div");
const radio2div = document.getElementById("radio2div");
const radio3div = document.getElementById("radio3div");




userNameDiv.addEventListener("focusin",function(){
    spanUsername.style.visibility ="visible";
});
userNameDiv.addEventListener("focusout",function(){
    spanUsername.style.visibility ="hidden";
});



emailDiv.addEventListener("focusin",function(){
    spanEmail.style.visibility ="visible";
});
emailDiv.addEventListener("focusout",function(){
    spanEmail.style.visibility ="hidden";
});


passwordDiv.addEventListener("focusin",function(){
    spanPassword.style.visibility ="visible";
});
passwordDiv.addEventListener("focusout",function(){
    spanPassword.style.visibility ="hidden";
});



button.addEventListener("click",function(event){
    event.preventDefault();

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    if(username.length == 0){
        usernameError.style.color = "#E74A3B";
        usernameError.innerText = "*Username cannot be empty";
        usernameCircle.style.visibility= "visible";
        usernameCircle.innerText = "❌";
        return;
    }
    else if(checkPasswordForOneSpecial(username)){
        usernameError.style.color = "#E74A3B";
        usernameError.innerText = "*Username cannot contain special characters";
        usernameCircle.style.visibility= "visible";
        usernameCircle.innerText = "❌";
        return;
    }
    else if(!checkPasswordForOneSpecial(username)){
        usernameError.style.color = "#3CBC81";
        usernameError.innerText = "Username is correct";
        usernameCircle.style.visibility= "visible";
        usernameCircle.style.backgroundColor= "#3CBC81";
        spanUsername.style.color ="#3CBC81";
        usernameCircle.innerText = "✓";
    }

    if(!checkEmail(email)){
        emailError.style.color = "#E74A3B";
        emailError.innerText = "*Please enter a valid E-mail address!";
        emailCircle.style.visibility= "visible";
        emailCircle.innerText = "❌";
        return;
    } else if (checkEmail(email)){
        emailError.style.color = "#3CBC81";
        emailError.innerText = "E-mail is correct";
        emailCircle.style.visibility= "visible";
        emailCircle.style.backgroundColor= "#3CBC81";
        emailCircle.innerText = "✓";
    }
    

    

    if(!checkPassword(password)){
        
        if(password.length<8){
            passwordError.style.color = "#E74A3B";
            passwordError.innerText = "*Password should be at least 8 characters";
            return;
        }
        else if(!checkPasswordForOneNumber(password)){
            passwordError.style.color = "#E74A3B";
            passwordError.innerText = "*Password needs at least 1 number";
            return;
        }
        else if(!checkPasswordForOneSpecial(password)){
            passwordError.style.color = "#E74A3B";
            passwordError.innerText = "*Password needs at least 1 special character";
            return;
        }
        else if(!checkPasswordForOneUpperCase(password)){
            passwordError.style.color = "#E74A3B";
            passwordError.innerText = "*Password needs at least 1 uppercase letter";
            return;
        }

    } else if (checkPassword(password)){
    passwordError.style.color = "#3CBC81";
    passwordError.innerText = "*Password is strong";
    }

});

setInterval(checkForCheckBoxes,100);

function checkPassword(str)
{   
    return regex.test(str);
}
function checkPasswordForOneNumber(str)
{   
    return numRegex.test(str);
}
function checkPasswordForOneSpecial(str)
{   
    return specialRegex.test(str);
}
function checkPasswordForOneUpperCase(str)
{   
    return upperCaseRegex.test(str);
}
function checkEmail(str){
    return emailRegex.test(str);
}

function checkForCheckBoxes(){
    if(checkBox1.checked == 1){
        checkBox1div.style.backgroundColor = "#EFEFFD"
    }else{
        checkBox1div.style.backgroundColor = "#FFFFFF"
    }
    if(checkBox2.checked){
        checkBox2div.style.backgroundColor = "#EFEFFD"
    }else{
        checkBox2div.style.backgroundColor = "#FFFFFF"
    }
    if(checkBox3.checked){
        checkBox3div.style.backgroundColor = "#EFEFFD"
    }else{
        checkBox3div.style.backgroundColor = "#FFFFFF"
    }
    
    if(radio1.checked == 1){
        radio1div.style.backgroundColor = "#EFEFFD"
    }else{
        radio1div.style.backgroundColor = "#FFFFFF"
    }
    if(radio2.checked){
        radio2div.style.backgroundColor = "#EFEFFD"
    }else{
        radio2div.style.backgroundColor = "#FFFFFF"
    }
    if(radio3.checked){
        radio3div.style.backgroundColor = "#EFEFFD"
    }else{
        radio3div.style.backgroundColor = "#FFFFFF"
    }
}