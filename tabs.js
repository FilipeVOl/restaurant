import createContactPage from './contact';
import createMenuPage from './menu';
import createHomePage from './restaurant';
import './style.css';

const createTabs = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const buttoncontainer = document.createElement('div')
    buttoncontainer.classList.add('buttoncontainer')

    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')

    div1.setAttribute('id', 'home-btn')
    div2.setAttribute('id', 'menu-btn')
    div3.setAttribute('id', 'contact-btn')

    div1.classList.add('tab')
    div2.classList.add('tab')
    div3.classList.add('tab')

    div1.textContent = 'Home'
    div2.textContent = 'Menu'
    div3.textContent = 'Contact'

    div1.addEventListener ('click', () => {
        clearContent()
        createHomePage()
    })
    div2.addEventListener ('click', () => {
        clearContent()
        createMenuPage()
    })
    div3.addEventListener ('click', () => {
        clearContent()
        createContactPage()
    })

    buttoncontainer.appendChild(div1)
    buttoncontainer.appendChild(div2)
    buttoncontainer.appendChild(div3)

    content.appendChild(buttoncontainer)
}

function clearContent () {
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page-content')
    if(pageContent) {
        content.removeChild(pageContent)
    }
} 

export default createTabs