let livros =  [];
const endpointDaApi  = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosApi();

async function getBuscarLivrosApi() {
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livros);
};


