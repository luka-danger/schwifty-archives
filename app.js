import { searchCharacters } from "./search.js";
import { goHome } from "./goHome.js";
import { loadPage } from "./loadPage.js";

let currentPage = 'https://rickandmortyapi.com/api/character';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#searchBtn').addEventListener('click', searchCharacters)
    document.querySelector('#homeBtn').addEventListener('click', goHome)
})

// Iniital Fetch
loadPage(currentPage)