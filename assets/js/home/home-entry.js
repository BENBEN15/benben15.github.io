import TypeIt from "typeit";
import $ from 'jquery'

// Words
const WordArray = [
    "Web",
    "Back-end",
    "Front-end",
    "Reactjs",
    ".NET"
];

// Typing time, the lower the faster
const typeSpeed = 150;
// Time between each word
const delay = 5000;

// Check if the element exists before executing TypeIt animation
const animatedKeywordElement = document.querySelector("#animated-keyword");

if (animatedKeywordElement) {
    // Loop on animated-keyword span
    const typer = new TypeIt("#animated-keyword", {
        speed: typeSpeed,
        loop: true,
    });

    // Type each word then delete
    WordArray.forEach((item, i) => {
        typer.type(item, { delay: delay }).delete(item.length);
    });

    // Launch animation
    typer.go();
}

//Button scroll down
$("#scroll-to-main").click(function (){
    const element = document.getElementById('qui-suis-je')
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    })
})