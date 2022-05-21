let cardsBox = document.querySelector(".cards") ;
let addCardButton = document.querySelector("#add") ;
let sortCardsButton = document.querySelector("#sort") ;
console.log(sortCardsButton)




function sortCards(){
    let cards = document.querySelectorAll(".card") ;
    let cardsArray = [] ;
    for(let i = 0 ; i < cards.length ; i++){
        cardsArray.push(+cards[i].firstChild.innerHTML)
    }
    cardsArray.sort((a , b) => a - b)
    
    for(let i = 0 ; i < cards.length ; i++){
        cards[i].firstChild.innerHTML = cardsArray[i] ; 
    }
}

sortCardsButton.addEventListener("click" , sortCards)

function deleteCard(e){
    e.target.parentNode.remove() ;
}


function createCard(){
    let card = document.createElement("div") ;
    card.className = "card" ;
    card.innerHTML = `<p>${Math.floor(Math.random()*1000)}</p>` ;
    let deleteButton = document.createElement("div") ;
    deleteButton.innerHTML = "X" ;
    deleteButton.addEventListener("click" , deleteCard) ;
    card.appendChild(deleteButton)
    cardsBox.appendChild(card) ; 
    let cards = document.querySelectorAll(".card") ;
    let localCards = [] ;
    for(let i = 0 ; i < cards.length ; i++){
        localCards.push(+cards[i].firstChild.innerHTML)
    }
    console.log(localCards)
    console.log(cards)
    function toLocalStorage(){
        localStorage.setItem("card" , JSON.stringify(localCards))
    }
    toLocalStorage()
}

function getLocalStorage(){
    if(localStorage.getItem("card")){
        let localCards = JSON.parse(localStorage.getItem("card")) ;
        localCards.forEach((val) => {
            let card = document.createElement("div") ;
            card.className = "card" ;
            card.innerHTML = `<p>${val}</p>` ;
            let deleteButton = document.createElement("div")
            deleteButton.innerHTML = "X" ;
            deleteButton.addEventListener("click" , deleteCard) ;
            card.appendChild(deleteButton)
            cardsBox.appendChild(card) ;
        })
        console.log(localCards)
    }   
}

getLocalStorage()


addCardButton.addEventListener("click" , createCard) ;



