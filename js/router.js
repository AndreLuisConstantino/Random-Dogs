'use strict'

import { carregarCards } from './app.js'

const routes = {
    '/': '/pages/home.html',
    '/dogs': '/pages/dogs.html',
    '/api': '/pages/api.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, '', window.event.target.href)

    const path = window.location.pathname


    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if (window.location.pathname == '/dogs') {
         carregarCards()
    }
}

window.route = route