const listaNoticias = document.querySelector('.noticiaHTML')

async function buscaIbge() {
    try {
        const retorno = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
        const data = await retorno.json();
        
        return data.items
    } catch (error) {
        console.log(error)
        return []
    }

  } 

function coletarElementoDadoHTML(noticia) {
    const divDado = document.createElement('div')
    divDado.classList.add('news')

    const msgNoticia = document.createElement('span');
    msgNoticia.classList.add('msgNoticia');
    msgNoticia.innerText = 'Noticia patrocinada';

    const tituloNoticia = document.createElement('p')
    tituloNoticia.classList.add('title-news-today')
    tituloNoticia.innerHTML = noticia.titulo

    divDado.appendChild(tituloNoticia);
    divDado.appendChild(msgNoticia);

    return divDado

}

async function coletarDados() {
    const noticias = await buscaIbge();
  
    listaNoticias.innerHTML = "";
  
    if (noticias.length > 0) {
      const randomIndex = Math.floor(Math.random() * noticias.length);
      const noticiaAleatoria = noticias[randomIndex];

      const noticiaElemento = coletarElementoDadoHTML(noticiaAleatoria);
      listaNoticias.appendChild(noticiaElemento);
    }
  }
coletarDados() 

export default buscaIbge; 