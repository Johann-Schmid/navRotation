const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');

open.addEventListener('click', () => {
    console.log("Open")
    container.classList.add('show-nav')
})

close.addEventListener('click', () => container.classList.remove('show-nav'))

homeLink.addEventListener('click', () => {
    console.log("HomeLink")
    container.classList.remove('show-nav')
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

aboutLink.addEventListener('click', () => {
    console.log("AboutLink")
    container.classList.remove('show-nav')
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

contactLink.addEventListener('click', () => {
    console.log("AboutLink")
    container.classList.remove('show-nav')
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});