const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
  window.getComputedStyle(element).getPropertyValue(style);


const initialColors = {
  background: getStyle(html, "--background"),
  black: getStyle(html, "--black"),
  white: getStyle(html, "--white")
 
}
const darkMode = {
  background: "#0d114f",
  black: "#fafafa",
  white: " #0d114f",


}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColor = (color) => {
  Object.keys(color).map(key =>
    html.style.setProperty(transformKey(key), color[key])
    )
};

checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColor(darkMode) : changeColor(initialColors);
})
