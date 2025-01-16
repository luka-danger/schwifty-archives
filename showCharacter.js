export function showCharacter(characterArray) {
    const container = document.querySelector('#container');
    container.innerHTML = ''
    characterArray.forEach(character => {
        container.innerHTML += `
            <h2>${character.name}</h2>
            <img src='${character.image}'>
        `
        console.log(character);
    })
}