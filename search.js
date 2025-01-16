import { loadPage } from "./loadPage.js"

let url = 'https://rickandmortyapi.com/api/character'

// Provide functionality for search bar
export async function searchCharacters() {
    // Reset console to display updated batch of characters 
    console.clear()
    const query = document.querySelector('#searchInput').value.trim()
    if (query) {
        // Make characters searchable by name
        const searchUrl = `${url}/?name=${query}`
        loadPage(searchUrl)
    }
}