function helper(elemName, props, ...children) {
    const element = document.createElement(elemName);
    if (props) {
        Object.assign(element, props);
    }
    if (children) {
        children.forEach(child => {
            if (typeof child === 'object') {
                element.appendChild(child);
            } else {
                element.appendChild(document.createTextNode(child));
            }
        });
    }
    return element;
}
  
function getDefaultTemplate(title, desc, date, tag) {
    return helper(
        'div',
        { className: 'card-block' },
        helper(
            'div',
            { className: 'card' },

            helper('h1', null, title),
            helper('p', null, desc),

            helper(
                'div',
                { className: 'bottom-row' },
                helper('p', { className: 'date' }, date),
                helper('p', { className: 'tag' }, tag)
            )
            
        )
    );
}

function getDefaultStyle() {
    return helper(
        'style',
        null,
        `
        .card-block {
            min-width: 800px;
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
        `
    );
}
  
class CardBlock extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'desc', 'date', 'tag'];
    }

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.css = getDefaultStyle();
        this.template = getDefaultTemplate(
            ...['title', 'desc', 'date', 'tag'].map(title => {
                return this.getAttribute(title);
            })
        );
        this.shadow.appendChild(this.css);
        this.shadow.appendChild(this.template);
    }
}
  
window.customElements.define('card-block', CardBlock);