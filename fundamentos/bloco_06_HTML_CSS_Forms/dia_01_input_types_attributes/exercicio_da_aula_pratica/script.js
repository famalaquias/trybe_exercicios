// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
function buttonSubmit(event) {
    event.preventDefault();
}

window.onload = function () {
    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', buttonSubmit);
};


// Crie um botão que limpe as informações contidas nos campos.
function clearButton () {
    const clearButtonNow = document.querySelector('#submit-button-clear');
    clearButtonNow.addEventListener('click', function() {
        const nomeCompleto = document.querySelector('#nome-completo');
        nomeCompleto.value = '';
        
        const endereçoEmail = document.querySelector('#input-email');
        endereçoEmail.value = '';

        var destino1 = document.querySelector('#destino1');
        destino1.checked = '';
        var destino2 = document.querySelector('#destino2');
        destino2.checked = '';
        var destino3 = document.querySelector('#destino3');
        destino3.checked = '';
        var destino4 = document.querySelector('#destino4');
        destino4.checked = '';

        const textArea = document.querySelector('#textarea');
        textArea.value = '';

        const date = document.querySelector('#date');
        date.value = '';

        const checkboxOportunidades = document.querySelector('#checkbox-oportunidades');
        checkboxOportunidades.checked = '';

        const checkboxImagem = document.querySelector('#checkbox-imagem');
        checkboxImagem.checked = '';
    });
}
clearButton();