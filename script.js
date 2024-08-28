const textArea = document.querySelector(".text_area");
const mensagem = document.querySelector(".mensagem");

function buttonCripto() {
    const textoCripto = encriptar(textArea.value);
    mensagem.value = textoCripto;
    textArea.value = "";
    mensagem.style.backgroundImage = 'none';
    mensagem.placeholder = '';
}

function encriptar(stringDescripted) {
    let arrayCodes = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    let stringEncripted = stringDescripted.toLowerCase();

    for(let i = 0; i < arrayCodes.length; i++){
        if(stringEncripted.includes(arrayCodes[i][0]));{
            stringEncripted = stringEncripted.replaceAll(arrayCodes[i][0], arrayCodes[i][1]);
        }
    }

    return stringEncripted;
}

function buttonDescripto() {
    const textoDescripto = descriptar(textArea.value);
    mensagem.value = textoDescripto;
    textArea.value = "";
    mensagem.style.backgroundImage = 'none';
}

function descriptar(stringEncripted) {
    let arrayCodes = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringDescripted = stringEncripted.toLowerCase();

    for(let i = 0; i < arrayCodes.length; i++) {
        if(stringDescripted.includes(arrayCodes[i][1])){
            stringDescripted = stringDescripted.replaceAll(arrayCodes[i][1], arrayCodes[i][0]);
        }
    }

    return stringDescripted;
}


function copyText() {
    const mensagem = document.querySelector(".mensagem");

    navigator.clipboard.writeText(mensagem.value).then(() => {
        alert("Texto copiado com sucesso!");
        mensagem.value = "";
        mensagem.placeholder = "Nenhuma mensagem encontrada.";
        mensagem.style.backgroundImage = "url(/imagens/finder.png)";
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
    })
}

