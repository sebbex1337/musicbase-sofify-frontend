import Artist from "../model/artist.js";
import Album from "../model/album.js";
import Track from "../model/track.js";

const endpoint = "https://musicbase-sofify.azurewebsites.net/";

// --- lister --- //
let allArtists = [];
let allTracks = [];
let allAlbums = [];

// ----- Read all artists ----- //
async function readAllArtists() {
    const res = await fetch(`${endpoint}/artists`);
    const artistsData = await res.json();
    allArtists = artistsData.map((jsonObj) => new Artist(jsonObj));
    return allArtists;
}

// ----- Create new artist ----- //
async function createArtist(artist) {
    const json = JSON.stringify(artist);
    const res = await fetch(`${endpoint}/artists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: json,
    });

    return res.ok;
}

// ----- Update artist ----- //
async function updateArtist(artist) {
    const json = JSON.stringify(artist);
    const res = await fetch(`${endpoint}/artists/${artist.id}`, {
        method: "PUT",
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.ok;
}

// ----- Delete artists ----- //
async function deleteArtist(artist) {
    const res = await fetch(`${endpoint}/artists/${artist.id}`, {
        method: "DELETE",
    });

    return res.ok;
}

// ---- Read all songs ------ //
async function readAllTracks() {
    const res = await fetch(`${endpoint}/tracks`);
    const tracksData = await res.json();
    allTracks = tracksData.map((jsonObj) => new Track(jsonObj));
    return allTracks;
}

// ----- Create new song ----- //
async function createTrack(tracks) {
    const json = JSON.stringify(tracks);
    const res = await fetch(`${endpoint}/tracks`, {
        method: "POST",
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.ok;
}

// ----- Update song ----- //
async function updateTrack(track) {
    const json = JSON.stringify(track);
    const res = await fetch(`${endpoint}/tracks/${track.id}`, {
        method: "PUT",
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.ok;
}

// ----- Delete song ----- //
async function deleteTrack(tracks) {
    const res = await fetch(`${endpoint}/tracks/${tracks.id}`, {
        method: "DELETE",
    });

    return res.ok;
}

// ----- Read all albums ---- //
async function readAllAlbums() {
    const res = await fetch(`${endpoint}/albums`);
    const albumsData = await res.json();
    allAlbums = albumsData.map((jsonObj) => new Album(jsonObj));
    return allAlbums;
}

// ----- Create new album ----- //
async function createAlbum(album) {
    const json = JSON.stringify(album);
    const res = await fetch(`${endpoint}/albums`, {
        method: "POST",
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.ok;
}

// ----- Update album ----- //
async function updateAlbum(album) {
    const json = JSON.stringify(album);
    const res = await fetch(`${endpoint}/albums/${album.id}`, {
        method: "PUT",
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.ok;
}

// ----- Delete album ----- //
async function deleteAlbum(albums) {
    const res = await fetch(`${endpoint}/albums/${albums.id}`, {
        method: "DELETE",
    });

    return res.ok;
}

// ----- Read all searched ---- //
async function getAllSearched(searchValue) {
    const res = await fetch(`${endpoint}/search/?q=${searchValue}`);
    const searchData = await res.json();
    return searchData;
}

export { readAllArtists, createArtist, updateArtist, deleteArtist, readAllTracks, createTrack, updateTrack, deleteTrack, readAllAlbums, createAlbum, updateAlbum, deleteAlbum, getAllSearched };
