'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null
        this.nome = 'Nome'
    }


    static get observedAttributes() {
        return ['nome', 'foto']
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
        card.classList.add('card')

        const foto = document.createElement('img')
        foto.classList.add('card__image')
        foto.src = this.foto

        const nome = document.createElement('span')
        nome.classList.add('card__name')
        nome.textContent = this.nome


        card.append(foto, nome)

        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        .card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            height: 279px;
            width: 308px;
            background-color: #fff;
            border-radius: 10px;
            cursor: pointer;
        }
        
        .card__image {
            height: 100%;
            width: 80%;
            background-size: cover;
            background-position: center;
        }
        
        .card__name {
            font-weight: 700;
            font-size: 1.3rem;
        }
        `
        return css
    }
}

customElements.define('card-dogs', card)