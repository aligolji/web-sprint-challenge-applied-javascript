import axios from 'axios';

// STEP 3: Create article cards.
// -----------------------
// ✅Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// ✅Study the response data you get back, closely.
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

const entryPointCards = document.querySelector('.cards-container');
const axiosData = 'https://lambda-times-backend.herokuapp.com/articles';


axios.get(axiosData)
    .then(function (response) {
        // debugger
        console.log(response.data.articles)
        const articlesFromData = response.data.articles;
        console.log(articlesFromData);

        const articleArray = [articlesFromData];
        console.log(articleArray)

        articleArray.forEach(element => {
            const newCard = function cardMaker({articlesFromData}) {
                const articleCard = document.createElement('div');
                articleCard.className = 'card';
                // articleCard.addEventListener('click', () => {
                //     // console.log(data.articles //need to get object from 'articles' array then the value of 'headline' key);
                // });
        
                const headline = document.createElement('div');
                headline.className = 'headline';
                headline.textContent = articlesFromData.headline;
                articleCard.appendChild(headline);
        
        
                const author = document.createElement('div');
                author.className = 'author';
                articleCard.appendChild(author);
        
        
                const imgContainer = document.createElement('div');
                imgContainer.className = 'img-container';
                author.appendChild(imgContainer);
        
        
                const authorImage = document.createElement('img');
                authorImage.src = articlesFromData.authorPhoto;
                imgContainer.appendChild(authorImage);
        
        
                const authorNamDiv = document.createElement('span');
                authorNamDiv.textContent = 'By' + articlesFromData.authorName;
                author.appendChild(authorNamDiv);
                
                entryPointCards.appendChild(newCard);

                return newCard

            }
        
        })


    })

    .catch(function (error) {
        // debugger
        console.log(error)
    });

    // debugger


    console.log('EVERTYHING WORKS THROUGH HERE');


console.log(entryPointCards)