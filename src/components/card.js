import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const headline1 = document.createElement('div')
  const auth = document.createElement('div')
  const imgClass = document.createElement('div')
  const cardImg = document.createElement('img')
  const name = document.createElement('span')

  card.appendChild(headline1)
  card.appendChild(auth)
  auth.appendChild(imgClass)
  imgClass.appendChild(cardImg)
  auth.appendChild(name)

  card.classList.add('card')
  headline1.classList.add('headline')
  auth.classList.add('author')
  imgClass.classList.add('img-container')

  headline1.textContent = article.headline
  cardImg.src = article.authorPhoto
  name.textContent = `By ${article.authorName}`

  card.addEventListener('onclick', function(event) {
    console.log(article.headline);
  })

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
  .then((response) =>{
    //response.data.articles.topic.array
    const categories = response.data.articles
    console.log(categories)
    for (const article in categories){
        // console.log(article);
        const obj = categories[article];
        const value = obj.values();
        console.log(obj)
        obj.forEach(element => {
          return element
          document.querySelector(selector).appendChild(Card(element))
        })
      // for (const item of value){
      //   console.log(item);
      //   return item;
      // }
    }
  })
}
  
export { Card, cardAppender }
