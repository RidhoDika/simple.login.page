const Wrapper = document.querySelector('.Wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    Wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    Wrapper.classList.remove('active');
}); 

btnPopup.addEventListener('click', ()=> {
    Wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    Wrapper.classList.remove('active-popup');
});