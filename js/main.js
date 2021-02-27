function renderInit () {
  document.querySelector('section').innerHTML = renderAgreement()
}

document.addEventListener("DOMContentLoaded", () => {
  renderInit()
})
