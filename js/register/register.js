// 监听输入框 focus 事件
document.addEventListener('focusin', (e) => {
  // console.log(e.target)
  let ele = e.target
  whoVerify(ele)
})

const toLogin = document.getElementById('toLogin')
toLogin.addEventListener('click', () => {
  location.href = '/index.html'
})
// flag 表单是否为空的标志
var flag
let step = 'one'
const back = document.getElementById('back')
back.onclick = () => {
  if (step === 'three') {
    step = 'two'
    changeItem(step)
    return
  } else if (step === 'one') {
    showPageAlert()
  }
  step = 'one'
  changeItem(step)
}
const next = document.getElementById('next')
next.onclick = () => {
  if (step === 'one') {
    checkFormItem('pageOne')
    if (flag) {
      step = 'two'
      changeItem(step)
      return
    }
    showPageAlert()
  } else if (step === 'two') {
    checkFormItem('pageTwo')
    if (flag) {
      step = 'three'
      changeItem(step)
      return
    }
  }
  showPageAlert()
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
  checkFormItem('pageOne')
  if (flag) {
    step = 'two'
    changeItem(step)
    return
  }
  showPageAlert()
}
// circle 3
const circleThree = document.getElementById('circleThree')
circleThree.onclick = () => {
  checkFormItem('pageTwo')
  if (flag) {
    if (step === 'one') {
      showPageAlert()
      return
    }
    changeItem('three')
    return
  }
  showPageAlert()
}

function checkFormItem(value) {
  if (value === 'pageOne') {
    const username = document.getElementById('username')
    const userBQ = document.getElementById('userBQ')
    const password = document.getElementById('password')
    const passwordConfirm = document.getElementById('passwordConfirm')
    const companyName = document.getElementById('companyName')

    let formPageOneVal = [
      username,
      userBQ,
      password,
      passwordConfirm,
      companyName
    ]
    formPageOneVal.forEach((item) => {
      if (item.value === '') {
        flag = false
        return flag
      }
      console.log(item)
      flag = true
    })
  } else if (value === 'pageTwo') {
    const email = document.getElementById('email')
    const website = document.getElementById('website')
    const chatWay = document.getElementById('chatWay')
    const chatTitle = document.getElementById('chatTitle')
    const phone = document.getElementById('phone')

    let formPageTwoVal = [email, website, chatWay, chatTitle, phone]

    formPageTwoVal.forEach((item) => {
      if (item.value === '') {
        flag = false
        return flag
      }
      flag = true
    })
  }
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
    step = 'two'
  } else if (value === 'three') {
    roadTwo.classList.replace('step-item-road-blank', 'step-item-road-finish')
    circleThree.classList.replace(
      'step-item-circle-blank',
      'step-item-circle-finish'
    )
    formPageOne.style.display = 'none'
    formPageTwo.style.display = 'none'
    formPageThree.style.display = 'block'
    step = 'three'
  }
}

// 尝试对象解构，但是好像是无用功
// function checkFormItem() {
//   let formPageOneVal = {
//     username: document.getElementById('username').value,
//     userBQ: document.getElementById('userBQ').value,
//     password: document.getElementById('password').value,
//     passwordConfirm: document.getElementById('passwordConfirm').value,
//     companyName: document.getElementById('companyName').value
//   }
//   let {
//     username,
//     userBQ,
//     password,
//     passwordConfirm,
//     companyName
//   } = formPageOneVal
//   if (username || userBQ || password || passwordConfirm || companyName === '') {
//     alert('请填写')
//     return false
//   }
// }
