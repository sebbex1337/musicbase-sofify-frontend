import ItemRenderer from "./itemRenderer.js";
import { deleteArtistClicked } from "../controller/artists-controllers/deleteArtist.js";
import { updateArtistClicked } from "../controller/artists-controllers/updateArtists.js";

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
        element.querySelector(":last-child .btn-update").addEventListener("click", () => updateArtistClicked(this.item));
    }
    renderSelectOption() {
        const artist = this.item;
        const html = /* html */ `
			<option value="${artist.id}">${artist.name}</option>
		`;
        return html;
    }
}
