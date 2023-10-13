import { deleteTrack } from "../http.js";
import { displayUpdatedLists } from "../../app.js";

async function deleteTrackClicked(track) {
    console.log(track);
    const response = await deleteTrack(track);
    if (response) {
        await displayUpdatedLists();
    }
}

export { deleteTrackClicked };
