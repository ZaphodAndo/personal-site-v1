class CardBlock extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadow.innerHTML = `
        <style>
            .card-block {
                min-width: 800px;
                text-decoration: none;
            }
            @media screen and (max-width: 1075px) {
                .card-block {min-width: unset;}
            }
            .card {
                display: flex;
                flex-direction: column;
                background: linear-gradient(to right, #fc00ff, #00dbde);
                border-radius: 20px;
                padding: 20px;
                margin: 20px;
                min-width: 650px;
                box-shadow: 1px 1px 10px black;
                transform: translateZ(0);
                transition-duration: 0.3s;
                transition-property: transform;
            }
            .card:hover,
            .card:focus,
            .card:active {
                transform: scale(1.1);
                box-shadow: 2px 2px 20px black;
            }
            h1 {
                margin: 20px 0 20px 0;
                font-size: 1.6rem;
                color: white;
            }
            p {
                margin: 10px 0 10px 0;
                font-size: 1.4rem;
                color: white;
            }
            .date {
                float: left;
            }
            
            .tag {
                float: right;
                background-color: #BB86FC;
                color: #121212;
                padding: 8px;
                border-radius: 3px;
            }
        </style>
        <a href="${this.getAttribute('href')}" class="card-block">
            <div class="card">
                <h1>${this.getAttribute('title')}</h1>
                <p>${this.getAttribute('desc')}</p>
                <div class="bottom-row">
                    <p class="date">${this.getAttribute('date')}</p>
                    <p class="tag">${this.getAttribute('tag')}</p>
                </div>
            </div>
        </a>
        `;
    }
}

window.customElements.define('card-block', CardBlock);