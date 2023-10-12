import { createTrack } from "../http.js";
import { displayUpdatedLists } from "../../app.js";
import { readAllArtists } from "../http.js";

async function showCreateTrack() {
    const dialog = document.querySelector("#create-track-dialog");
    dialog.showModal();
    const artists = await readAllArtists();
    for (const artist of artists) {
        document.querySelector("#track-create-select").insertAdjacentHTML("beforeend", /* html */ `<option value="${artist.id}">${artist.name}</option>`);
    }
    document.querySelector("#track-create-select").insertAdjacentHTML("beforeend", () => artistLists.renderSelectOption());
    document.querySelector("#create-track-form").addEventListener("submit", createTrackClicked);
    document.querySelector("#create-track-form button").addEventListener("click", () => dialog.close());
}

async function createTrackClicked(event) {
    event.preventDefault();
    const form = this;
    const track = {
        name: form.name.value,
        artistId: Number(form.artists.value),
        duration: form.duration.value,
    };
    const response = await createTrack(track);
    if (response) {
        console.log("Hej?");
        await displayUpdatedLists();
        form.reset();
        document.querySelector("#create-track-dialog").close();
    }
}

export { showCreateTrack };
