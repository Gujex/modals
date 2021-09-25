


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const xBtn = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');
console.log(openModal);


for(let i = 0; i < openModal.length; i++) {
    console.log(openModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    }))

    
}

const hideModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

xBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

  
