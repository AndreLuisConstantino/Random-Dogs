'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.logo = ''
        this.titulo = 'titulo'
        this.infolink = 'informação'
        this.link = 'link'
        this.firstsocialmedia = 'link first social media'
        this.firstimagesocialmedia = ''
        this.secondsocialmedia = 'link second social media'
        this.secondimagesocialmedia = ''
    }

    static get observedAttributes() {
        return [
            'logo',
            'titulo', 
            'infolink', 
            'link', 
            'firstsocialmedia', 
            'firstimagesocialmedia',
            'secondsocialmedia',
            'secondimagesocialmedia'
            ]
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
        card.classList.add('card__container')

        const logo = document.createElement('img')
        logo.alt = 'Imagem de logo'
        logo.src = this.logo

        const titulo = document.createElement('h1')
        titulo.classList.add('info__name')
        titulo.textContent = this.titulo

        const link = document.createElement('a')
        link.classList.add('link')
        link.href = this.link
        link.textContent = this.infolink

        //Icones
        const iconsContainer = document.createElement('icons__container')
        iconsContainer.classList.add('icons__container')

        const primeiraRedeSocial = document.createElement('a')
        primeiraRedeSocial.href = this.firstsocialmedia

        const primeiraRedeSocialImage = document.createElement('img')
        primeiraRedeSocialImage.src = this.firstimagesocialmedia
        primeiraRedeSocialImage.alt = 'imagem rede social'

        const segundaRedeSocial = document.createElement('a')
        segundaRedeSocial.href = this.secondsocialmedia

        const segundaRedeSocialImage = document.createElement('img')
        segundaRedeSocialImage.src = this.secondimagesocialmedia
        segundaRedeSocialImage.alt = 'imagem rede social'

        primeiraRedeSocial.append(primeiraRedeSocialImage)
        segundaRedeSocial.append(segundaRedeSocialImage)
        iconsContainer.append(primeiraRedeSocial, segundaRedeSocial)

        card.append(logo, titulo, link, iconsContainer)

        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        .card__container {
            height: 375px;
            width: 310px;
            background-color: #fff;
            color: #222;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            border-radius: 10px;
        }
        
        .link{
            text-decoration: none;
        }

        .info__container {
            font-size: 3.5rem;
        }
        
        .site {
            color: #222;
            font-weight: 700;
            font-size: 2rem;
        }
        
        .icons__container {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            color: #222;
        }
        `

        return css
    }
}
customElements.define('card-info', card)
