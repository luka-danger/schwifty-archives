import { loadPage } from "./app.js"

let url = 'https://rickandmortyapi.com/api/character'

export function goHome() {
    document.querySelector('#searchInput').value = ''
    loadPage(url)
 }