export default function SeeMore (e) {
    localStorage.setItem('currentName', e.target.parentElement.querySelector(".cardHeader").innerText)
    localStorage.setItem('currentLocation', e.target.parentElement.querySelector(".cardLocation").innerText)
    localStorage.setItem('currentPhoto', e.target.parentElement.querySelector(".cardImage").getAttribute("src"))
    localStorage.setItem('currentDescription', e.target.parentElement.querySelector(".cardDescription").innerText)
    window.open("http://127.0.0.1:5500/DestinationPage/layout/detailsPage.html", "_blank")
}