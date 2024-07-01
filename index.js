const buttonElement = document.querySelector('main div button')
const buttonDelete = document.querySelector('main div.list button.button-clear')
const inputElement = document.querySelector('input')
const ulElement = document.querySelector('ul')
const formElement = document.querySelector('form')

function recuperarALista() {
  const listaStorage = localStorage.getItem('lista')

  if (listaStorage) {
    const lista = JSON.parse(listaStorage)
    ulElement.innerHTML = ""

    lista.forEach(item => {
      const liElement = document.createElement('li')
      liElement.innerHTML = item

      ulElement.appendChild(liElement)
    })
  } else {
     ulElement.innerHTML = ""
  }
}
setInterval(recuperarALista, 1000)

buttonElement.addEventListener('click', () => {
  const value = inputElement.value

  if (value) {
    const listaStorage = localStorage.getItem('lista')

    if (listaStorage) {
      const lista = JSON.parse(listaStorage)
      lista.push(value)

      localStorage.setItem('lista', JSON.stringify(lista))

    } else {
      const novaLista = [value]
      localStorage.setItem('lista', JSON.stringify(novaLista))
    }

    inputElement.value = ""
    setInterval(recuperarALista, 1000)
  }
})


buttonDelete.addEventListener('click', () => {
  localStorage.removeItem('lista')
    recuperarALista()
 })

 document.addEventListener('DOMContentLoaded', recuperarALista);

import coletarDados from "./ibge.js"
coletarDados()


