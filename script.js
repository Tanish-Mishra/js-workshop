const inputBar = document.querySelector('.thala__input')
const submitButton = document.querySelector('.thala__button')
// const jersyNumber = 7;
const thalaVd = document.getElementById('thala__vd'); 
// let length = 0;


function playVideo() {
        thalaVd.play()
        thalaVd.style.visibility = 'visible'; 


        // thalaVd.style.display = 'block';           
}

function hideVideo() {
       thalaVd.style.visibility = 'hidden'; 
    //    thalaVd.style.display = 'none'
}



// const isThala = () => {
        
// }
submitButton.addEventListener('click', () => {
    let value = inputBar.value;
    let length = inputBar.value.length;
    console.log(length);
    // let length = inputBar.value.length;
    
    if(value==7 || length == 7 ) {
        playVideo()
        thalaVd.addEventListener('ended', hideVideo)
    } else {
        alert('Your are not a thala Fan !')
    
    }
    
    
})

// submitButton.addEventListener('click', ()=>{
//     // isThala();
//     // inputBar.value = '';
//     // inputBar.focus();
// })  