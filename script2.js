const carousel = document.querySelectorAll(".carousel-control-prev") ;
carousel.forEach(carousel-item => {
    carousel.addEventListener("click" , ()=>{
        removeActiveClass();
        carousel-item.classList.add("active")
        
    })
})

function removeActiveClass() {
    carousel-item.forEach(carousel =>{
        carousel.classList.remove("active")
    });
}