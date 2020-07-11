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

        const javascriptArray = response.data.articles['javascript'];
        const bootstrapArray = response.data.articles['bootstrap'];
        const technologyArray = response.data.articles['technology'];
        const jqueryArray = response.data.articles['jquery'];
        const nodeArray = response.data.articles['node'];

        const articleArray = [javascriptArray, bootstrapArray, technologyArray,jqueryArray,nodeArray];

        console.log(articleArray);



        // const newCard = function cardMaker({articles}) {}

    })

    .catch(function (error) {
        // debugger
        console.log(error)
    });

    // debugger


    function cardMaker({articles}) {


        const articleCard = document.createElement('div');
        articleCard.className = 'card';
        // articleCard.addEventListener('click', () => {
        //     // console.log(data.articles //need to get object from 'articles' array then the value of 'headline' key);
        // });

        const headline = document.createElement('div');
        headline.className = 'headline';
        headline.textContent = articles.headline;
        articleCard.appendChild(headline);


        const author = document.createElement('div');
        author.className = 'author';
        articleCard.appendChild(author);


        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';
        author.appendChild(imgContainer);


        const authorImage = document.createElement('img');
        authorImage.src = articles.authorPhoto;
        imgContainer.appendChild(authorImage);


        const authorNamDiv = document.createElement('span');
        authorNamDiv.textContent = 'By' + articles.authorName;
        author.appendChild(authorNamDiv);

        return articleCard;
    }

    


    console.log('EVERTYHING WORKS THROUGH HERE');


      // const articlesDataSet = axiosArticlesResponse.data;
        // articlesDataSet.forEach(article => {
        //     const card = cardCreator({article});
    // })