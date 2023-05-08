'use strict'

import {
    getDogsImage,
    getDogsBreeds
} from "./API/dogsAPI.js"

import './router.js'

const listaDeImagens = await getDogsImage(10)

const listaDeRacas = await getDogsBreeds()

const nomeRacasAPI = Object.keys(listaDeRacas.message)

const criarCardsDogs = (imagem) => {

    const cardDogs = document.createElement('card-dog')
    cardDogs.foto = imagem

    const urlImagem = imagem
    const nomeRaca = urlImagem.split('/')

    cardDogs.nome = nomeRaca[4]



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

const compararNomes = (nomeUrl, nomeApi) => {
    let nomeVerificado = ''
    let nomeNovo = ''
    if(nomeUrl == nomeApi){
        nomeVerificado = nomeApi
    } else {
        console.log(nomeApi)
        nomeApi.forEach((nomeCompleto) => {
            nomeNovo = `${nomeApi} ${nomeCompleto}`
        })
    }

    if (nomeVerificado){
        return nomeVerificado
    } else if (nomeNovo) {
        return nomeNovo
    }
}

