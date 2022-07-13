export default function editListItem (e) {
    const name = prompt("Enter new name");
    const location = prompt("Enter new location");
    const image = prompt("Enter new photo url");
    const description = prompt("Enter new description");
    let newName;
    let newLocation;
    let newImage;
    let newDescription;
    if (name != "") {
        newName = name
    } else {
        newName = e.target.parentElement.querySelector(".cardHeader").innerText
    }
    if (location != "") {
        newLocation = location
    } else {
        newLocation = e.target.parentElement.querySelector(".cardLocation").innerText
    }
    if (image != "") {
        newImage = image
    } else {
        newImage = e.target.parentElement.querySelector(".cardImage").innerText
    }
    if (description != "") {
        newDescription = description
    } else {
        newDescription = e.target.parentElement.querySelector(".cardImage").innerText
    }

    const selected = e.target.parentElement.getAttribute('id');
    fetch(`http://localhost:3000/edit/${selected}`, {
        method: 'put',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({
            name: newName,
            location: newLocation,
            url: newImage,
            description: newDescription
        })
    })
        .then(response => window.location.reload(true))
        .catch(e => console.error(e))
    // if (name != "") {
    //     e.target.parentElement.querySelector(".cardHeader").innerText = name;
    // }
    // if (location != "") {
    //     e.target.parentElement.querySelector(".cardLocation").innerText = location;
    // }
    // // if (image != "") {
    // //     e.target.parentElement.querySelector(".cardImage").innerText = image;
    // // }
    // if (description != "") {
    //     e.target.parentElement.querySelector(".cardImage").innerText = description;
    // }
}