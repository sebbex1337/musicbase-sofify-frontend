import { createAlbum } from "../http.js";
import { displayUpdatedLists } from "../../app.js";
import { readAllArtists } from "../http.js";

async function showCreateAlbum() {
    const dialog = document.querySelector("#create-album-dialog");
    const artists = await readAllArtists();
    for (const artist of artists) {
        document.querySelector("#album-create-select").insertAdjacentHTML("beforeend", /* html */ `<option value="${artist.id}">${artist.name}</option>`);
    }
    dialog.showModal();
    document.querySelector("#create-album").addEventListener("submit", createAlbumClicked);
    document.querySelector("#create-album button").addEventListener("click", () => dialog.close());
}

async function createAlbumClicked(event) {
    event.preventDefault();
    const form = this;
    const album = {
        name: form.title.value,
        releaseDate: form.date.value,
        image: form.image.value,
        artistId: Number(form.artists.value),
    };
    console.log(album);
    const response = await createAlbum(album);
    if (response) {
        await displayUpdatedLists();
    }
}

export { showCreateAlbum };
