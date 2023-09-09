const buscarFilme = async () => {

    const filme = 'matrix';

    const resposta = await fetch(`https://www.omdbapi.com/?apikey=716a86bd&t=${filme}`);

    const dados = await resposta.json();

    console.log(dados);
}

buscarFilme();