let step = 'one'
const back = document.getElementById('back')
back.onclick = () => {
  changeItem(step)
}
const next = document.getElementById('next')
next.onclick = () => {
  step = 'two'
  changeItem(step)
}
// circle 1
const circleOne = document.getElementById('circleOne')
circleOne.onclick = () => {
  step = 'one'
  changeItem(step)
}
// circle 2
const circleTwo = document.getElementById('circleTwo')
circleTwo.onclick = () => {
  step = 'two'
  changeItem(step)
}
// circle 3
const circleThree = document.getElementById('circleThree')
circleThree.onclick = () => {
  if (step === 'one') {
    const please = document.getElementById('please')
    please.classList.add('please-appear')
    setTimeout(() => {
      please.classList.replace('please-appear', 'please')
    }, 1500)
    return
  }
  changeItem('three')
}
// 切换表单填写项
function changeItem(value) {
  const formPageOne = document.getElementById('formPageOne')
  const formPageTwo = document.getElementById('formPageTwo')
  const formPageThree = document.getElementById('formPageThree')
  const roadOne = document.getElementById('roadOne')
  const roadTwo = document.getElementById('roadTwo')

  if (value === 'one') {
    circleTwo.classList.replace(
      'step-item-circle-finish',
      'step-item-circle-blank'
    )
    circleThree.classList.replace(
      'step-item-circle-finish',
      'step-item-circle-blank'
    )
    roadOne.classList.replace('step-item-road-finish', 'step-item-road-blank')
    roadTwo.classList.replace('step-item-road-finish', 'step-item-road-blank')
    formPageOne.style.display = 'block'
    formPageTwo.style.display = 'none'
    formPageThree.style.display = 'none'
  } else if (value === 'two') {
    roadOne.classList.replace('step-item-road-blank', 'step-item-road-finish')
    circleTwo.classList.replace(
      'step-item-circle-blank',
      'step-item-circle-finish'
    )
    circleThree.classList.replace(
      'step-item-circle-finish',
      'step-item-circle-blank'
    )
    roadTwo.classList.replace('step-item-road-finish', 'step-item-road-blank')
    formPageOne.style.display = 'none'
    formPageTwo.style.display = 'block'
    formPageThree.style.display = 'none'
  } else if (value === 'three') {
    roadTwo.classList.replace('step-item-road-blank', 'step-item-road-finish')
    circleThree.classList.replace(
      'step-item-circle-blank',
      'step-item-circle-finish'
    )
    formPageOne.style.display = 'none'
    formPageTwo.style.display = 'none'
    formPageThree.style.display = 'block'
  }
}
