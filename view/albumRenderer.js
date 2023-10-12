import itemRenderer from "./itemRenderer.js";

export default class AlbumRenderer extends itemRenderer {
    render() {
        const album = this.item;
        const html = /* HTML */ `
            <section class="grid-item">
                <div>
                    <img src="${album.image}" />
                </div>
                <div>
                    <h3>${album.name}</h3>
                    <p>${album.releaseDate}</p>
                    <p>${this.formatArtists(album.artists)}</p>
                </div>
            </section>
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
