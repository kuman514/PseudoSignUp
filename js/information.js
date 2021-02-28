function renderInformation () {
  return `
    
  `
}

function checkPasswordsMatch () {
  const query = 'input[type="password"]'
  const passwords = document.querySelectorAll(query)

  if (passwords[0].value !== passwords[1].value) {
    return false
  }

  return true
}

function cryptPassword () {
  const query = 'input[name="cryptpass"]'
  const query2 = 'input[type="password"]'
  const password = document.querySelector(query2)
  const cryptpass = document.querySelector(query)
  cryptpass.value = SHA256(password.value)
}

function erasePassword () {
  const query = 'input[type="password"]'
  const passwords = Array.from(document.querySelectorAll(query))

  passwords.map(item => {
    item.value = ''
  })
}

function onSubmitSignUp () {
  console.log("onSubmitSignUp")
  if (!checkPasswordsMatch()) {
    return false
  } else {
    cryptPassword()
    erasePassword()
  }

  return true
}
