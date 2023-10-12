import { updateArtist } from "./controller/http.js";
import { displayUpdatedLists } from "./app.js";

function showUpdateArtist() {
    const dialog = document.querySelector("#update-artist-dialog");
    dialog.showModal();
    document.querySelector("#update-artist button").addEventListener("click", () => dialog.close());
}

function updateClicked(artist) {
    showUpdateArtist();
    const updateForm = document.querySelector("#update-artist");
    updateForm.name.value = artist.name;
    updateForm.image.value = artist.image;
    updateForm.website.value = artist.website;
    updateForm.id.value = artist.id;
    document.querySelector("#update-artist").addEventListener("submit", updateArtistClicked);
}

async function updateArtistClicked(event) {
    event.preventDefault();
    const form = this;
    const artist = {
        name: form.name.value,
        id: Number(form.id.value),
        image: form.image.value,
        website: form.website.value,
    };
    const res = await updateArtist(artist);
    console.log(res);
    if (res) {
        await displayUpdatedLists();
        document.querySelector("#update-artist-dialog").close();
    }
}

export { updateClicked };
