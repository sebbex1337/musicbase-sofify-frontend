import { deleteAlbum } from "../http.js";
import { displayUpdatedLists } from "../../app.js";

async function deleteAlbumClicked(album) {
    console.log(album);
    const response = await deleteAlbum(album);
    if (response) {
        await displayUpdatedLists();
    }
}

export { deleteAlbumClicked };