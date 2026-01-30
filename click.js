let count = 0
let clickPlus = 1

const countText = document.getElementById(`count`)
const button = document.getElementById(`btn`)
const buttom = document.getElementById(`btm`)
const buttoj = document.getElementById(`btj`)
const buttoh = document.getElementById(`bth`)
const buttol = document.getElementById(`btl`)
const buttor = document.getElementById(`btr`)

const savedCount = localStorage.getItem('count')
const savedClickPlus = localStorage.getItem('clickPlus')

if (savedCount !== null) {
    count = Number(savedCount)
}

if (savedClickPlus !== null) {
    clickPlus = Number(savedClickPlus)
}

countText.innerText = count

function saveGame() {
    localStorage.setItem('count', count)
    localStorage.setItem('clickPlus', clickPlus)
}

button.addEventListener(`click`, function () {
    count = count + clickPlus
    countText.innerText = count
    saveGame()
})

buttom.addEventListener(`click`, function() {
    if(count >=200) {
        count -= 200
        clickPlus = 2
        alert(`Ви купили апдейт!`)
    } else {
        alert(`Не достатньо коштів. Треба "200"`)
    }
    countText.innerText = count
    saveGame()
})

buttoj.addEventListener(`click`, function() {
    if(count >=650) {
        count -= 650
        clickPlus = 3
        alert(`Ви купили апдейт!`)
    } else {
        alert(`Не достатньо коштів. Треба "650"`)
    }
    countText.innerText = count
    saveGame()
})

buttoh.addEventListener(`click`, function() {
    if(count >=2000) {
        count -= 2000
        clickPlus = 4
        alert(`Ви купили апдейт!`)
    } else {
        alert(`Не достатньо коштів. Треба "2000"`)
    }
    countText.innerText = count
    saveGame()
})

buttol.addEventListener(`click`, function() {
    if(count >=5000) {
        count -= 5000
        clickPlus = 5
        alert(`Ви купили апдейт!`)
    } else {
        alert(`Не достатньо коштів. Треба "5000"`)
    }
    countText.innerText = count
    saveGame()
})

buttor.addEventListener(`click`, function() {
    if(count >=15000) {
        count -= 15000
        clickPlus = 10
        alert(`Ви купили апдейт!`)
    } else {
        alert(`Не достатньо коштів. Треба "15000"`)
    }
    countText.innerText = count
    saveGame()
})
