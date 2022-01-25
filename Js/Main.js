let emailInput = document.getElementById('email'),
form = document.querySelector('form'),
submitBtn = document.getElementById('btn-submit');
form.onsubmit = (e) => {
    e.preventDefault();
    if(!validateEmail(emailInput.value)){
        form.classList.add('error');
    }
    else {
        form.classList.remove('error');
    }
};
function validateEmail(email){
    let mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
    return mailformat.test(email.toLowerCase());
}