import { readAllArtists, readAllTracks, readAllAlbums, getAllSearched } from "./controller/http.js";
import { initViews } from "./view.js";
import { showCreateArtist } from "./controller/artists-controllers/createArtist.js";
import { showCreateTrack } from "./controller/tracks-controller/createTrack.js";
import { showCreateAlbum } from "./controller/albums-controller/createAlbum.js";
import listRenderer from "./view/listRenderer.js";
import artistRenderer from "./view/artistRenderer.js";
import trackRenderer from "./view/trackRenderer.js";
import albumRenderer from "./view/albumRenderer.js";

window.addEventListener("load", initApp);
let artistsList;
let tracksList;
let albumsList;

async function initApp() {
    console.log("Musicbase is running 🎉");

    // --- Search --- //
    document.querySelector("#search").addEventListener("keyup", search);
    document.querySelector("#search").addEventListener("change", search);
    document.querySelector("#cadBtn").addEventListener("click", showCreateArtist);
    document.querySelector("#create-track").addEventListener("click", showCreateTrack);
    document.querySelector("#create-album-top").addEventListener("click", showCreateAlbum);

    // --- Init views --- //
    initViews();
    await displayUpdatedLists();
}

async function displayUpdatedLists() {
    const artists = await readAllArtists();
    const tracks = await readAllTracks();
    const albums = await readAllAlbums();

    // --- Display functions --- //
    artistsList = new listRenderer(artists, "#artist-table-container", artistRenderer);
    artistsList.render();

    tracksList = new listRenderer(tracks, "#track_table tbody", trackRenderer);
    tracksList.render();

    albumsList = new listRenderer(albums, "#albums-container", albumRenderer);
    albumsList.render();
}

// --- Search function --- //
async function search(event) {
    const search = event.target.value;
    const results = await getAllSearched(search);
    const searchedAlbumsList = new listRenderer(results.albums, "#search-albums-container", albumRenderer);
    searchedAlbumsList.render();
    const searchedTracksList = new listRenderer(results.tracks, "#track_search_table tbody", trackRenderer);
    searchedTracksList.render();
    const searchedArtistsList = new listRenderer(results.artists, "#search-artists-container", artistRenderer);
    searchedArtistsList.render();
}

export { displayUpdatedLists };
