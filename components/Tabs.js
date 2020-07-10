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


//-----------------------------

import axios from 'axios'



// Make tabs Component

const topicsDiv = document.querySelector('.topics')

function makeTabs(tab) {

    const topicTab = document.createElement('div')
        topicTab.classList.add('tab')
        topicTab.textContent = tab

    return topicTab

}


// Axios - Get Data - with .then, and .catch

function getTabs() {

    const specificTab = `https://lambda-times-backend.herokuapp.com/topics`
    axios.get(specificTab)
      .then(function (value) {
        const tabs = value.data.topics
  
        // we can loop over imageURLs
        // at each iteration we instantiate a Dog Card
        // and append it to the entry point
        debugger
        tabs.forEach(eachTab => {
          const tab = makeTabs(eachTab)
          topicsDiv.appendChild(tab)
        })
        // anything you need with the data from THE API needs to be handled her
        // INSIDE THE HAPPY PATH
      })
      .catch(function (error) {
      })
  }

getTabs()

