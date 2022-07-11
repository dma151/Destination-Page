import findImage from "./FindImage.mjs";

const handleSubmit = async () => {

    const imageSrc = await findImage()
    const call = await fetch('http://localhost:3000/new', {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: destinationInput.value,
            location: locationInput.value,
            url: imageSrc,
            description: descriptionInput.value
        })
    })
    const reload = window.location.reload(true);

    destinationInput.value = "";
    locationInput.value = "";
    // photoInput.value = "";
    descriptionInput.value = "";
}

export default handleSubmit

// const list = document.querySelector(".destinationList");
// const listItem = document.createElement("li");

// const listHeader = document.createElement("h3");
// listHeader.classList.add("cardHeader");
// listHeader.innerText = destinationInput.value;

// const listLocation = document.createElement("p");
// listLocation.classList.add("cardLocation");
// listLocation.innerText = locationInput.value;

// const listImage = document.createElement("img");
// listImage.classList.add("cardImage");
// // if (photoInput.value == null || photoInput.value == "") {
// //     listImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7Zbh18J6LSIWj5jjiIUHPgYi2zNbrbqJKg&usqp=CAU"
// // } else {
// //     listImage.src = photoInput.value;
// // }
// findImage(listImage);

// const listDescription = document.createElement("p");
// listDescription.classList.add("cardDescription");
// listDescription.innerText = descriptionInput.value;

// const editButton = document.createElement("button");
// editButton.innerText = "Edit";
// editButton.className = "edit";
// editButton.addEventListener("click", editListItem);

// const seeMoreLink = document.createElement("a");
// seeMoreLink.className = "seeMore";
// seeMoreLink.innerText = "See More";
// seeMoreLink.addEventListener("click", SeeMore)

// const deleteButton = document.createElement("button");
// deleteButton.innerText = "Delete";
// deleteButton.className = "delete";
// deleteButton.addEventListener("click", deleteListItem);

// listItem.appendChild(listImage);
// listItem.appendChild(listHeader);
// listItem.appendChild(listLocation);
// listItem.appendChild(listDescription);
// listItem.appendChild(editButton);
// listItem.appendChild(seeMoreLink);
// listItem.appendChild(deleteButton);
// list.appendChild(listItem)

// destinationInput.value = "";
// locationInput.value = "";
// // photoInput.value = "";
// descriptionInput.value = "";