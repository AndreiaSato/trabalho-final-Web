function porc(){
    let go = document.getElementById('barra')
    if (porcentagem < 100){
        const percorre = 100/7;
        go.style.width = (porcentagem + percorre).toFixed(2) + '%';
        go.innerHTML = (percorre + porcentagem).toFixed(2) + '%';
        porcentagem +=percorre;

    }
}
var porcentagem = 0;


function salvar(){
    let nome = document.getElementById('nome').value;
    alert("olá "+ nome + " bem vinda a loja SecondHand! ");
}