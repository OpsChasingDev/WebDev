const BackgroundImage = document.querySelector('.BackgroundImage')
const PercentText = document.querySelector('.PercentText')

let LoadNumber = 0
let Interval = setInterval(BlurEffect, 30)

function BlurEffect() {
    if (LoadNumber < 100) {
        LoadNumber++
        console.log(LoadNumber)

        PercentText.innerText = `${LoadNumber}%`
        PercentText.style.opacity = ScaleBlur(LoadNumber, 0, 100, 1, 0)
        // BackgroundImage.style.opacity = ScaleBlur(`${LoadNumber}`, 0, 100, .2, 1)
        BackgroundImage.style.filter = `blur(${ScaleBlur(LoadNumber, 0, 100, 30, 0)}px)`
    }
}

const ScaleBlur = (num, inMin, inMax, outMin, outMax) => {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}