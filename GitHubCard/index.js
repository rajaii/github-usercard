/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(n => {
  axios.get(`https://api.github.com/users/${n}`)
  .then(response => {
    const newChild = componentFactory(response);
    let daPlace = document.querySelector('.cards');
    daPlace.appendChild(newChild);
    console.log(response)
  })
  .catch(err => {
    console.log(err)
})
})


axios.get('https://api.github.com/users/rajaii')
.then(response => {
  const newChild = componentFactory(response);
  let daPlace = document.querySelector('.cards');
  daPlace.appendChild(newChild);
  console.log(response)
})
.catch(err => {
  console.log(err)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
///////////////////////////////////////////////////////////
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*////////////////////////////////

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
function componentFactory (obj) {
    const d = document.createElement('div');
    const dClass = document.createAttribute('class');
    dClass.value = 'card';
    d.setAttributeNode(dClass);

    const i = document.createElement('img');
    const iSrc = document.createAttribute('src');
    iSrc.value = obj.data.avatar_url;
    i.setAttributeNode(iSrc);
    d.appendChild(i);

    const d2 = document.createElement('div');
    const d2Class = document.createAttribute('class');
    d2Class.value = 'card-info';
    d2.setAttributeNode(d2Class);
    d.appendChild(d2);

    const h3 = document.createElement('h3');
    const h3Class = document.createAttribute('class');
    h3Class.value = 'name';
    h3.setAttributeNode(h3Class);
    h3.innerHTML = obj.data.name;
    d2.appendChild(h3);

    const p = document.createElement('p');
    const pClass = document.createAttribute('class');
    pClass.value = 'username';
    p.setAttributeNode(pClass);
    d2.appendChild(p);

    const p2 = document.createElement('p');
    p2.innerHTML = `Location: ${obj.data.location}`
    d2.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerHTML = `Profile: `
    d2.appendChild(p3);

    const a = document.createElement('a');
    const aHref = document.createAttribute('href');
    aHref.value = obj.data.html_url;
    a.setAttributeNode(aHref);
    a.innerHTML = obj.data.html_url;
    p3.appendChild(a);
    
    const p4 = document.createElement('p');
    p4.innerHTML = `Followers: ${obj.data.followers}`
    d2.appendChild(p4);

    const p5 = document.createElement('p');
    p5.innerHTML = `Following: ${obj.data.following}`
    d2.appendChild(p5);

    const p6 = document.createElement('p');
    p6.innerHTML = `Bio: ${obj.data.bio}`
    d2.appendChild(p6);

    return d;
  }




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">///
  <img src={image url of user} />///
  <div class="card-info">///
    <h3 class="name">{users name}</h3>///
    <p class="username">{users user name}</p>///
    <p>Location: {users location}</p>///
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>///
    <p>Followers: {users followers count}</p>///
    <p>Following: {users following count}</p>///
    <p>Bio: {users bio}</p>///
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
