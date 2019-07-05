class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
                        "<div>\
                            <a href='/app/index.html'>Home</a>\
                            <a>About</a>\
                            <input class='search-box' type='text' placeholder='Search'>\
                            <a>Blog</a>\
                            <a>Categories</a>\
                        </div>";
    }
}
window.customElements.define("nav-bar", NavBar);