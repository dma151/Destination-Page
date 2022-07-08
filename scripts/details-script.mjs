const currentHeader = localStorage.getItem("currentName")
const currentLocation = localStorage.getItem("currentLocation")
const currentPhoto = localStorage.getItem("currentPhoto")
const currentDescription = localStorage.getItem("currentDescription")

const div = document.createElement("div")
div.className = "currentDetails"

const image = document.createElement("img")
image.className = "photo"
image.src = currentPhoto;

const destinationName = document.createElement("h2")
destinationName.className = "title"
destinationName.innerText = currentHeader;

const destinationLocation = document.createElement("h3")
destinationLocation.className = "location";
destinationLocation.innerText = currentLocation;

const destinationDescription = document.createElement("h3")
destinationDescription.className = "description";
destinationDescription.innerText = currentDescription;

div.appendChild(image)
div.appendChild(destinationName)
div.appendChild(destinationLocation)
div.appendChild(destinationDescription)
document.querySelector("body").appendChild(div);