const BackgroundImage = document.querySelector('.BackgroundImage')
const PercentText = document.querySelector('.PercentText')

let LoadNumber = 0
let Interval = setInterval(BlurEffect, 20)

function BlurEffect() {
    if (LoadNumber < 100) {
        LoadNumber++
        console.log(LoadNumber)

        PercentText.innerText = `${LoadNumber}%`
        PercentText.style.opacity = ScaleBlur(`${LoadNumber}`, 0, 100, 1, 0)
        BackgroundImage.style.opacity = ScaleBlur(`${LoadNumber}`, 0, 100, 0, 1)
    }
}

const ScaleBlur = (num, inMin, inMax, outMin, outMax) => {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}