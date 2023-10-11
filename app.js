import { readAllArtists, readAllTracks, readAllAlbums, getAllSearched } from "./controller/http.js";
import { initViews } from "./view.js";
import { showCreateArtist } from "./createArtist.js";

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
    // --- Init views --- //
    initViews();
    displayUpatedLists();
}

async function displayUpatedLists() {
    const artists = await readAllArtists();
    const tracks = await readAllTracks();
    const albums = await readAllAlbums();

    // --- Display functions --- //
    artistsList = new listRenderer(artists, "#artist-table-container", artistRenderer);
    artistsList.render();

    tracksList = new listRenderer(tracks, "#track_table tbody", trackRenderer);
    tracksList.render();

    albumsList = new listRenderer(albums, "#album_table tbody", albumRenderer);
    albumsList.render();
}

// ---Search function --- //

// --------------------- //
// --- ARTIST SEARCH --- //
// --------------------- //
function displaySearchArtists(artistslist) {
    document.querySelector("#artist_search_table tbody").innerHTML = "";
    if (artistslist) {
        for (const artist of artistslist) insertSearchArtists(artist);
    } else {
        document.querySelector("#artist_search_table tbody").innerHTML("No artists found :(");
    }
}

// --- Artist table hjælpefunktion --- //
function insertSearchArtists(artist) {
    const artistHTML = /* HTML */ `
        <tr>
            <td>${artist.name}</td>
            <td><img src="${artist.image}" /></td>
            <td>${artist.website}</td>
        </tr>
    `;

    document.querySelector("#artist_search_table tbody").insertAdjacentHTML("beforeend", artistHTML);
}

// --------------------- //
// --- TRACK SEARCH --- //
// --------------------- //

function displaySearchTrack(trackslist) {
    document.querySelector("#track_search_table tbody").innerHTML = "";
    if (trackslist) {
        for (const track of trackslist) insertSearchTrack(track);
    } else {
        document.querySelector("#track_search_table tbody").innerHTML("No tracks found");
    }
}

// --- track display hjælpefunktion --- //
function insertSearchTrack(track) {
    const trackHTML = /* HTML */ `
        <tr>
            <td>${track.name}</td>
            <td>${track.artists}</td>
            <td>${track.duration}</td>
        </tr>
    `;

    document.querySelector("#track_search_table tbody").insertAdjacentHTML("beforeend", trackHTML);
}

// --------------------- //
// --- ALBUMS SEARCH --- //
// --------------------- //

// --- album html display --- //
function displaySearchAlbum(listOfAlbums) {
    document.querySelector("#album_search_table tbody").innerHTML = "";
    if (listOfAlbums) {
        for (const album of listOfAlbums) insertSearchAlbum(album);
    } else {
        document.querySelector("#album_search_table tbody").innerHTML("No albums found");
    }
}

// --- album display hjælpefunktion --- //
function insertSearchAlbum(album) {
    const albumHTML = /* HTML */ `
        <tr>
            <td>${album.name}</td>
            <td>${album.releaseDate}</td>
            <td><img src="${album.image}" /></td>
            <td>${album.artists}</td>
        </tr>
    `;

    document.querySelector("#album_search_table tbody").insertAdjacentHTML("beforeend", albumHTML);
}

// --- Search function --- //
async function search(event) {
    const search = event.target.value;
    const results = await getAllSearched(search);
    const searchedAlbums = results.albums;
    displaySearchAlbum(searchedAlbums);
    const searchedTracks = results.tracks;
    displaySearchTrack(searchedTracks);
    const searchedArtists = results.artists;
    displaySearchArtists(searchedArtists);
}

export { displayUpatedLists };
