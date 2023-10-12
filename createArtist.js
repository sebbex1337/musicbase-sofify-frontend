import { createArtist } from "./controller/http.js";
import { displayUpdatedLists } from "./app.js";

function showCreateArtist() {
    const dialog = document.querySelector("#create-artist-dialog");
    dialog.showModal();
    document.querySelector("#create-artist").addEventListener("submit", createArtistClicked);
    document.querySelector("#create-artist button").addEventListener("click", () => dialog.close());
}

async function createArtistClicked(event) {
    event.preventDefault();
    const form = this;
    const artist = {
        name: form.name.value,
        image: form.image.value,
        website: form.website.value,
    };
    const response = await createArtist(artist);
    if (response) {
        await displayUpdatedLists();
    }
    document.querySelector("#create-artist-dialog").close();
}

export { showCreateArtist };
