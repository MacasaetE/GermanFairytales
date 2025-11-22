// Header and Navigation
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
            `
        const navLinkEls = document.querySelectorAll('.nav-link');
        const windowPathname = window.location.pathname;
        navLinkEls.forEach(navLinkEl => {
            const navLinkPathname = new URL(navLinkEl.href).pathname;

            if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
                navLinkEl.classList.add('active');
            }
        });
    }
}
customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)