function renderInformation () {
  return `
  <form action="complete.html" method="post" onsubmit="return onSubmitSignUp()">
    <h1>회원 가입 / Sign Up</h1>
    <div>
        <h2>아이디 / ID</h2>
        <input type="text" name="id" minlength="6" maxlength="16" required></input>
    </div>
    <div>
        <h2>비밀번호 / Password</h2>
        <input type="password" name="password" minlength="8" maxlength="24" required></input>
        <h2>비밀번호 확인 / Confirm Password</h2>
        <input type="password" name="confirm-password" minlength="8" maxlength="24" required></input>
        <input type="hidden" name="cryptpass"></input>
    </div>
    <div>
        <h2>닉네임 / Nickname</h2>
        <input type="text" name="nickname" maxlength="16" required></input>
    </div>
    <div>
        <h2>성명 / Real Name</h2>
        <input type="text" name="realname"></input>
    </div>
    <div>
        <h2>성별 / Gender</h2>
        <input type="text" name="gender"></input>
    </div>
    <div>
        <h2>관심사 / Favorite</h2>
        <input type="text" name="favorite"></input>
    </div>
    <div class="right">
        <input type="submit" value="가입 확정 / Confirm Registration"></input>
    </div>
  </form>
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
