class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
                        "<div>\
                            <a href='/app/index.html' class='home'>Home</a>\
                            <a href='/app/about.html'>About</a>\
                            <a href='/app/categories.html'>Categories</a>\
                        </div>";
    }
}
window.customElements.define("nav-bar", NavBar);