const form = document.getElementById("formId");

function formValidation() {

    const inputSearchObject = document.getElementById("inputSearch");
    const inputEmailObject = document.getElementById("inputEmail");
    const inputPwdObject = document.getElementById("inputPwd");

    deleteInvalid();
    verifySearch(inputSearchObject);
    verifyEmail(inputEmailObject);
    verifyPwd(inputPwdObject);

}


document.getElementById("formId").addEventListener('submit', function (e) {
    formValidation();
    e.preventDefault();
});


function deleteInvalid() {
    for (elemento of form) {
        elemento.classList.remove('is-invalid');
        elemento.classList.remove('is-valid');
    }
}

function verifySearch(search) {
    if (search.value.length < 4 || search.value == "") {
        search.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "We need at least 4 carachters";
    } else {
        search.classList.add("is-valid");
        document.getElementById("okSearch").textContent = "Ok";
    }
}

function verifyEmail(email) {
    const regExp = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/gi;

    if (regExp.test(email.value)) {
        email.classList.add('is-valid');
        document.getElementById('okEmail').textContent = 'Ok';
    } else {
        email.classList.add('is-invalid');
        document.getElementById('errorEmail').textContent = 'Invalid email format';
    }
}

function verifyPwd(pwd) {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (regExp.test(pwd.value)) {
        pwd.classList.add('is-valid');
        document.getElementById('okPwd').textContent = 'Ok';
    }
    else {
        pwd.classList.add('is-invalid');
        document.getElementById('errorPwd').textContent = 'Not strong enough';
    }
}