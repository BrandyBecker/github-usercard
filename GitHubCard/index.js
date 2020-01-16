const cards = document.querySelector(".cards");

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const lambdaPeople = [
  axios.get(`https://api.github.com/users/BrandyBecker`),
  axios.get(`https://api.github.com/users/A-Powell`),
  axios.get(`https://api.github.com/users/CarlosVillalpandoJr`),
  axios.get(`https://api.github.com/users/SkylerSlatosch`),
  axios.get(`https://api.github.com/users/daveskull81`),
  axios.get(`https://api.github.com/users/jeremyRogel`),
  axios.get(`https://api.github.com/users/ian-schwartz`)
];

//Makes a promise to wait until all requests are done- THEN does this stuff
// to do an array of multiple requests
Promise.all(lambdaPeople)
  .then(person => {
    person.forEach(attrs => {
      console.log(attrs);
      cards.appendChild(createCard(attrs.data));
    });
  })
  .catch(error => {
    alert("ERROR: ", error);
  });

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function createCard(person) {
  // create elements
  const card = document.createElement("div");
  const avatar = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const url = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // set styles
  card.classList.add("card");
  name.classList.add("name");
  username.classList.add("username");
  avatar.classList.add("avatar");

  // set content
  avatar.src = person.avatar_url;
  name.textContent = person.name;
  username.textContent = person.login;
  location.textContent = `Location: ${person.location}`;
  profile.textContent = `Profile: `;
  url.href = person.html_url;
  url.textContent = `${person.html_url}`;
  followers.textContent = `Followers: ${person.followers}`;
  following.textContent = `Following: ${person.following}`;
  bio.textContent = `Bio: ${person.bio}`;

  // structure elements
  card.appendChild(avatar);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(url);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
