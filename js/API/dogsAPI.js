'use strict'

export const dogsImages = async (numero) => {

    const url = `https://dog.ceo/api/breeds/image/random/${numero}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}