function renderInformation () {
  return `
    
  `
}

function checkPasswordsMatch () {
  const query = 'input[type="password"]'
  const passwords = document.querySelectorAll(query)
  let allSame = true
  for (let i in passwords) {
    if (passwords[i] !== passwords[0]) {
      allSame = false
      break
    }
  }
  return allSame
}

function cryptPassword () {
  
}

function onSubmitSignUp () {
  console.log('onSubmitSignUp')
  return false
}
