import itemRenderer from "./itemRenderer.js";

export default class AlbumRenderer extends itemRenderer {
    render() {
        const album = this.item;
        // console.log(album.image);
        const html = /* HTML */ `
            <tr>
                <td>${album.name}</td>
                <td>${album.releaseDate}</td>
                <td><img src="${album.image}" /></td>
                <td>${this.formatArtists(album.artists)}</td>
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
