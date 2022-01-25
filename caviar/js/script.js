
let menuIcon = document.querySelector('.mobile-menu-icon')
let closeMobileNav = document.querySelector('.close')
let mobileNav = document.querySelector('.mobile-nav')
let links = document.querySelectorAll('.mobile-menu li a')

function toggleMobNav() {
   if (mobileNav.style.display == 'none') {
      mobileNav.style.display = "flex";
   } else {
      closeMobNav()
   }

}

function closeMobNav() {
   mobileNav.style.display = "none";
}

menuIcon.addEventListener('click', toggleMobNav)
links.forEach(link => link.addEventListener('click', closeMobNav))