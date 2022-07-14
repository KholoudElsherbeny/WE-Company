'use strict';
// definitions
let listone = document.querySelector('.list-links .listone');
let listtow = document.querySelector('.list-links .listtow');
let navbar = document.querySelector('.list-links');
let page = document.querySelector(".home");
let imgarray = ["1.png", "2.jpg", "3.jpg"];
let boxinputh3 = document.querySelector('.call .row h3');
let boxinput = document.querySelector('.call .row ');
let onelist = document.querySelector('.footer .onelist h3');
let towlist = document.querySelector('.footer .towlist h3');
let therelist = document.querySelector('.footer .therelist h3');
// list-links
window.onscroll = () =>{
    if(window.scrollY > 8){
        document.querySelector('.list-links').classList.add('fixed')
    }
    else{
        document.querySelector('.list-links').classList.remove('fixed')
    }
    navbar.classList.remove('active');
    document.querySelector('.header .search-form').classList.remove('blockinbut')
    listone.classList.remove('block');
    listtow.classList.remove('block2');
}
// listone
document.querySelector('#listone').onclick = ()=>{
    listone.classList.toggle('block');
    listtow.classList.remove('block2');
    document.querySelector('.list-links .links #listone').classList.toggle('margin')
    document.querySelector('.list-links .links #listtow').classList.remove('margin2')
};
// listtow
document.querySelector('#listtow').onclick = ()=>{
    listtow.classList.toggle('block2');
    listone.classList.remove('block');
    document.querySelector('.list-links .links #listtow').classList.toggle('margin2')
    document.querySelector('.list-links .links #listone').classList.remove('margin')
};

document.querySelector('.fa-bars').onclick = ()=>{
    navbar.classList.toggle('active');
};
// when covert light to dark (opposite)
document.querySelector('.fa-moon').onclick = () =>{
    document.querySelector('.body').classList.toggle('background')
    document.querySelector('.fa-moon').classList.toggle('fa-sun')
    document.querySelector('.naa').classList.toggle('color')
    document.querySelector('.nann').classList.toggle('color')
    document.querySelector('.naan').classList.toggle('color')
    document.querySelector('.naaa').classList.toggle('color')
    boxinputh3.classList.toggle('color')
    boxinput.classList.toggle('border')
}
// When the screen size is small --> Search 
document.querySelector('.header .icon .fa-search').onclick = ()=>{
    document.querySelector('.header .search-form').classList.toggle('blockinbut')
    document.querySelector('.list-links').classList.remove('active')
}
//When the screen size is small --> logo 
document.querySelector('.header .logo .fa-bars').onclick = () =>{
    document.querySelector('.list-links').classList.toggle('active')
    document.querySelector('.header .search-form').classList.remove('blockinbut')
};
// When he displays pictures randomly
setInterval(function (){
    let  randomNumber = Math.floor(Math.random() * imgarray.length);
    page.style.backgroundImage = 'url("image/'+ imgarray[randomNumber]+'")'
}, 3000);


// block lists links in small screen 
onelist.onclick = ()=>{
    document.querySelector('.footer .onelist .block11').classList.toggle('blo');
}
towlist.onclick = ()=>{
    document.querySelector('.footer .towlist .block12').classList.toggle('bloo');
}
therelist.onclick = ()=>{
    document.querySelector('.footer .therelist .block13').classList.toggle('blooo');
}
