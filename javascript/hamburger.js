"use strict";

const hamburger = document.querySelector('.hamburger-icon');
const links = document.querySelector('.mobile-header-nav');

hamburger.addEventListener("click", (e)=>{
    if(links.style.display === 'none'){
        links.style.display = 'flex';
    }else{
        links.style.display = 'none';
    }
})