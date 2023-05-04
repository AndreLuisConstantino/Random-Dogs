'use strict'

const routes = {
    '/': '/index/.html',
    '/dogs': '/pages/dogs.html',
    '/api': '/pages/api.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, '', window.event.target.href)

    const path = window.location.pathname

    console.log(path);

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html
}

window.route = route