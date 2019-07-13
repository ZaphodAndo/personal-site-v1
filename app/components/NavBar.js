class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
                        "<div>\
                            <a href='/app/index.html' class='home'>Home</a>\
                            <a href='/app/index.html'>About</a>\
                            <a href='/app/index.html'>Categories</a>\
                        </div>";
    }
}
window.customElements.define("nav-bar", NavBar);