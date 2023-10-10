import ItemRenderer from "./itemRenderer.js";

export default class TrackRenderer extends ItemRenderer {
    render() {
        const track = this.item;
        const html = /* html */ `
        <tr>
            <td>${track.name}</td>
            <td>${this.formatArtists(track.artists)}</td>
            <td>${track.duration}</td>
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
}
