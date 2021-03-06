// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
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

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( res => {
        console.log('hello');
        let topic;
        let tabs = document.querySelectorAll('.tab');
        for(let i=0; i<tabs.length; i++)
        {
            topic = tabs[i].textContent.toLowerCase();
            for(let j=0; j<res.data.articles[topic].length; j++)
            {
                const card = articleCardMaker(res.data.articles[topic][j]);
                document.querySelector('.cards-container').appendChild(card);
            }
            
        }
    })
    .catch( err => {
        console.log(err);
    })


function articleCardMaker(obj)
{
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = obj.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const img_container = document.createElement('div');
    img_container.classList.add('img-container');
    author.appendChild(img_container);

    const img = document.createElement('img');
    img.setAttribute('src', obj.authorPhoto);
    img_container.appendChild(img);

    const name = document.createElement('span');
    name.textContent = obj.authorName;
    author.appendChild(name);

    card.addEventListener('click', e => {
        console.log(obj.headline);
    })
    return card;
}