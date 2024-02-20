const inputBar = document.querySelector('.thala__input')
const submitButton = document.querySelector('.thala__button')
const jersyNumber = 7;
const thalaVd = document.getElementById('thala__vd');
let length = 0;
 
function playVideo() {
        thalaVd.play()
        thalaVd.style.visibility = 'visible';            
}

function hideVideo() {
       thalaVd.style.visibility = 'hidden';
}


// const isThala = () => {
     
// }




submitButton.addEventListener('click', ()=>{
    // isThala();
    // inputBar.value = '';
    // inputBar.focus();
})  