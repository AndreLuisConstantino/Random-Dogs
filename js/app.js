'use strict'

import { getDogsImage } from "./API/dogsAPI.js"

import './router.js'

const listaDeImagens = await getDogsImage(10)

// listaDeImagens.message.map( (imagem) => {
//     console.log(imagem)
// })

const criarCardsDogs = (imagem) => {

    const cardDogs = document.createElement('card-dog')
    cardDogs.foto = imagem
    cardDogs.nome = 'teste'

    return cardDogs
}

export const carregarCards = () => {
    const container = document.querySelector('.container__dogs')
    const cards = listaDeImagens.message.map(criarCardsDogs)

    container.replaceChildren(...cards)
}

export const recarregarCards = async () => {
    const listaDeImagensRecarregamento = await getDogsImage(10)

    const cardsNovos = listaDeImagensRecarregamento.message.map(criarCardsDogs)

    const container = document.querySelector('.container__dogs')
    container.replaceChildren(...cardsNovos)
}