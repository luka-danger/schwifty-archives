import { loadPage } from "./loadPage.js"

// Paginate through all characters - displays 20 characters per page
export function pagination(info) {
    const pagination = document.querySelector('#pagination')
    pagination.innerHTML = ''

    
    // If previous page exists - create a previous button that moves back a page
    if (info.prev) {
        const prevBtn = document.createElement('button')
        prevBtn.textContent = 'Previous'
        prevBtn.addEventListener('click', () => {
            // Load content from previous page
            loadPage(info.prev)
            // Reset the console
            console.clear()
        })
        pagination.appendChild(prevBtn)
    }

    // If next page exists - create a previous button that moves forward a page
    if (info.next) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.addEventListener('click', () => {
            // Load content from next page
            loadPage(info.next), 
            // Reset the console
            console.clear()
        })
        pagination.appendChild(nextBtn)
    }
}