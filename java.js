burger = document.querySelector('.burger');
header = document.querySelector('.head');
uppernav = document.querySelector('.uppernav');
navigation = document.querySelector('.navigation');


burger.addEventListener("click", myFunction);

function myFunction() {
    header.classList.toggle('n-height');
    uppernav.classList.toggle('vnav');
    navigation.classList.toggle('vnav');
}



