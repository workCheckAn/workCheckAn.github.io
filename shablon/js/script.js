/* mobile menu */
let burgerMenu = document.querySelector('.burger-menu')
let closeNav = document.querySelector('.close-nav')
let mobileNav = document.querySelector('.mobile-nav')
let links = document.querySelectorAll('.mobile-nav ul a')


function openMobNav() {
   mobileNav.style.display = "flex";
   document.body.classList.add('hidden')
}

function closeMobNav() {
   mobileNav.style.display = "none";
   document.body.classList.remove('hidden')
}

burgerMenu.addEventListener('click', openMobNav)
closeNav.addEventListener('click', closeMobNav)
links.forEach(link => link.addEventListener('click', closeMobNav))
/* /mobile menu */

/* pagination */
let listItems = Array.from(document.querySelectorAll('.list-item'))
let listElement = document.querySelector('.items')
let paginationElement = document.querySelector('.pagination')

let currentPage = 1
let rows = 5

function displayList(items, wrapper, rows_per_page, page) {
   wrapper.innerHtml = '';
   page--
   let start = rows_per_page * page
   let end = start + rows_per_page
   let paginatedItems = items.slice(start, end)
   for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i]
      item.style.display = 'flex'
   }
}

function setUpPagination(items, wrapper, rows_per_page) {
   wrapper.innerHtml = '';
   let pageCount = Math.ceil(items.length / rows_per_page)
   for (let i = 1; i < pageCount + 1; i++) {
      let btn = paginationButton(i, items)
      wrapper.appendChild(btn)
   }
}

function paginationButton(page, items) {
   let button = document.createElement('a')
   button.innerText = page
   button.href = '#items'

   if (currentPage == page) {
      button.classList.add('active')
   }

   button.addEventListener('click', function () {
      currentPage = page
      items.forEach(i => i.style.display = 'none')
      displayList(items, listElement, rows, currentPage)


      let currentBtn = document.querySelector('.pagination a.active')
      currentBtn.classList.remove('active')

      button.classList.add('active')
      listItem.scrollIntoView()
   })
   return button
}

displayList(listItems, listElement, rows, currentPage)
setUpPagination(listItems, paginationElement, rows)

/* /pagination */