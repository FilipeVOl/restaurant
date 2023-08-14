const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const menuHeading = document.createElement('div')
    menuHeading.classList.add('menuhead')
    const menuTitle = document.createElement('h1')
    menuTitle.innerHTML = 'Menu'
    const firstItem = document.createElement('img')
    firstItem.src = './images/pizza.png'
    firstItem.height = 200
    menuHeading.appendChild(menuTitle)
    menuHeading.appendChild(firstItem)

    pageContent.appendChild(menuHeading)
    pageContent.appendChild(menuTitle)
    pageContent.appendChild(firstItem)

    content.appendChild(pageContent)

}

export default createMenuPage 