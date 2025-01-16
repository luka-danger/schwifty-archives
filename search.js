import { loadPage } from "./loadPage.js"

let url = 'https://rickandmortyapi.com/api/character'

export async function searchCharacters() {
    console.clear()
    const query = document.querySelector('#searchInput').value.trim()
    if (query) {
        const searchUrl = `${url}/?name=${query}`
        loadPage(searchUrl)
    }
}