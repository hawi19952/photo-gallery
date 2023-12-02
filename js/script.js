function changeBackground(elm) {
  const imageSrc = elm.src;
  const altText = elm.alt;
  let element = document.getElementById("message");
  element.style.backgroundImage = `url(${imageSrc})`
  element.innerHTML = altText;
}

function resetToDefault() {
  const defaultMessage = "Hover over an image to display the alt text.";
  let element = document.getElementById("message");
  element.style.backgroundImage = "none"
  element.innerHTML = defaultMessage;
}

console.log('hi from script')

