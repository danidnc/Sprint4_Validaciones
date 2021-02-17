function searchValidation() {

    //let inputSearchObject = document.forms["myForm"]["inputSearch"];
    const inputSearchObject = document.getElementById("inputSearch");

    inputSearchObject.classList.remove('is-invalid');

    if (inputSearchObject.value.length < 4 || inputSearchObject.value == "") {
        inputSearchObject.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "We need at least 4 carachters";
    } else {
        inputSearchObject.classList.add("is-valid");
        document.getElementById("okSearch").textContent = "Ok";
    }
}

document.getElementById("searchFormId").addEventListener('submit', function (e) {
    searchValidation();
    e.preventDefault();
})