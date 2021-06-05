const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// add form

form.addEventListener('submit', function(event) {
    event.preventDefault();
    ;
    validate();

    // data collection process
    let formData = {};
    [...this.elements].forEach(el => {
		if (el.type !== 'submit') {
			formData[el.name] = el.value
		};
	});
    
    console.log(formData);
    
});


// final data validation in success message  1 & 2 

// success message 2
const sendData = (usernameVal , successRate, count) => {
    if(successRate === count){
        alert('Your Data has been stored in console.log');
        swal("Thank You ! " + usernameVal , "Your registration has been Successful !", "success");
        // location.href = `welcome.html`;

    }
} 


// success message 1
const successMsg = (usernameVal) => {
    let formCtrl = document.getElementsByClassName('form-control');
    var count = formCtrl.length - 1 ;
    for (var i = 0; i < formCtrl.length; i++){
        if (formCtrl[i].className === "form-control success"){
            var successRate = 0 + i ;
            sendData(usernameVal ,successRate, count);
        }else{
            return false;
        }
    }
}

// define the validate function

const validate = () => {

const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();

// validate username

if (usernameVal===""){
    setErrorMsg(username, 'Username cannot be Blank . ');
}else if (usernameVal.length < 3){
    setErrorMsg(username, 'Username min 3 character .');
}else {
    setSuccessMsg(username);
}  

// validate email

if (emailVal===""){
    setErrorMsg(email, 'Please write down correct Email . ');
}
else {
    setSuccessMsg(email);
}

// validate Phone

if (phoneVal===""){
    setErrorMsg(phone, 'Invaild your Phone Number . ');
}else if (phoneVal.length < 10){
    setErrorMsg(phone, 'Phone number must be atlest 10 characters .');
}else {
    setSuccessMsg(phone);
}  

// validate password

if (passwordVal===""){
    setErrorMsg(password, 'Password cannot be Blank .  ');
}else if (passwordVal.length < 6){
    setErrorMsg(password, 'Password  must be atlest 6 characters .');
}else {
    setSuccessMsg(password);
} 

// validate Confirm password

if (cpasswordVal===""){
    setErrorMsg(cpassword, 'Please confirm your password .  ');
}else if (passwordVal !== cpasswordVal){
    setErrorMsg(cpassword, 'Your confirm Password doesnot match with your previous Password .');
}else {
    setSuccessMsg(cpassword);
}

successMsg(usernameVal);

}

function setErrorMsg(input, errormsgs ) { 
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"; 
    small.innerText = errormsgs;
}

function setSuccessMsg(input ) { 
    const formControl = input.parentElement;
    formControl.className = "form-control success"; 
    
}

