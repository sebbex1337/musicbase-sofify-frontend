//-------Delete--------//
import { deleteArtist } from "../http.js";
import { displayUpdatedLists } from "../../app.js";

async function deleteArtistClicked(artist) {
    console.log(artist);
    const response = await deleteArtist(artist);
    if (response.ok) {
        await displayUpdatedLists();
    }
}

export { deleteArtistClicked };
