// Fetch characters from API
export async function fetchCharacters(url) {
    try {
        // Use CORS to fetch data from API
        const response = await fetch(url, {mode: 'cors'})
        // Display response in JSON format
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Error fetching characters:', error)
    }
}