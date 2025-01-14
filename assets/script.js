const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const BASE_PATH = "./assets/images/slideshow/";

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const sliderImg = document.querySelector(".banner-img");
const sliderTag = document.querySelector("#banner p");
const dots = document.querySelector(".dots");


let index = 0;



/** Dots slider **/

function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == 0) {
			dot.classList.add("dot_selected");
		}

	}
}

createDots();

/** Table for dots **/

const dotTab = document.querySelectorAll(".dots .dot");

/** Click left **/

function init() {
	arrowLeft.addEventListener("click", () => {
		dotTab[index].classList.remove("dot_selected");
		index = (index - 1 + slides.length) % slides.length;
		dotTab[index].classList.add("dot_selected");
		updateSlide();
	});

	arrowRight.addEventListener("click", () => {
		dotTab[index].classList.remove("dot_selected");
		index = (index + 1) % slides.length;
		dotTab[index].classList.add("dot_selected");
		updateSlide();
	});

}

// Add click event for dots
dotTab.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		dotTab[index].classList.remove("dot_selected");
		index = i;
		dotTab[index].classList.add("dot_selected");
		updateSlide();
	});
});

/** Title and img animation **/

function updateSlide() {
	sliderImg.src = BASE_PATH + slides[index].image;
	sliderTag.innerHTML = slides[index].tagLine;
}

updateSlide();
init()