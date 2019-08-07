class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
                        "<div>\
                            <a href='/index.html' class='home'>Home</a>\
                            <a href='/about.html'>About</a>\
                            <a href='/categories.html'>Categories</a>\
                        </div>";
    }
}
window.customElements.define("nav-bar", NavBar);