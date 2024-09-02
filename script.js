
function stickyNavbar() {
    const container = document.getElementById('scrollContainer');
    const navbar = document.getElementById('navbar');
  

    if (container.scrollTop > 50) {
        console.log("Adding sticky class"); 
        navbar.classList.add("sticky");
    } else {
        console.log("Removing sticky class"); 
        navbar.classList.remove("sticky");
    }
}



const gridItems = document.querySelectorAll('.featured-cart');


gridItems.forEach(item => {
    item.addEventListener('click', function() {
        const url = "music.html"; 
        window.location.href = url; 
    });
});
