export default function deleteListItem (e) {
    const selected = e.target.parentElement.getAttribute('id')
    console.log(selected);
    fetch(`https://vacation-destination-api.herokuapp.com/remove/${selected}`, {
        method: 'delete'
    })
        .then(response => window.location.reload(true))
        .catch(e => console.error(e))
}