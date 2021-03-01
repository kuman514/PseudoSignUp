function renderAgreement () {
  return `
    <h1>약관 / Policy</h1>
    <p>
        이 페이지는 구현 연습용 유사 회원가입 홈페이지입니다.<br>
        이 홈페이지에 회원가입이 완료되어도 서버에 어떠한 정보도 저장되지 않습니다.<br>
        각 입력칸이 요구하는 형식에 맞춰 자유롭게 기입하시면 되겠습니다.
    </p>
    <p>
        This page is a pseudo sign-up homepage to practice implementation.<br>
        NONE OF YOUR INFORMATION will be saved here even after successfully finishing signing up.<br>
        Please feel free to fill out each form according to the format required.
    </p>
    <div class="right">
        <input type="checkbox" name="agree">동의합니다. / I agree.<br>
        <button onclick="onClickAgreeNext()">계속하기 / Continue</button>
    </div>
  `
}

function checkAgree () {
  const query = 'input[name="agree"]:checked'
  const selectedEls = document.querySelectorAll(query)
  if (selectedEls.length > 0) {
    return true
  } else {
    return false
  }
}

function onClickAgreeNext () {
  if (checkAgree()) {
    console.log('agreed')
    document.querySelector('section').innerHTML = renderInformation()
  } else {
    console.log('not agreed')
    sendToModal('동의가 필요합니다. / Agreement required.')
    openModal()
  }
}
