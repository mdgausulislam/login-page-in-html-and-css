const container=document.querySelector('.container');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');


registerLink.addEventListener('click',function(){
    container.classList.add('active');
});


loginLink.addEventListener('click',function(){
    container.classList.remove('active');
});


const btn=document.querySelector('.btn');

btn.addEventListener('click',function(){
    container.classList.add('active-popup');
});


const closeIcon=document.querySelector('.close-icon');

closeIcon.addEventListener('click',function(){
    container.classList.remove('active-popup');
});






