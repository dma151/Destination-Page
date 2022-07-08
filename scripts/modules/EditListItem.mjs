export default function editListItem (e) {
    const name = prompt("Enter new name");
    const location = prompt("Enter new location");
    const image = prompt("Enter new photo url");
    const description = prompt("Enter new description");

    if (name != "") {
        e.target.parentElement.querySelector(".cardHeader").innerText = name;
    }
    if (location != "") {
        e.target.parentElement.querySelector(".cardLocation").innerText = location;
    }
    // if (image != "") {
    //     e.target.parentElement.querySelector(".cardImage").innerText = image;
    // }
    if (description != "") {
        e.target.parentElement.querySelector(".cardImage").innerText = description;
    }
}