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


function initiate() {
  resetToDefault();
  console.log("Page has loaded fully");
  setAccessAttributesToImages();
}

function setAccessAttributesToImages() {
  const imageElements = document.getElementsByClassName("preview");
  for (let i = 0; i < imageElements.length; i++) {
    imageElements[i].setAttribute("tabindex", "0")
    imageElements[i].setAttribute("onmouseover", "changeBackground(this)")
    imageElements[i].setAttribute("onfocus", "changeBackground(this)")
    imageElements[i].setAttribute("onblur", "resetToDefault()")
    imageElements[i].setAttribute("onmouseleave", "resetToDefault()")
  }
}