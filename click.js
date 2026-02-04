// змінні
let count = 0
let clickPlus = 1
let incomePerSecond = 0
let autoClickBun = 0

// DOM 
const countText = document.getElementById('count')
const button = document.getElementById('btn')
const clickAudio = document.getElementById('audio')
const clickAudioUpdate = document.getElementById('audio5')

const buttom = document.getElementById('btm')
const buttoj = document.getElementById('btj')
const buttoh = document.getElementById('bth')
const buttol = document.getElementById('btl')
const buttor = document.getElementById('btr')
const buttog = document.getElementById('btg')
const buttop = document.getElementById('btp')
const buttou = document.getElementById('btu')

const auto = document.getElementById('auto1')
const incomeText = document.getElementById('income')

// збереження
const savedCount = localStorage.getItem('count')
const savedClickPlus = localStorage.getItem('clickPlus')
const savedIncome = localStorage.getItem('incomePerSecond')

if (savedCount !== null) count = Number(savedCount)
if (savedClickPlus !== null) clickPlus = Number(savedClickPlus)
if (savedIncome !== null) incomePerSecond = Number(savedIncome)

// відображення
countText.innerText = count
updateButtons()
updateIncome()

// збереження 
function saveGame() {
    localStorage.setItem('count', count)
    localStorage.setItem('clickPlus', clickPlus)
    localStorage.setItem('incomePerSecond', incomePerSecond)
}

// клацалка
button.addEventListener('click', () => {
    clickAudio.currentTime = 0
    clickAudio.play()
    count += clickPlus
    countText.innerText = count
    saveGame()
    btn.onclick = () => {
    if(autoClickBun >= 8) {
        return
    }
}
})

// апгрейд кліку
function bgg(bye, pri) {
    if (count >= bye) {
        clickAudioUpdate.currentTime = 0
        clickAudioUpdate.play()
    count -= bye
    clickPlus = pri
    updateButtons()
    }
    else {
        alert(`Не достатньо коштів. Треба "${bye}"`)
    }
    countText.innerText = count
        saveGame()
}

buttom.onclick = () => bgg(200, 2)
buttoj.onclick = () => bgg(650, 3)
buttoh.onclick = () => bgg(2000, 4)
buttol.onclick = () => bgg(5000, 5)
buttor.onclick = () => bgg(15000, 10)
buttog.onclick = () => bgg(40000, 20)
buttop.onclick = () => bgg(100000, 50)
buttou.onclick = () => bgg(500000, 100)

// авто дохід
auto.addEventListener('click', () => {
    if (count >= 200) {
        clickAudioUpdate.currentTime = 0
        clickAudioUpdate.play()
        count -= 200
        incomePerSecond += 1
        countText.innerText = count
        updateIncome()
        saveGame()
    } else {
        alert('Не достатньо коштів. Треба "200"')
    }
})

// оновлення тексту
function updateIncome() {
    incomeText.innerText = `+${incomePerSecond} / сек`
}

// кнопочки
function updateButtons() {
    const buttons = [buttom, buttoj, buttoh, buttol, buttor, buttog, buttop, buttou]
    buttons.forEach(b => b.style.display = 'none')

    if (clickPlus === 1) buttom.style.display = 'inline-block'
    if (clickPlus === 2) buttoj.style.display = 'inline-block'
    if (clickPlus === 3) buttoh.style.display = 'inline-block'
    if (clickPlus === 4) buttol.style.display = 'inline-block'
    if (clickPlus === 5) buttor.style.display = 'inline-block'
    if (clickPlus === 10) buttog.style.display = 'inline-block'
    if (clickPlus === 20) buttop.style.display = 'inline-block'
    if (clickPlus === 50) buttou.style.display = 'inline-block'
}
setInterval(() => {
    autoClickBun = 0
}, 1000)


// авто прибуток
setInterval(() => {
    count += incomePerSecond
    countText.innerText = count
    saveGame()
}, 1000)


