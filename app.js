import { readArtists, readTracks, readAlbums } from "./http.js";
import { initViews } from "./view.js";

window.addEventListener("load", initApp);
let artists;
let tracks;
let albums;

async function initApp() {
	console.log("Musicbase is running 🎉");
	artists = await readArtists();
	// console.log(artists);
	tracks = await readTracks();
	// console.log(tracks);
	albums = await readAlbums();
	// console.log(albums);

	displayListArtists(artists);
	displayListTrack(tracks);
	displayListAlbum(albums);

	initViews();
}

// -------------- //
// --- ARTISTS --- //
// -------------- //

// --- Artist html display --- //
function displayListArtists(artistslist) {
	document.querySelector("#artist_table tbody").innerHTML = "";
	if (artistslist) {
		for (const artist of artistslist) insertArtists(artist);
	} else {
		document.querySelector("#artist_table tbody").innerHTML("No artists found :(");
	}
}

// --- Artist table hjælpefunktion --- //
function insertArtists(artist) {
	const artistHTML = /* HTML */ `
		<tr>
			<td>${artist.name}</td>
			<td><img src="${artist.image}" /></td>
			<td>${artist.website}</td>
		</tr>
	`;

	document.querySelector("#artist_table tbody").insertAdjacentHTML("beforeend", artistHTML);
}

// -------------- //
// --- TRACKS --- //
// -------------- //

// --- track html display --- //
function displayListTrack(trackslist) {
	document.querySelector("#track_table tbody").innerHTML = "";
	if (trackslist) {
		for (const track of trackslist) insertTrack(track);
	} else {
		document.querySelector("#track_table tbody").innerHTML("No tracks found");
	}
}

// --- track display hjælpefunktion --- //
function insertTrack(track) {
	let artistsString = "";
	if (track.artists.length > 1) {
		for (const artist of track.artists) {
			artistsString += `${artist.name}, `;
		}
	} else {
		artistsString = track.artists[0].name;
	}
	const trackHTML = /* HTML */ `
		<tr>
			<td>${track.name}</td>
			<td>${artistsString}</td>
			<td>${track.duration}</td>
		</tr>
	`;

	document.querySelector("#track_table tbody").insertAdjacentHTML("beforeend", trackHTML);
}

// -------------- //
// --- ALBUMS --- //
// -------------- //

// --- album html display --- //
function displayListAlbum(albumlist) {
	document.querySelector("#album_table tbody").innerHTML = "";
	if (albumlist) {
		for (const album of albumlist) insertAlbum(album);
	} else {
		document.querySelector("#album_table tbody").innerHTML("No albums found");
	}
}

// --- album display hjælpefunktion --- //
function insertAlbum(album) {
	const albumHTML = /* HTML */ `
		<tr>
			<td>${album.name}</td>
			<td>${album.releaseDate}</td>
			<td><img src="${album.image}" /></td>
			<td>${album.artistName}</td>
		</tr>
	`;

	document.querySelector("#album_table tbody").insertAdjacentHTML("beforeend", albumHTML);
}
