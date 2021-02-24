// 基础表单验证
const username = document.getElementById('username')
username.addEventListener('input', () => {
  username.setCustomValidity('')
  username.checkValidity()
})
username.addEventListener('invalid', (e) => {
  // console.log(e.target.validity)
  if (username.value === '') {
    username.setCustomValidity('请输入账号！')
  } else if (e.target.validity.tooShort) {
    username.setCustomValidity('账号需要8个数字')
  } else {
    username.setCustomValidity('请输入8个数字')
  }
})
const password = document.getElementById('password')
password.addEventListener('input', () => {
  password.setCustomValidity('')
  password.checkValidity()
})
password.addEventListener('invalid', () => {
  if (password.value === '') {
    password.setCustomValidity('请输入密码！')
  } else {
    password.setCustomValidity('带有非法字符')
  }
})

// 验证码
var code = ''
const canvas = document.getElementById('canvas')
createCode(4)
canvas.addEventListener('click', () => {
  createCode(4)
})
//生成验证码方法
function createCode(length) {
  // console.log(createCode)
  code = ''
  //验证码的长度
  var codeLength = parseInt(length)
  //  生成的验证码内容
  var codeChars = new Array(
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  )
  //循环组成验证码的字符串
  for (var i = 0; i < codeLength; i++) {
    //获取随机验证码下标
    var charNum = Math.floor(Math.random() * 60)

    //组合成指定字符验证码
    code += codeChars[charNum]
  }
  if (code) {
    // var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var img = document.createElement('img')
    img.src = './images/verify.png'
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 90, 40)
      ctx.font = '20px Verdana'
      // 创建一个渐变
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop('0', 'darkorange')
      gradient.addColorStop('0.4', 'blue')
      gradient.addColorStop('0.5', 'darkgreen')
      gradient.addColorStop('0.6', 'orange')
      gradient.addColorStop('0.7', 'darkcyan')
      // 填充一个渐变
      ctx.fillStyle = gradient
      ctx.fillText(code[0], 15, 20 + Math.floor(Math.random() * 6))
      ctx.fillText(code[1], 25, 20 + Math.floor(Math.random() * 6))
      ctx.fillText(code[2], 45, 20 + Math.floor(Math.random() * 6))
      ctx.fillText(code[3], 60, 20 + Math.floor(Math.random() * 6))
    }
  }
}

const verify = document.getElementById('verify')
verify.addEventListener('input', () => {
  verify.setCustomValidity('')
  verify.checkValidity()
})
verify.addEventListener('invalid', (e) => {
  if (verify.value === '') {
    console.log(e.target.validity)
    verify.setCustomValidity('请输入验证码')
  }
})
const login = document.getElementById('login')
login.addEventListener('click', () => {
  let isUsernameOk = verifyAgain('username', username.value)
  let isPasswordOk = verifyAgain('password', password.value)
  console.log(isUsernameOk)
  console.log(isPasswordOk)
  if (isUsernameOk == false || isPasswordOk == false) {
    alert('密码或账号格式错误')
  } else if (verify.value.toUpperCase() != code.toUpperCase()) {
    verify.setCustomValidity('验证码错误')
    createCode(4)
  }
})
const register = document.getElementById('register')
register.onclick = function () {
  const spotlight = document.getElementById('spotlight')
  spotlight.classList.add('spotlight-box-register')
  const main = document.getElementById('main')
  main.classList.add('main-register')
  setInterval(() => {
    window.location.assign('./page/register/register.html')
  }, 900)
}

// username.addEventListener('blur', (e) => {
//   // console.log(typeof e.target.id)
//   // console.log(e.target.value)
//   let ele = e.target.id
//   let val = e.target.value
//   let isOk = verifyAgain(ele, val)
//   console.log(isOk)
//   if (!isOk) {
//     alert('asd')
//   }
// })
