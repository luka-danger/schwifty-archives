import { loadPage } from "./loadPage.js"

let url = 'https://rickandmortyapi.com/api/character'

// Reset homepage and search bar
// Use with home button
export function goHome() {
    document.querySelector('#searchInput').value = ''
    loadPage(url)
 }