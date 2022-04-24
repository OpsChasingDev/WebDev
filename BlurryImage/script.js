const BackgroundImage = document.querySelector('.BackgroundImage')
const PercentText = document.querySelector('.PercentText')

let LoadNumber = 0
let Interval = setInterval(BlurEffect, 20)

function BlurEffect() {
    if (LoadNumber < 100) {
        LoadNumber++
        console.log(LoadNumber)

        PercentText.innerText = `${LoadNumber}%`
        PercentText.style.opacity = .5
    }
}