class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
                        "<div>\
                            <a href='/app/index.html' class='home'>Home</a>\
                            <a href='/app/index.html'>About</a>\
                            <input class='search-box' type='text' placeholder='Search'>\
                            <a href='/app/index.html'>Blog</a>\
                            <a href='/app/index.html'>Categories</a>\
                        </div>";
    }
}
window.customElements.define("nav-bar", NavBar);