const toggleButton = document.getElementsByClassName('togglebutton')[0]
const navbarmenu = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', () => {
  navbarmenu.classList.toggle('active')
})