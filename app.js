import { searchCharacters } from "./search.js";
import { goHome } from "./goHome.js";
import { loadPage } from "./loadPage.js";

// Current URL
let currentPage = 'https://rickandmortyapi.com/api/character';

// Make buttons active when DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#searchBtn').addEventListener('click', searchCharacters)
    document.querySelector('#homeBtn').addEventListener('click', goHome)
})

// Iniital Fetch
loadPage(currentPage)