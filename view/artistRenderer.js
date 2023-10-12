import ItemRenderer from "./itemRenderer.js";
import { deleteArtistClicked } from "../deleteArtist.js";
import { updateClicked } from "../updateArtists.js";

export default class ArtistRenderer extends ItemRenderer {
    render() {
        const artist = this.item;
        const html = /* html */ `
			<article class="grid-item">
				<img src="${artist.image}">
				<section>
					<h2>${artist.name}</h2>
					<a href="${artist.website}">Website</a>
				</section>
				<section class="btns">
					<button class="btn-delete">Delete</button>
					<button class="btn-update">Update</button>
				</section>
			</article>
        `;
        return html;
    }
    postRender(element) {
        element.querySelector(":last-child .btn-delete").addEventListener("click", () => deleteArtistClicked(this.item));
        element.querySelector(":last-child .btn-update").addEventListener("click", () => updateClicked(this.item));
    }
}
