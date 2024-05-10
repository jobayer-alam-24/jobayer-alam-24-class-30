// selections 
const form = document.querySelector('form');
const nameInput = form.querySelector('input[name="name"]');
const phoneNumberInput = form.querySelector('input[name="p-number"]');
const emailInput = form.querySelector('input[name="mail"]');
const passwordInput = form.querySelector('input[name="pass"]');
const confirmPasswordInput = form.querySelector('input[name="pass"][id="pass2"]');
const submitButton = form.querySelector('.btn');
// selections 

// Function 
const valiDateForm = (event) => {
    event.preventDefault();
    let isvalid = true;

    let nameValue = nameInput.value.length;
    if (nameValue > 30) {
        isvalid = false;

        nameInput.classList.add('shadow');
        setTimeout((() => {
            alert("Invalid name!");
        }), 200)
    } else {
        nameInput.classList.remove('shadow');
    }
    let numLen = phoneNumberInput.value.length;
    let numval = phoneNumberInput.value.trim();

    if(numLen !== 11 || isNaN(numval)){
        isvalid = false;

        phoneNumberInput.classList.add('shadow');
        setTimeout((() => {
            alert("Number is invalid!");
        }), 200)
    }else{
        phoneNumberInput.classList.remove('shadow');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValue = emailInput.value.trim();

    if (!emailRegex.test(emailValue)) {
        isvalid = false;

        emailInput.classList.add('shadow');
        setTimeout(() => {
            alert("Please enter a valid email address!");
        }, 200);
    } else {
        emailInput.classList.remove('shadow');
    }
    let passwordValue = passwordInput.value.trim();
    let len = passwordInput.length;
    if (len < 4 || len > 20) {
        isvalid = false;
        passwordInput.classList.add('shadow');
        setTimeout(() => {
            alert("Password must be between 4 and 20 characters!");
        }, 200);
    } else {
        passwordInput.classList.remove('shadow');
    }

    let confirmPasswordValue = confirmPasswordInput.value.trim();
    if (confirmPasswordValue !== passwordValue) {
        isvalid = false;
        confirmPasswordInput.classList.add('shadow');
        setTimeout(() => {
            alert("Passwords do not match!");
        }, 200);
    } else {
        confirmPasswordInput.classList.remove('shadow');
    }

    if(isvalid){
        form.submit();
    }
}
form.addEventListener('submit', valiDateForm);