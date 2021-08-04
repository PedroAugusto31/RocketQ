const html = document.querySelector("html");
const themeButton = document.querySelector("button.that");
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

themeButton.addEventListener("click", () => {
	themeButton.className.endsWith("-dark")
		? (() => {
				themeButton.classList.remove("-dark");
				changeColor(darkMode);
				imagem.src =
					"https://img.icons8.com/ios-glyphs/24/ffffff/bright-moon--v1.png";
		  })()
		: (() => {
				themeButton.classList.add("-dark");
				changeColor(initialColors);
				imagem.src =
					"https://img.icons8.com/material-rounded/24/ffffff/sun--v1.png";
		  })();
});
