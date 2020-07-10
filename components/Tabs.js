// STEP 2: Create tabs
// -----------------------

// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

/*DATA PULLED VIA AXIOS

topics: Array(5)
0: "javascript"
1: "bootstrap"
2: "technology"
3: "jquery"
4: "node.js"

const topics = [
    "javascript",
    "bootstrap",
    "technology",
    "jquery",
    "node.js"
];
*/

const topics = [
    "javascript",
    "bootstrap",
    "technology",
    "jquery",
    "node.js"
];

// const axiosData = 'https://lambda-times-backend.herokuapp.com/topics'
// axiosData.length(axiosData)
//     .then()


// function tabCreator(arrayItem) {

//     return newTab;

// }

topics.map((arrayItem) => {
    let newTab = document.createElement('div');
    newTab.className = 'tab';
    newTab.textContent = arrayItem;
    console.log(newTab);
    return newTab;
});

const topicsDiv = document.querySelector('.topics');
// topicsDiv.appendChild(tabCreator());


//     let newCreatedTab = tabCreator(array);
//     return newCreatedTab;
// });

// console.log(tabCreator(topics));


// axios.get(axiosData)
//     .then(function (topicsArray) {
        // debugger
        // console.log(topicsArray.data);
        // topics.data.forEach(item => {

        // })





    // })
    // .catch(error => {
    //     //debugger
    //     console.log(error);
    // })