const form = document.getElementById("formId");

function formValidation() {

    const inputSearchObject = document.getElementById("inputSearch"); //captura de los elementos del formulario
    const inputEmailObject = document.getElementById("inputEmail");
    const inputPwdObject1 = document.getElementById("inputPwd1");
    const inputPwdObject2 = document.getElementById("inputPwd2");
    const inputProvinceObject = document.getElementById("inputProvince");

    deleteInvalid();                                //métodos de comprobación y limpieza de estado de los campos
    verifySearch(inputSearchObject);
    verifyEmail(inputEmailObject);
    verifyPwd(inputPwdObject1, inputPwdObject2);
    verifyProvince(inputProvinceObject);

}


document.getElementById("formId").addEventListener('submit', function (e) { //Prevent Default para prevenir el borrado del formulario al submit del formulario
    formValidation();
    e.preventDefault();
});


function deleteInvalid() { //elimina las clases valid / invalid de los campos
    for (elemento of form) {
        elemento.classList.remove('is-invalid');
        elemento.classList.remove('is-valid');
    }
}

function verifySearch(search) { //verifica el campo de busqueda , min 4 caracteres y no vacío
    if (search.value.length < 4 || search.value == "") {
        search.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "We need at least 4 carachters";
    } else {
        search.classList.add("is-valid");
        document.getElementById("okSearch").textContent = "Ok";
    }
}

function verifyEmail(email) { //verifica email
    const regExp = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/gi;

    if (regExp.test(email.value)) {
        email.classList.add('is-valid');
        document.getElementById('okEmail').textContent = 'Ok';
    } else {
        email.classList.add('is-invalid');
        document.getElementById('errorEmail').textContent = 'Invalid email format';
    }
}

function verifyPwd(pwd1, pwd2) { // verifica passwords , requisitos min. 8 carácteres , una mayúscula , una minúscula y un número
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (pwd1.value == pwd2.value) {
        if (regExp.test(pwd1.value)) {
            pwd1.classList.add('is-valid');
            document.getElementById('okPwd1').textContent = 'Ok';
            pwd2.classList.add('is-valid');
            document.getElementById('okPwd2').textContent = 'Ok';
        }
        else {
            pwd1.classList.add('is-invalid');
            document.getElementById('errorPwd1').textContent = 'Not strong enough';
            pwd2.classList.add('is-invalid');
            document.getElementById('errorPwd2').textContent = 'Not strong enough';
        }
    } else {
        pwd1.classList.add('is-invalid');
        document.getElementById('errorPwd1').textContent = "Password doesn't match";
        pwd2.classList.add('is-invalid');
        document.getElementById('errorPwd2').textContent = "Password doesn't match";
    }
}

function verifyProvince(province) { //verifica select de la provincia, evita campo vacío
    if (province.value == "") {
        province.classList.add('is-invalid');
        document.getElementById('errorProvince').textContent = 'Choose a province from the list';
    } else {
        province.classList.add('is-valid');
        document.getElementById('okProvince').textContent = 'Ok';
    }
}