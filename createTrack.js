import { createTrack } from "./controller/http.js";
import { displayUpdatedLists } from "./app.js";

function showCreateTrack() {
    const dialog = document.querySelector("#create-track-dialog");
    dialog.showModal();
    document.querySelector("#create-track-form").addEventListener("submit", createTrackClicked);
    document.querySelector("#create-track-form button").addEventListener("click", () => dialog.close());
}

async function createTrackClicked(event) {
    event.preventDefault();
    const form = this;
    console.log(form.name.value);
    const track = {
        name: form.name.value,
        artists: form.artist.value,
        duration: form.duration.value,
    };
    const response = await createTrack(track);
    if (response.ok) {
        await displayUpdatedLists();
    }
}

export { showCreateTrack };
