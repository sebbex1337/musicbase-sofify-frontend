import { createArtist } from "./controller/http.js";
import { displayUpatedLists } from "./app.js";

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
    await createArtist(artist);

    displayUpatedLists();
}

export { showCreateArtist };
