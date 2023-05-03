const form = document.querySelector('#myForm');
const password = form.password;
const confirmPassword = form.confirm_password;
const feedback = document.querySelector('#passwordMatch')
let isPasswordMatch = false;


confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        feedback.textContent = 'Password does not match';
        isPasswordMatch = false;
        password.setAttribute('style', 'border-color: red');
        confirmPassword.setAttribute('style', 'border-color: red');
    } else {
        feedback.textContent = '';
        isPasswordMatch = true;
        password.setAttribute('style', 'border-color:  #4ec28f');
        confirmPassword.setAttribute('style', 'border-color: # #4ec28f');
    }
});