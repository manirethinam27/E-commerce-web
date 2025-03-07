function openmenu() {
        const sidebar=document.querySelector(".menu-bar");
        sidebar.style.display="flex"
    }
    function closemenu() {
        const sidebar=document.querySelector(".menu-bar");
        sidebar.style.display="none"
    }
    let currentIndex = 0;
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
         slides.style.transform = `translateX(-${index * 100}%)`;
         dots.forEach(dot => dot.classList.remove("active"));
         dots[index].classList.add("active");
         currentIndex = index;
    }

    function nextSlide() {
         currentIndex = (currentIndex + 1) % 3;
         showSlide(currentIndex);
    }

    function prevSlide() {
         currentIndex = (currentIndex - 1 + 3) % 3;
         showSlide(currentIndex);
    }

    function currentSlide(index) {
         showSlide(index);
    }

    setInterval(nextSlide, 3000); 
    showSlide(currentIndex); 
    
    function fav(event) {
         event.target.style.fill="red"
    }  
    function favr(event) {
         event.target.style.fill="black"
    }  
    
    function displayItem(category) {
    document.querySelectorAll('.product').forEach(item => {
        item.style.display = 'none';
    });
    document.querySelectorAll(`.${category}`).forEach(item => {
        item.style.display = 'block';
    });
}