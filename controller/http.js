import Artist from "../model/artist.js";
import Album from "../model/album.js";
import Track from "../model/track.js";

const endpoint = "http://127.0.0.1:3333";

// --- lister --- //
let allArtists = [];
let allTracks = [];
let allAlbums = [];

let lastFetch = 0;

// ----- Read all artists ----- //
async function readAllArtists() {
    const now = Date.now();
    const timeLastFetched = now - lastFetch;
    if (timeLastFetched > 10_000) {
        console.log(now, "now");
        console.log(timeLastFetched, "lasttimefetch");
        console.log("Refetch");
        await readArtistsAgain();
    }
    return allArtists;
}

async function readArtistsAgain() {
    const res = await fetch(`${endpoint}/artists`);
    const artistsData = await res.json();
    allArtists = artistsData.map((jsonObj) => new Artist(jsonObj));

    lastFetch = Date.now();
}

// ----- Create new artist ----- //
async function createArtist(artist) {
    const json = JSON.stringify(artist);
    const res = await fetch(`${endpoint}/artists`, {
        method: "POST",
        headers: {
            "Content Type:": "application/json",
        },
        body: json,
    });
    await readArtistsAgain();

    return res.ok;
}

// ----- Update artist ----- //
async function updateArtist(artist) {
    const json = JSON.stringify(artist);
    const res = await fetch(`${endpoint}/${artist.id}`, {
        method: "PUT",
        headers: {
            "Content Type": "application/json",
        },
        body: json,
    });
    await readArtistsAgain();

    return res.ok;
}

// ----- Delete artists ----- //
async function deleteArtist(artist) {
    const res = await fetch(`${endpoint}/${artist.id}`, {
        method: "DELETE",
    });
    await readArtistsAgain();

    return res.ok;
}

// ---- Read all songs ------ //
async function readAllTracks() {
    const now = Date.now();
    const timeLastFetched = now - lastFetch;
    if (timeLastFetched > 10_000) {
        await readTracksAgain();
    }
    return allTracks;
}

async function readTracksAgain() {
    const res = await fetch(`${endpoint}/tracks`);
    const tracksData = await res.json();
    allTracks = tracksData.map((jsonObj) => new Track(jsonObj));

    lastFetch = Date.now();
}

// ----- Create new song ----- //
async function createTrack(tracks) {
    const json = JSON.stringify(tracks);
    const res = await fetch(`${endpoint}/tracks`, {
        method: "POST",
        headers: {
            "Content Type": "application/json",
        },
        body: json,
    });
    await readTracksAgain();

    return res.ok;
}

// ----- Update song ----- //
async function updateTrack(track) {
    const json = JSON.stringify(track);
    const res = await fetch(`${endpoint}/${track.id}`, {
        method: "PUT",
        headers: {
            "Content Type": "application/json",
        },
        body: json,
    });
    await readTracksAgain();

    return res.ok;
}

// ----- Delete song ----- //
async function deleteTrack(tracks) {
    const res = await fetch(`${endpoint}/${tracks.id}`, {
        method: "DELETE",
    });
    await readTracksAgain();

    return res.ok;
}

// ----- Read all albums ---- //
async function readAllAlbums() {
    const now = Date.now();
    const timeLastFetched = now - lastFetch;
    if (timeLastFetched > 10_000) {
        await readAlbumsAgain();
    }
    return allAlbums;
}

async function readAlbumsAgain() {
    const res = await fetch(`${endpoint}/albums`);
    const albumsData = await res.json();
    allAlbums = albumsData.map((jsonObj) => new Album(jsonObj));
    
    lastFetch = Date.now();
}

// ----- Create new album ----- //
async function createAlbum(albums) {
    const json = JSON.stringify(albums);
    const res = await fetch(`${endpoint}/albums`, {
        method: "POST",
        headers: {
            "Content Type": "application/jsom",
        },
        body: json,
    });
    await readAlbumsAgain();

    return res.ok;
}

// ----- Update album ----- //
async function updateAlbum(album) {
    const json = JSON.stringify(album);
    const res = await fetch(`${endpoint}/${album.id}`, {
        method: "PUT",
        headers: {
            "Content Type": "application/json",
        },
        body: json,
    });
    await readAlbumsAgain();

    return res.ok;
}

// ----- Delete album ----- //
async function deleteAlbum(albums) {
    const res = await fetch(`${endpoint}/${albums.id}`, {
        method: "DELETE",
    });
    await readAlbumsAgain();

    return res.ok;
}

// ----- Read all searched ---- //
async function getAllSearched(searchValue) {
    const res = await fetch(`${endpoint}/search/?q=${searchValue}`);
    return await res.json();
}

export { readAllArtists, createArtist, updateArtist, deleteArtist, readAllTracks, createTrack, updateTrack, deleteTrack, readAllAlbums, createAlbum, updateAlbum, deleteAlbum, getAllSearched };
