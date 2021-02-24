let alertMsg = {
  username: '登记号长度为8',
  userBQ: '管理员BQ长度为8',
  password: '密码长度为8',
  passwordConfirm: '密码长度为8',
  companyName: '公司名格式错误',
  email: '邮箱格式错误',
  website: '网站格式错误',
  chatWay: '洽谈方式格式错误',
  chatTitle: '洽谈标题格式问题',
  other: '请先完成表单'
}
// ？？？在这里声明 please 没用，为什么？

// 展示提示框
function showAlert(verifyEle) {
  let ele = verifyEle
  let eleID = verifyEle.id
  let showAlertMsg
  switch (eleID) {
    case 'username':
      showAlertMsg = alertMsg.username
      break
    case 'password':
      showAlertMsg = alertMsg.password
      break
    case 'userBQ':
      showAlertMsg = alertMsg.userBQ
      break
    case 'passwordConfirm':
      showAlertMsg = alertMsg.passwordConfirm
      break
    case 'companyName':
      showAlertMsg = alertMsg.companyName
      break
    case 'email':
      showAlertMsg = alertMsg.email
      break
    case 'website':
      showAlertMsg = alertMsg.website
      break
    case 'chatWay':
      showAlertMsg = alertMsg.chatWay
      break
    case 'chatTitle':
      showAlertMsg = alertMsg.chatTitle
      break
    case 'phone':
      showAlertMsg = alertMsg.phone
      break
  }
  var please = document.getElementById('please')
  please.classList.add('please-appear')
  please.textContent = showAlertMsg
  ele.style.border = '1px solid red'
  setTimeout(() => {
    please.classList.replace('please-appear', 'please')
  }, 1500)
}
// 页面空白提示
function showPageAlert() {
  please.classList.add('please-appear')
  setTimeout(() => {
    please.classList.replace('please-appear', 'please')
  }, 1500)
}
