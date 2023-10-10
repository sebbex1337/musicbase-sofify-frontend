const endpoint = "http://127.0.0.1:3333";

// ----- Read all artists ----- //
async function readArtists() {
    const res = await fetch(`${endpoint}/artists`);
    const artistsData = await res.json();
    return artistsData;
}

// ---- Read all songs ------ //
async function readTracks() {
    const res = await fetch(`${endpoint}/tracks`);
    const tracksData = await res.json();
    return tracksData;
}

// ----- Read all albums ---- //
async function readAlbums() {
    const res = await fetch(`${endpoint}/albums`);
    const albumsData = await res.json();
    return albumsData;
}

// ----- Read all searched ---- //
async function getAllSearched(searchValue) {
    const res = await fetch(`${endpoint}/search/?q=${searchValue}`);
    return await res.json();
}

export { readArtists, readTracks, readAlbums, getAllSearched };
