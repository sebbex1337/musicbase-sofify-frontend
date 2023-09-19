"use strict";

// ------ Imports ---- //
import { readArtists, readTracks, readAlbums } from "./http.js";
import { initViews } from "./view.js";

// load window.eventlistner og hjælpefunktion
window.addEventListener("load", initApp);

// hjælpefunktion
async function initApp() {
  console.log("Musicbase is running 🎉");
  initViews();
}

