export default function editListItem (e) {
    const name = prompt("Enter new name");
    const location = prompt("Enter new location");
    const description = prompt("Enter new description");
    let newName;
    let newLocation;
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
    if (description != "") {
        newDescription = description
    } else {
        newDescription = e.target.parentElement.querySelector(".cardDescription").innerText
    }

    const selected = e.target.parentElement.getAttribute('id');
    fetch(`http://localhost:3000/edit/${selected}`, {
        method: 'put',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({
            name: newName,
            location: newLocation,
            url: e.target.parentElement.querySelector(".cardImage").innerTexte,
            description: newDescription
        })
    })
        .then(response => window.location.reload(true))
        .catch(e => console.error(e))
}