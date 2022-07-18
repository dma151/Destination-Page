import handleSubmit from "./modules/AddToList.mjs"
import weather from "./modules/Weather.mjs"
import editListItem from "./modules/EditListItem.mjs"
import deleteListItem from "./modules/DeleteListItem.mjs"
import SeeMore from './modules/SeeMore.mjs'

form.addEventListener("submit", handleSubmit);
weather();

const getDestinations = async () => {
    const res = await fetch('https://vacation-destination-api.herokuapp.com/')
    const json = await res.json();
    let destinationsArray = json.data
    destinationsArray.map(destination => {
        const list = document.querySelector(".destinationList");
        const listItem = document.createElement("li");
        listItem.setAttribute('id', destination._id)
    
        const listHeader = document.createElement("h3");
        listHeader.classList.add("cardHeader");
        listHeader.innerText = destination.name;
    
        const listLocation = document.createElement("p");
        listLocation.classList.add("cardLocation");
        listLocation.innerText = destination.location;
    
        const listImage = document.createElement("img");
        listImage.classList.add("cardImage");
        listImage.src = destination.url
    
        const listDescription = document.createElement("p");
        listDescription.classList.add("cardDescription");
        listDescription.innerText = destination.description;
    
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.className = "edit";
        editButton.addEventListener("click", editListItem);
    
        const seeMoreLink = document.createElement("a");
        seeMoreLink.className = "seeMore";
        seeMoreLink.innerText = "See More";
        seeMoreLink.addEventListener("click", SeeMore)
    
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";
        deleteButton.addEventListener("click", deleteListItem);
        listItem.appendChild(listImage);
        listItem.appendChild(listHeader);
        listItem.appendChild(listLocation);
        listItem.appendChild(listDescription);
        listItem.appendChild(editButton);
        listItem.appendChild(seeMoreLink);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem)
    })
}

getDestinations();
// These were turned into global variables

// const form = document.querySelector("#user");
// const destinationInput = document.getElementById("destination");
// const locationInput = document.getElementById("location");
// const photoInput = document.getElementById("photo");
// const descriptionInput = document.getElementById("description");

// Old code before modularizing

// function addToList () {
//     const list = document.querySelector("ul");
//     const listItem = document.createElement("li");

//     const listHeader = document.createElement("h3");
//     listHeader.classList.add("cardHeader");
//     listHeader.innerText = destinationInput.value;

//     const listLocation = document.createElement("p");
//     listLocation.classList.add("cardLocation");
//     listLocation.innerText = locationInput.value;

//     const listImage = document.createElement("img");
//     listImage.classList.add("cardImage");
//     if (photoInput.value == null || photoInput.value == "") {
//         listImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7Zbh18J6LSIWj5jjiIUHPgYi2zNbrbqJKg&usqp=CAU"
//     } else {
//         listImage.src = photoInput.value;
//     }

//     const listDescription = document.createElement("p");
//     listDescription.classList.add("cardDescription");
//     listDescription.innerText = descriptionInput.value;

//     const editButton = document.createElement("button");
//     editButton.innerText = "Edit";
//     editButton.className = "edit";
//     editButton.addEventListener("click", editListItem);

//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";
//     deleteButton.className = "delete";
//     deleteButton.addEventListener("click", deleteListItem);

//     listItem.appendChild(listImage);
//     listItem.appendChild(listHeader);
//     listItem.appendChild(listLocation);
//     listItem.appendChild(listDescription);
//     listItem.appendChild(editButton);
//     listItem.appendChild(deleteButton);
//     list.appendChild(listItem)

//     destinationInput.value = "";
//     locationInput.value = "";
//     photoInput.value = "";
//     descriptionInput.value = "";
// }

// function editListItem (e) {
//     const name = prompt("Enter new name");
//     const location = prompt("Enter new location");
//     const image = prompt("Enter new photo url");
//     const description = prompt("Enter new description");

//     if (name != null || name != "") {
//         e.target.parentElement.querySelector(".cardHeader").innerText = name;
//     }
//     if (location != null || location != "") {
//         e.target.parentElement.querySelector(".cardLocation").innerText = location;
//     }
//     if (image != null || image != "") {
//         e.target.parentElement.querySelector(".cardImage").innerText = image;
//     }
//     if (description != null || description != "") {
//         e.target.parentElement.querySelector(".cardImage").innerText = description;
//     }
// }

// function deleteListItem (e) {
//     e.target.parentElement.remove();
// }