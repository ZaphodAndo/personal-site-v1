class SideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML ="<div>\
                            <h1>About me</h1>\
                            <p>\
                                Bacon ipsum dolor amet hamburger drumstick ham hock chicken bresaola rump pastrami ground round.\
                                Prosciutto hamburger ground round salami, cupim cow corned beef tail pork belly picanha.\
                            </p>\
                            <p>\
                                Ham hock sausage ham burgdoggen tenderloin alcatra. Pork chop ribeye shank tongue venison chuck shankle prosciutto. \
                                Boudin brisket pork burgdoggen. <a href='/app/about.html'>Read more</a>\
                            </p>\
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