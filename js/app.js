// ||Navbar||//
//Responsive nav bar,toggles between adding and removing the "responsive" class when the icon is clicked*/
function hamburgerMenu() {
  const navbar = document.getElementById("myTopnav");
  navbar.classList.toggle("responsive");
}
// ||Back to top button||
//Get the button
const topBtn = document.getElementById("topBtn");//Gets top bttn
window.onscroll = () => scrollFunction(); //onscroll event occurs when scrollbar is being scrolled
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // Shows button once user scrolls down 20px from the top of the page
    topBtn.style.display = "block"; //.style.display returns the topBtn display type
  } else { 
    topBtn.style.display = "none"; 
  }
}
//scrollTop property sets the number of pixels the content is scrolled vertically.
// When the user clicks on the button, page scrolls back to top.
function topFunction() {
  document.body.scrollTop = 0;//For Safari
  document.documentElement.scrollTop = 0;// For Chrome,Firefox,and IE
}

