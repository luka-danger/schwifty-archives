import { fetchCharacters } from "./fetch.js";
import { showCharacter } from "./showCharacter.js";
import { pagination } from "./pagination.js";

export async function loadPage(url) {
    const data = await fetchCharacters(url)
    if (data) {
        showCharacter(data.results)
        pagination(data.info, loadPage)
    }
}