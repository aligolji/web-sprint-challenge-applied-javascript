import axios from 'axios';

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

//================AXIOS DATA RETRIEVAL========================
const axiosArticlesData = 'https://lambda-times-backend.herokuapp.com/articles'

axios.get(axiosArticlesData)
    .then(function (axiosArticlesResponse) {
        debugger
        console.log(axiosArticlesResponse.data)
    })
    .catch(function (error) {
        debugger
        console.log(error)
    });

    debugger

    //=====================END AXIOS ============================

    //-----------------CREATE ARTICLE CARDS BELOW--------------------

    function cardCreator({articleObject}) {

        const articleCard = document.createElement('div');
        articleCard.className = 'card';


        const headline = document.createElement('div');
        headline.className = 'headline';
        headline.textContent = articleObject.headline;
        articleCard.appendChild(headline);


        const author = document.createElement('div');
        author.className = 'author';
        articleCard.appendChild(author);


        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';
        author.appendChild(imgContainer);


        const authorImage = document.createElement('img');
        authorImage.src = articleObject.authorPhoto;
        imgContainer.appendChild(authorImage);


        const authorNameDiv = document.createElement('span');
        authorNameDiv.textContent = 'By' + articleObject.authorName;
        author.appendChild(authorNameDiv);




        returns articleCard
    }