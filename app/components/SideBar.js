class SideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML ="<div>\
                            <h1>About me</h1>\
                            <p>\
                                Hi I’m Ethan, an apprentice applications developer who works for a company called PebblePad.\
                            </p>\
                            <p>\
                                I am mostly a Frontend dev that occasionally delves into a bit of backend and other areas especially at my place of work where I use a lot of C# and .NET alongside your usual frontend technologies such as JavaScript.\
                            </p>\
                            <a href='/app/about.html'>Read more</a>\
                            <div class='links'>\
                                <h1>\
                                    My Links!\
                                </h1>\
                                <a href='https://twitter.com/Goebbels_Ando'>🐦 Twitter</a>\
                                <a href='https://www.linkedin.com/in/ethan-anderson-41ba9a172'>🔗 LinkedIn</a>\
                                <a href='https://medium.com/@ethan.anderson'>📰 Medium</a>\
                                <a href='https://github.com/MrGoebbels'>🐙 GitHub</a>\
                            </div>\
                        </div>";
    }
}
window.customElements.define("side-bar", SideBar);