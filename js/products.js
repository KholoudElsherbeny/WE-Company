let navbar = document.querySelector('.list-links');
let onelist = document.querySelector('.footer .onelist h3');
let towlist = document.querySelector('.footer .towlist h3');
let therelist = document.querySelector('.footer .therelist h3');
// scroll screen fixed header
window.onscroll = () =>{
    if(window.scrollY > 8){
        document.querySelector('.list-links').classList.add('fixed')
        
    }
    else{
        document.querySelector('.list-links').classList.remove('fixed')
    }
    navbar.classList.remove('active');
    document.querySelector('.header .search-form').classList.remove('blockinbut')
    if (window.scrollY > 20){
        document.querySelector('.scroll').classList.add('top')
    }else{
        document.querySelector('.scroll').classList.remove('top')
    }
}
document.querySelector('.fa-bars').onclick = ()=>{
    navbar.classList.toggle('active');
};
// when covert light to dark (opposite)
document.querySelector('.fa-moon').onclick = () =>{
    document.querySelector('.body').classList.toggle('background')
    document.querySelector('.fa-moon').classList.toggle('fa-sun')
    document.querySelectorAll('p').classList.toggle('color')
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


var swiper = new Swiper(".camera", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });


document.querySelector('.scroll').onclick = () =>{
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
}