import { loadPage } from "./loadPage.js"

export function pagination(info) {
    const pagination = document.querySelector('#pagination')
    pagination.innerHTML = ''

    if (info.prev) {
        const prevBtn = document.createElement('button')
        prevBtn.textContent = 'Previous'
        prevBtn.addEventListener('click', () => {
            loadPage(info.prev)
            console.clear()
        })
        pagination.appendChild(prevBtn)
    }

    if (info.next) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.addEventListener('click', () => {
            loadPage(info.next), 
            console.clear()
        })
        pagination.appendChild(nextBtn)
    }
}