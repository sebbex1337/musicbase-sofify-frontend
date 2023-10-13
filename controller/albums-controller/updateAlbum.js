import * as RESTAPI from "../http.js";
import { displayUpdatedLists } from "../../app.js";

function showUpdateAlbum() {
    const dialog = document.querySelector("#update-album-dialog");
    dialog.showModal();
    document.querySelector("#update-album button").addEventListener("click", () => dialog.close());
}

function updateAlbumClicked(album) {
    showUpdateAlbum();
    console.log(album);
    const updateForm = document.querySelector("#update-album");
    updateForm.name.value = album.name;
    updateForm.image.value = album.image;
    updateForm.id.value = album.id;
    updateForm.date.value = album.releaseDate;
    document.querySelector("#update-album").addEventListener("submit", updateAlbum);
}

async function updateAlbum(event) {
    event.preventDefault();
    const form = this;
    const album = {
        name: form.name.value,
        id: Number(form.id.value),
        image: form.image.value,
        releaseDate: form.date.value,
    };
    const res = await RESTAPI.updateAlbum(album);
    console.log(res);
    if (res) {
        await displayUpdatedLists();
        document.querySelector("#update-album-dialog").close();
    }
}

export { updateAlbumClicked };
