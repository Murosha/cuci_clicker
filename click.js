let count = 0
let clickPlus = 1

const countText = document.getElementById(`count`)
const button = document.getElementById(`btn`)
const buttom = document.getElementById(`btm`)
const buttoj = document.getElementById(`btj`)
const buttoh = document.getElementById(`bth`)
const buttol = document.getElementById(`btl`)
const buttor = document.getElementById(`btr`)
const buttog = document.getElementById(`btg`)
const buttop = document.getElementById(`btp`)
const buttou = document.getElementById(`btu`)

const savedCount = localStorage.getItem('count')
const savedClickPlus = localStorage.getItem('clickPlus')
if (savedClickPlus !== null) {
    clickPlus = Number(savedClickPlus)
}

if (savedCount !== null) {
    count = Number(savedCount)
}

if (savedClickPlus !== null) {
    clickPlus = Number(savedClickPlus)
}

countText.innerText = count
updateButtons()


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
    } else {
        alert(`Не достатньо коштів. Треба "200"`)
    }
    countText.innerText = count
    saveGame()
    updateButtons()
})

buttoj.addEventListener(`click`, function() {
    if(count >=650) {
        count -= 650
        clickPlus = 3
    } else {
        alert(`Не достатньо коштів. Треба "650"`)
    }
    countText.innerText = count
    saveGame()
    updateButtons()
})

buttoh.addEventListener(`click`, function() {
    if(count >=2000) {
        count -= 2000
        clickPlus = 4
    } else {
        alert(`Не достатньо коштів. Треба "2000"`)
    }
    countText.innerText = count
    saveGame()
    updateButtons()
})

buttol.addEventListener(`click`, function() {
    if(count >=5000) {
        count -= 5000
        clickPlus = 5
    } else {
        alert(`Не достатньо коштів. Треба "5000"`)
    }
    countText.innerText = count
    saveGame()
    updateButtons()
})

buttor.addEventListener(`click`, function() {
    if(count >=15000) {
        count -= 15000
        clickPlus = 10
    } else {
        alert(`Не достатньо коштів. Треба "15000"`)
    }
    countText.innerText = count
    saveGame()
    updateButtons()
})

buttog.addEventListener(`click`, function() {
    if(count >=40000) {
        count -= 40000
        clickPlus = 20
    } else {
        alert(`Не достатньо коштів. Треба "40000"`)
    }
    countText.innerText = count
    saveGame()
    updateButtons()
})
buttop.addEventListener(`click`, function() {
    if(count >=100000) {
        count -= 100000
        clickPlus = 50
    } else {
        alert(`Не достатньо коштів. Треба "100000"`)
    }
    countText.innerText = count
    saveGame()
    updateButtons()
})
buttou.addEventListener(`click`, function() {
    if(count >=500000) {
        count -= 500000
        clickPlus = 100
    } else {
        alert(`Не достатньо коштів. Треба "500000"`)
    }
    countText.innerText = count
    saveGame()
    updateButtons()
})


function updateButtons() {
    buttom.style.display = 'none'
    buttoj.style.display = 'none'
    buttoh.style.display = 'none'
    buttol.style.display = 'none'
    buttor.style.display = 'none'
    buttog.style.display = 'none'
    buttop.style.display = 'none'
    buttou.style.display = 'none'

    if (clickPlus === 1) buttom.style.display = 'inline-block'
    if (clickPlus === 2) buttoj.style.display = 'inline-block'
    if (clickPlus === 3) buttoh.style.display = 'inline-block'
    if (clickPlus === 4) buttol.style.display = 'inline-block'
    if (clickPlus === 5) buttor.style.display = 'inline-block'
    if (clickPlus === 10) buttog.style.display = 'inline-block'
    if (clickPlus === 20) buttop.style.display = 'inline-block'
    if (clickPlus === 50) buttou.style.display = 'inline-block'
}

