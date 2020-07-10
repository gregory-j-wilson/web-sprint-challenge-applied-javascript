// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'



const cardsContainer = document.querySelector('.cards-container')


// Axios - GetData Function - with .then, and .catch

function getCards() {
    
    const cardsInfo = `https://lambda-times-backend.herokuapp.com/articles`
    axios.get(cardsInfo)

    // .then --> for in loop --> for each - invoke cardmaker function, pass it in
      .then(function (value) {

        const cardsCategory = value.data.articles

        for (let obj in cardsCategory) {

        cardsCategory[obj].forEach(eachCard => {
            console.log(eachCard)
          const oneCard = cardMaker(eachCard)
          cardsContainer.appendChild(oneCard)
        })
        }
        // anything you need with the data from THE API needs to be handled her
        // INSIDE THE HAPPY PATH
      })


      .catch(function (error) {
      })
  }

getCards()


// Cardmaker component
function cardMaker(eachCard) {

    const card = document.createElement('div')
        card.classList.add('card')

        const headline = document.createElement('div')
        headline.classList.add('headline')
        headline.textContent = eachCard

        const author = document.createElement('div')
        author.classList.add('author')

            const imgContainer = document.createElement('div')
            imgContainer.classList.add('img-container')

                const image = document.createElement('img')
                image.src = eachCard.authorPhoto

            const authorsName = document.createElement('span')
            authorsName.textContent = `By ${eachCard.authorName}`
    
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(image)
    author.appendChild(authorsName)
    
    
    return card
}


