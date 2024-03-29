function validation(inputsToValidate, submitBtn) {
// for each item in array input check when blur and when enter in input again clear show error
    
inputsToValidate.forEach(function (item) {
        item.element.addEventListener('blur', function () {
            checkInput(item);
        })
        item.element.addEventListener('input', function () {
            const parentNode = item.element.parentElement;
            parentNode.classList.remove("valid");
            parentNode.classList.remove("invalid");
            parentNode.querySelector('.message_error').innerHTML = "";
        })
    })

// check error of element if no match with regex call function show error and return false
// else return true and call function show success
    function checkInput(item) {
        let messageError = '';
        console.log(item.type)
        if(item.type === "text") {
            if(item.element.value === "") {
                
                messageError = "Trường này không được để trống";
            } else
            if (!item.element.value.match(item.regex)) {
                messageError = item.message;
            } else {
                messageError = "";
            }
        } else if(item.type === "image") {

        } else if(item.type === "radio") {

        } else if(item.type === "checkbox") {

        }
        if (messageError.trim().length != 0) {
            showErrorMessage(item.element, messageError);
            return false;
        } else {
            handleSuccess(item.element);
            return true;
        }
    }

//  function show message on each input when have a error
    function showErrorMessage(element, message) {
        const parentNode = element.parentElement;
        parentNode.classList.add("invalid");
        parentNode.classList.remove("valid");
        parentNode.querySelector('.message_error').style.display = 'block';
        parentNode.querySelector('.message_error').innerHTML = message;
    }
//  function handle message when input is valid
    function handleSuccess(element) {
        const parentNode = element.parentElement;
        parentNode.classList.remove("invalid");
        parentNode.classList.add("valid");
        parentNode.querySelector('.message_error').style.display = 'none';
        parentNode.querySelector('.message_error').innerHTML = "";
    }
//  handle submit event check if all input pass. send data else not send
    submitBtn.addEventListener('click', function (e) {
        let isValid = true;
        inputsToValidate.forEach(function (item) {
            if (!checkInput(item)) {
                isValid = false;
            }
        })
        if (!isValid) {
            e.preventDefault();
        }
    })
}

