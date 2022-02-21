const submitButton = document.querySelector('#submit-button');
function buttonSubmit(event) {
    event.preventDefault();
}

window.onload = function () {
    submitButton.addEventListener('click', submitButton);
}


function clearButton () {
    const clearButtonNow = document.querySelector('#submit-button-clear');
    clearButtonNow.addEventListener('click', function(event))
}