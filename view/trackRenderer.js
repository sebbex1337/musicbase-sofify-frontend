import { deleteTrackClicked } from "../controller/tracks-controller/deleteTrack.js";
import { updateTrackClicked } from "../controller/tracks-controller/updateTrack.js";
import ItemRenderer from "./itemRenderer.js";

export default class TrackRenderer extends ItemRenderer {
    render() {
        const track = this.item;
        const html = /* html */ `
        <tr>
            <td>${track.name}</td>
            <td>${this.formatArtists(track.artists)}</td>
            <td>${track.duration}</td>
            <td>
                <section>
                    <button class="btn-delete">DELETE</button>
                    <button class="btn-update">UPDATE</button>
                </section>
            </td>
        </tr>
        `;
        return html;
    }
    formatArtists(listOfArtists) {
        let artistsString = "";
        if (listOfArtists.length > 1) {
            for (const artist of listOfArtists) {
                artistsString += `${artist.name}, `;
            }
        } else {
            artistsString = listOfArtists[0].name;
        }
        return artistsString;
    }
    postRender(element) {
        element.querySelector(":last-child .btn-delete").addEventListener("click", () => deleteTrackClicked(this.item));
        element.querySelector(":last-child .btn-update").addEventListener("click", () => updateTrackClicked(this.item));
    }
}
