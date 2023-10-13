import * as RESTAPI from "../http.js";
import { displayUpdatedLists } from "../../app.js";

function showUpdateTrack() {
    const dialog = document.querySelector("#update-track-dialog");
    dialog.showModal();
    document.querySelector("#update-track button").addEventListener("click", () => dialog.close());
}

function updateTrackClicked(track) {
    showUpdateTrack();
    const updateForm = document.querySelector("#update-track");
    updateForm.name.value = track.name;
    updateForm.duration.value = track.duration;
    updateForm.id.value = track.id;
    document.querySelector("#update-track").addEventListener("submit", updateTrack);
}

async function updateTrack(event) {
    event.preventDefault();
    const form = this;
    const track = {
        name: form.name.value,
        id: Number(form.id.value),
        duration: form.duration.value,
    };
    const res = await RESTAPI.updateTrack(track);
    if (res) {
        await displayUpdatedLists();
        document.querySelector("#update-track-dialog").close();
    }
}

export { updateTrackClicked };
