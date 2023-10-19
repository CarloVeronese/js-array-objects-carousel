const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

const carouselDOMElement = document.querySelector('.carousel-main')
const thumbnailDOMElement = document.querySelector('.carousel-thumbnail')

addImagesToCarousel()

const scrollUpDOMElement = document.querySelector('.scroll-up')

const scrollDownDOMElement = document.querySelector('.scroll-down')

let activeImage = 0

scrollDownDOMElement.addEventListener('click', scrollDown)

scrollUpDOMElement.addEventListener('click', scrollUp)


function addImagesToCarousel(){
    addScroll()
    for(let i = 0; i < images.length; i++){
        const currentImage = images[i]
        let activeClass = ''
        if(i == 0) activeClass = 'active'
        const currentImageContent = `
        <div class="carousel-main-content ${activeClass}">
            <img src="./${currentImage.image}" alt="" class="carousel-img">
            <div class="carousel-text">
                <h3>${currentImage.title}</h3>
                <p>${currentImage.text}.</p>
            </div>
        </div>
        `
        carouselDOMElement.innerHTML += currentImageContent
        const currentThumbnailImmage = `
        <img src="./${currentImage.image}" alt="" class="thumbnail-img ${activeClass}">
        `
        thumbnailDOMElement.innerHTML += currentThumbnailImmage
    }
}

function addScroll(){
    const scrollUpElement = `<i class="fa-solid fa-chevron-up scroll-up"></i>`
    const scrollDownElement = `<i class="fa-solid fa-chevron-down scroll-down"></i>`
    thumbnailDOMElement.innerHTML += scrollDownElement + scrollUpElement
}

function scrollDown(){
    const carouselMainDOMElements = document.querySelectorAll('.carousel-main-content')
    const thumbnailImagesDOMElement = document.querySelectorAll('.thumbnail-img')
    carouselMainDOMElements[activeImage].classList.remove('active')
    thumbnailImagesDOMElement[activeImage].classList.remove('active')
    if(activeImage == (carouselMainDOMElements.length - 1)) activeImage = -1
    carouselMainDOMElements[activeImage + 1].classList.add('active')
    thumbnailImagesDOMElement[activeImage + 1].classList.add('active')
    activeImage++
}

function scrollUp(){
    const carouselMainDOMElements = document.querySelectorAll('.carousel-main-content')
    const thumbnailImagesDOMElement = document.querySelectorAll('.thumbnail-img')
    carouselMainDOMElements[activeImage].classList.remove('active')
    thumbnailImagesDOMElement[activeImage].classList.remove('active')
    if(activeImage == 0) activeImage = carouselMainDOMElements.length
    carouselMainDOMElements[activeImage - 1].classList.add('active')
    thumbnailImagesDOMElement[activeImage - 1].classList.add('active')
    activeImage--
}