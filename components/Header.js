// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

        const headerDiv = document.createElement('div');
        headerDiv.className = 'header';

        const dateSpan = document.createElement('span');
        dateSpan.className = 'date';
        headerDiv.appendChild(dateSpan);
        //NEED LIVE DATE TO SHOW UP HERE

        const titleH1 = document.createElement('h1');
        titleH1.textContent = 'Lambda Times';
        headerDiv.appendChild(titleH1);

        const tempSpan = document.createElement('span');
        tempSpan.className = 'temp';
        headerDiv.appendChild(tempSpan);
        //NEED LIVE TEMP TO SHOW UP HERE
    

}

