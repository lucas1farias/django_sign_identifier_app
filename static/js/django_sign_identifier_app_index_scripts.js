

document.body.style.border = '#222 solid 1px'

function rgb() {
  const inks = [...Array(256).keys()]

  let red = Math.floor(Math.random() * inks.length)
  let green = Math.floor(Math.random() * inks.length)
  let blue =Math.floor(Math.random() * inks.length)

  return `rgba(${inks[red]},${inks[green]},${inks[blue]})`
}

function addNewResourcesToMainForm() {
    // Dando um atrib. "id" para a tag d formulário
    formEl.setAttribute('id', 'algorithm-form')

    // Pegando o primeiro input do formulário e add recursos que não sei fazer pelo Django
    formOnlyInput.setAttribute('placeholder', 'Digite seu aniversário no formato (dd/mm/yyyy)')
    formOnlyInput.setAttribute('size', '50')
}

function blinkingBoxShadow({delay}) {
  let seconds = new Date().getSeconds()
  let secondIsDivisibleBy5 = seconds % delay === 0
  if (secondIsDivisibleBy5) {
    // Mudando a sombra atrás das duas seções
    firstSectionEl.style.boxShadow = `0 0 10px ${rgb()}`
    secondSectionEl.style.boxShadow = `0 0 10px ${rgb()}`
  }
}

function assignSignToImg({djangoContextVar}) {

  if (djangoContextVar.textContent != '') {
    signs.forEach(function(value, i) {
      if (djangoContextVar.textContent === signs[i]) {
        signImgEl.setAttribute('src', `${signsImg[i]}`)
      }
    })
  }
}

let signs = [
  'Capricórnio', 'Aquário', 'Peixes', 'Aries', 'Touro', 'Gêmeos',
  'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário'
]

let signsImg = [
    '../../static/img/signs/capricorn.gif',
    '../../static/img/signs/aquarius.gif',
    '../../static/img/signs/pisces.gif',
    '../../static/img/signs/aries.gif',
    '../../static/img/signs/taurus.gif',
    '../../static/img/signs/gemini.gif',
    '../../static/img/signs/cancer.gif',
    '../../static/img/signs/leo.gif',
    '../../static/img/signs/virgo.gif',
    '../../static/img/signs/libra.gif',
    '../../static/img/signs/scorpio.gif',
    '../../static/img/signs/sagittarius.gif'
]

// Elementos
let formEl = document.querySelector('form')
let formOnlyInput = document.getElementById('id_birthday')
let firstSectionEl = document.querySelector('.mother-el-section-1st')
let secondSectionEl = document.querySelector('.mother-el-section-2nd')
let signEl = document.getElementById('sign')
let signImgEl = document.getElementById('sign-img')

// Dar um "id" ou formulário, add informação instrutiva ou input e aumentar sua largura
addNewResourcesToMainForm()

setInterval(() => {
  // Miscelânia
  blinkingBoxShadow({delay: 5})
  // Trocar a imagem de acordo com o texto enviado p/ a tag <td id="sign"> em "index.html"
  assignSignToImg({djangoContextVar: signEl})
})
