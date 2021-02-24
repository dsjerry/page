// 要验证的元素对象
function whoVerify(val) {
  // console.log(typeof val)
  let verifyEle = val
  verifyEle.addEventListener('blur', (e) => {
    let ele = e.target.id
    let val = e.target.value
    let isOk = verifyAgain(ele, val)
    if (isOk == false) {
      showAlert(verifyEle)
      return
    }
    verifyEle.style.border = 'none'
  })
}
// 表单内容验证
function verifyAgain(ele, val) {
  /**
   * ele 元素名
   * val 表单项值
   */
  let regVal
  switch (ele) {
    case 'username':
      regVal = /^\d{8}$/
      break
    case 'password':
      regVal = /^[a-zA-Z\d_]{8,}$/
      break
    case 'userBQ':
      regVal = /^\d{8}$/
      break
    case 'passwordConfirm':
      regVal = /^[a-zA-Z\d_]{8,}$/
      break
    case 'companyName':
      regVal = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
      break
    case 'email':
      regVal = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      break
    case 'website':
      regVal = /((http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?)/
      break
    case 'chatWay':
      regVal = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
      break
    case 'chatTitle':
      regVal = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
      break
    case 'phone':
      regVal = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
      break
  }
  return regVal.test(val)
}
