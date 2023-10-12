import itemRenderer from "./itemRenderer.js";

export default class AlbumRenderer extends itemRenderer {
    render() {
        const album = this.item;
        const html = /* HTML */ `
            <section class="grid-item">
                <img src="${album.image}" />
                <section>
                    <h3>${album.name}</h3>
                    <p>${album.releaseDate}</p>
                    <p>${this.formatArtists(album.artists)}</p>
                </section>
                <section class="btns">
                    <button class="btn-delete">Delete</button>
                    <button class="btn-update">Update</button>
                </section>
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
    postRender(element) {
        element.querySelector(":last-child .btn-delete").addEventListener("click", () => console.log("TODO: delete album"));
        element.querySelector(":last-child .btn-update").addEventListener("click", () => console.log("TODO: update album"));
    }
}
