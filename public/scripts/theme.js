const html = document.querySelector("html");
const button = document.querySelector("button.that");
const imagem = document.querySelector("button.that img");

const getStyle = (element, style) =>
	window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
	background: getStyle(html, "--background"),
	black: getStyle(html, "--black"),
	white: getStyle(html, "--white"),
};
const darkMode = {
	background: "#0d114f",
	black: "#fafafa",
	white: " #0d114f",
};

const transformKey = (key) =>
	"--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColor = (color) => {
	Object.keys(color).map((key) =>
		html.style.setProperty(transformKey(key), color[key])
	);
};

button.addEventListener("click", () => {
	button.className.endsWith("-lul")
		? (() => {
				button.classList.remove("-lul");
				changeColor(darkMode);
				imagem.src =
					"https://img.icons8.com/ios-glyphs/24/ffffff/bright-moon--v1.png";
		  })()
		: (() => {
				button.classList.add("-lul");
				changeColor(initialColors);
				imagem.src =
					"https://img.icons8.com/material-rounded/24/ffffff/sun--v1.png";
		  })();
});
