export default function findImage (listImage) {
    // const query = "" + destinationInput.value + locationInput.value;
    // const formattedQuery = query.replaceAll(' ', '-')
    const apiKey = "IamxVhyO4gKPFbijEFVv3NQRN7EkQ7T6AngMOVTfBes"
    const makeApiCall = async () => {
        const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${destinationInput.value} ${locationInput.value}&client_id=${apiKey}`)
        const json = await res.json();
        listImage.src = json.results[0].urls.small
    }
    makeApiCall();
}
