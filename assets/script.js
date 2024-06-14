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

/** Variables **/

const arrowright = document.querySelector(".arrow_right");
const arrowleft = document.querySelector(".arrow_left");

/** Zone img **/

const sliderImg = document.querySelector(".banner-img");
const sliderTag = document.querySelector("#banner p");

/** Dots **/

const dots = document.querySelector(".dots");

/** Position initiale img **/

let index = 0;
const lastImg = slides.length - 1;

/** functions  **/

function main() {
	sliderdots();
	slideleft();
	slideRight();
	slidesMovement();
}

/** script **/

main();

/** Dots slider **/

function sliderdots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected");
		}

	}
}

/** Table for dots **/

const dot = document.querySelectorAll(".dots .dot");

/** Click left **/

function slideleft() {
	arrowleft.addEventListener("click", () => {
		dot[index].classList.remove("dot_selected");
		index--;
		if (index < 0) {
			index = lastImg;
		}
		dot[index].classList.add("dot_selected");
		slidesMovement();
	});
}

/** Click Right **/

function slideRight() {
	arrowright.addEventListener("click", () => {
		dot[index].classList.remove("dot_selected");
		index++;
		if (index > lastImg) {
			index = 0;
		}
		dot[index].classList.add("dot_selected");
		slidesMovement();
	});
}

/** Title and img animation **/

function slidesMovement() {
	sliderImg.src = "./assets/images/slideshow/" + slides[index].image;
	sliderTag.innerHTML = slides[index].tagLine;
}