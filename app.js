const GET_URL = "https://thesimpsonsquoteapi.glitch.me/quotes"
const img = document.getElementById('img')
const btn = document.getElementById('btn')
const character = document.getElementById('character')
const quote = document.getElementById('quote')

btn.addEventListener('click',callApi)

function callApi(){

 fetch(GET_URL)
    .then(res => res.json())
    .then(data => { 
        img.src = data[0].image    

        character.textContent = data[0].character

        quote.textContent = data[0].quote
    })

    

}
