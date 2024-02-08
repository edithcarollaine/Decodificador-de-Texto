// criptografia

function criptografar() {

    var criptografar = (document.getElementById('texto').value);

    var resultado_criptografado = window.btoa(criptografar);

    document.getElementById('resultado').value = resultado_criptografado;

}

// descriptografia

function descriptografar() {

    var descriptografar = (document.getElementById('texto').value);

    var resultado_descriptografado = window.atob(descriptografar);

    document.getElementById('resultado').value = resultado_descriptografado;

}


// copiar texto
function copiarTexto(){

    const elementoResultado = document.getElementById('resultado');
    const texto = elementoResultado.value;

    navigator.clipboard.writeText(texto)

        .then(() => {
            // alert('Texto copiado!');

            const elementoTexto = document.getElementById('texto');
            elementoTexto.value = texto;

            limparArea();

        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}


// Limpeza das áreas de textos

function limparArea() {
    const limpar = document.getElementById('resultado');
    limpar.value = '';
}

function limparAreaT() {
    const limpar = document.getElementById('texto');
    const limpar_resultado = document.getElementById('resultado');
    limpar.value = '';
    limpar_resultado.value = '';
}
