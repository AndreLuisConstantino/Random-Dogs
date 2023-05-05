'use strict'

import { dogsImages } from "./API/dogsAPI.js"

import './router.js'

const imagens = await dogsImages(4)

const criarCard = (imagem) => {
    const card = document.createElement('card-dogs')
    card.foto = imagem
    card.nome = 'cachorro fofis'

    return card
}

export const carregarCards = () => {
    const container = document.querySelector('.container__dogs')
    const card = imagens.message.map( criarCard )
    
    container.replaceChildren(...card)
}