const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const contactHeading = document.createElement('div')
    contactHeading.classList.add('contacthead')
    const contactTitle = document.createElement('h1')
    contactTitle.innerHTML = 'Contact Us'
    contactHeading.appendChild(contactTitle)

    const form = document.createElement('form')
    form.classList.add ('contact-form')

    const phoneInput = document.createElement('input')
    phoneInput.type = 'number'
    phoneInput.placeholder = 'Enter phone'
    form.appendChild(phoneInput)

    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.placeholder = 'Enter address'
    form.appendChild(addressInput)

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.value = 'Submit'
    submitButton.classList.add('submit')
    form.appendChild(submitButton)


    pageContent.appendChild(contactHeading)
    pageContent.appendChild(form)

    content.appendChild(pageContent)
}

export default createContactPage