// This function changes the value of the placeholder
function placeHolderText () {
    const style = document.createElement("style")
    style.type = "text/css"
    const {
    sheet
    } = document.head.appendChild(style)

    const rule = sheet.insertRule("::placeholder {}")
    const placeholderStyle = sheet.rules[rule].style;
    placeholderStyle.color = "#D8000C";

}


function changePlaceHolder() {
    document.getElementById("validation").innerHTML = "input:required:invalid {border: 1px solid red!important; background: url(images/icon-error.svg) no-repeat scroll 270px;}";
    document.getElementById("First").placeholder = '';
    document.getElementById("Last").placeholder = '';
    document.getElementById("Password").placeholder = '';
    document.getElementById("Email").placeholder = 'email@example.com';
}

function validateForm(){
    let firstName = document.forms["myform"]["first"];
    let lastName = document.forms["myform"]["last"];
    let password = document.forms["myform"]["password"];
    let email = document.forms["myform"]["email"];

    if (firstName.value === "") {
        document.getElementById("error-first").textContent = "First Name cannot be empty"
    } else {
        document.getElementById('error-first').textContent= "";  
    }

    if (lastName.value === "") {
        document.getElementById("error-last").textContent = "Last Name cannot be empty";
    } else {
        document.getElementById('error-last').textContent= "";  
    }

    if (email.value === "") {
        document.getElementById("error-email").textContent = "Looks like this is not an email";
    } else {
        document.getElementById('error-email').textContent= "";  
    }

    if (password.value === "") {
        document.getElementById("error-password").textContent = "Password cannot be empty";
    } else {
        document.getElementById('error-password').textContent= "";  
    }
}