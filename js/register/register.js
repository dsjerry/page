var back = document.getElementById('back')
back.addEventListener('click', () => {})
var next = document.getElementById('next')
next.addEventListener('click', () => {
  let formPageOne = document.getElementById('formPageOne')
  formPageOne.classList.add('form-page-one')
  setTimeout(() => {
    formPageOne.style.display = 'none'
    let formPageTwo = document.getElementById('formPageTwo')
    formPageTwo.style.display = 'inline'
  }, 500)
})
