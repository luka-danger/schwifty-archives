import { loadPage } from "./app.js"

export function pagination(info) {
    const pagination = document.querySelector('#pagination')
    pagination.innerHTML = ''

    if (info.prev) {
        const prevBtn = document.createElement('button')
        prevBtn.textContent = 'Previous'
        prevBtn.addEventListener('click', () => loadPage(info.prev))
        pagination.appendChild(prevBtn)
    }

    if (info.next) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.addEventListener('click', () => loadPage(info.next))
        pagination.appendChild(nextBtn)
    }
}