window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

//show/ hide answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change-icon
        const icon = faq.querySelector('.faq-icon i');
        if (icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus'
        }
        else {
            icon.className = 'fa-solid fa-plus';
        }
    })
})

//show and hide nav menu

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-icon');
const closeBtn = document.querySelector('#close-menu-icon');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';


})
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';

})

