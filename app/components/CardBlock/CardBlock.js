class CardBlock extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
                        "<div class='card'>\
                            <p>Blog</p>\
                            <h1>Never gonna give you up!</h1>\
                            <p>An original meme and a blast from the past.</p>\
                            <div class='bottom-row'>\
                                <p>1 June 2019</p>\
                                <p class='tag'>Meme</p>\
                            </div>\
                        </div>";
    }
}
window.customElements.define("card-block", CardBlock);