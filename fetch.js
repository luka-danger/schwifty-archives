export async function fetchCharacters(url) {
    try {
        const response = await fetch(url, {mode: 'cors'})
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Error fetching characters:', error)
    }
}