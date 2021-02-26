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
  } else {
    console.log('not agreed')
  }
}