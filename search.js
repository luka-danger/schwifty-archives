import { loadPage } from "./app.js"

let url = 'https://rickandmortyapi.com/api/character'

export async function searchCharacters() {
    const query = document.querySelector('#searchInput').value.trim()
    if (query) {
        const searchUrl = `${url}/?name=${query}`
        loadPage(searchUrl)
    }
}