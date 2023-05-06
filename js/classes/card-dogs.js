'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = ''
        this.nome = 'nome'
    }

    static get observedAttributes() {
        return ['foto', 'nome']
    }

    attributeChangedCallback(Attributes, oldValue, newValue) {
        this[Attributes] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('dog__container')

        const foto = document.createElement('img')
        foto.classList.add('dog__image')
        foto.src = this.foto

        const nome = document.createElement('span')
        nome.classList.add('dog__name')
        nome.textContent = this.nome

        card.append(foto, nome)

        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        .dog__container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: #fff;
            flex-direction: column;
            height: 200px;
            width: 220px;
            border-radius: 10px;
        }
        
        .dog__image {
            width: 200px;
            height: 150px;
            background-size: cover;
            background-position: center;
        }
        
        .dog__name {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 1rem;
        }
        `
        return css
    }
}

customElements.define('card-dog', card)