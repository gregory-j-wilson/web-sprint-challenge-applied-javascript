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

    const headerContainer = document.querySelector('.header-container')

    const header = document.createElement('div')
        header.classList.add('header')

            const date = document.createElement('span')
                date.classList.add('date')
                date.textContent = 'MARCH 28, 2020'

            const newspaperTitle = document.createElement('h1')
                newspaperTitle.textContent = 'Lambda Times'

            const temp = document.createElement('span')
                temp.classList.add('temp')
                temp.textContent = '98°'
    
    headerContainer.appendChild(header)
    header.appendChild(date)
    header.appendChild(newspaperTitle)
    header.appendChild(temp)
    

}

Header()
