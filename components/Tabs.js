// STEP 2: Create tabs
// -----------------------

import axios from 'axios'

// ✅Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

// ✅Once the data is resolved use console logs or breakpoints to review the structure.

// Iterate over the topics ✅creating a new tab for each topic, 

// and ✅appending it to the DOM
        // ✅under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>✅
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


const entryPoint = document.querySelector('.topics')
const axiosData = 'https://lambda-times-backend.herokuapp.com/topics';

// axios.get('https://lambda-times-backend.herokuapp.com/topics')

axios.get(axiosData)
    .then(function (axiosResponse) {
        // debugger
        // console.log(axiosResponse.data.topics);  //used for texting data retrieval success
        const topicsItems = axiosResponse.data.topics;        
        topicsItems.map((topicsItem) => {
            const newTab = document.createElement('div');
            newTab.className = 'tab';
            newTab.textContent = topicsItem;
            // console.log(newTab);        //used to test proper creation of tab elements
            entryPoint.appendChild(newTab);            
        });
    })
    
    .catch(function (error) {
        // debugger
        console.log(error)
    })

const topics = document.querySelector('.topics');
console.log(topics);

// console.log('THIS IS WORKING UP TO HERE');       //tester