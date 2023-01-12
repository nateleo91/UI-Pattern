
let modal = document.getElementById('modalBody');
let images = document.getElementsByClassName('image');

let showModal = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
}

for(let i = 0; i < images.length; i++){
    images[i].addEventListener('click', showModal)
}

let closeBtn = document.getElementsByClassName('closeBtn')[0];
closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
})