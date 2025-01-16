import { fetchCharacters } from "./fetch.js";
import { showCharacter } from "./showCharacter.js";
import { pagination } from "./pagination.js";
import { searchCharacters } from "./search.js";
import { goHome } from "./goHome.js";

let currentPage = 'https://rickandmortyapi.com/api/character';

export async function loadPage(url) {
    const data = await fetchCharacters(url)
    if (data) {
        showCharacter(data.results)
        pagination(data.info, loadPage)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#searchBtn').addEventListener('click', searchCharacters)
    document.querySelector('#homeBtn').addEventListener('click', goHome)
})

// Iniital Fetch
loadPage(currentPage)