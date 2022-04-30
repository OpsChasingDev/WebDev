const SliderContainer = document.querySelector('.SliderContainer')
const SliderLeft = document.querySelector('.SliderLeft')
const SliderRight = document.querySelector('.SliderRight')
const ButtonLeft = document.querySelector('.ButtonLeft')
const ButtonRight = document.querySelector('.ButtonRight')
const SlideNumber = SliderRight.querySelectorAll('div').length

let ActiveSlideIndex = 0

SliderLeft.style.top = `-${(SlideNumber - 1) * 100}vh`