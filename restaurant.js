import './style.css';
import createMenu from './tabs';
const createHomePage = () => {
    
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')


    const heading = document.createElement('div');
    heading.classList.add('heading');
    const image = document.createElement('img');
    image.classList.add('entry-image');
    image.src = './images/icon.png';
    heading.appendChild(image);
    const h1 = document.createElement('h1');
    h1.innerHTML = 'PIZZARIA';
    heading.appendChild(h1);
    pageContent.append(heading)

    const desc = document.createElement('div');
    desc.classList.add('desc');
    const descbody = document.createElement('h3');
    descbody.innerHTML = "Fazbear Pizza is a quaint and lively gathering spot dedicated to pleasing pizza lovers of all ages. With charming and vibrant decor, it offers a variety of delicious handmade pizzas, made with fresh and selected ingredients.";
    desc.appendChild(descbody);
    pageContent.appendChild(desc);



    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hourstitle = document.createElement('h2');
    hourstitle.innerHTML = 'Hours';
    hours.appendChild(hourstitle);
    const hoursbody = document.createElement('h3');
    hoursbody.innerHTML = 'Sunday: 8am - 8pm Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm';
    hours.appendChild(hoursbody);
    pageContent.appendChild(hours);

    const location = document.createElement('div');
    location.classList.add('location');
    const locbody = document.createElement('h3');
    locbody.innerHTML = '123 Elm Street, Greenfield Heights.';
    location.appendChild(locbody);
    pageContent.appendChild(location);

    content.appendChild(pageContent)
    
    
    return content
}



export default createHomePage;
