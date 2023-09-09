document.getElementById('botao').addEventListener('click',async ()=>{

    const nomeFilme = document.getElementById('jogo');
    
    const titulo = document.getElementById('titulo');
    
    const {Title,Year,Director} =  await buscarFilme(nomeFilme.value);

    titulo.innerText = Title;
    console.log(Year);
    console.log(Director);

    nomeFilme.value = '';
});

const buscarFilme = async (filme) => {

    const resposta = await fetch(`https://www.omdbapi.com/?apikey=716a86bd&t=${filme}`);

    const dados = await resposta.json();

    return dados;
}


/*
const titulo = document.getElementsByClassName('titulos')[0];
               document.querySelector('.titulo');
               document.querySelector('#titulo');
               document.querySelectorAll('.titulo'); 
               console.log(titulo);
*/