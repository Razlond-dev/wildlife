let position = 0
const slidesToShow = 3
const slidesToScroll = 1

const sliderContainer = document.querySelector('.latest-articles__slider-container')
const sliderTrack = document.querySelector('.latest-articles__slider-track')
const nextBtn = document.querySelector('.latest-articles__slider-right-arrow')
const prevBtn = document.querySelector('.latest-articles__slider-left-arrow')
const marginLeft = 60
const itemWidth = (sliderContainer.clientWidth - (marginLeft * (slidesToShow - 1))) / slidesToShow + marginLeft
const items = document.querySelectorAll('.latest-articles__slider-item')
const itemsCount = items.length
const movePosition = slidesToScroll * itemWidth


nextBtn.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth

  setPosition()
  checkBtns()
})

prevBtn.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth

  setPosition()
  checkBtns()
})

const setPosition = () => {
  sliderTrack.style.transform = `translateX(${position}px)`
}

const checkBtns = () => {
  prevBtn.disabled = position === 0
  nextBtn.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
}

checkBtns()
