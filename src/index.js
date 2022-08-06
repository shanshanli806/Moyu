
// To test if we implement javascript successfully;
//alert("Hello");

// nav-toggle
const hamburger = document.getElementById("nav-toggle");
const navItems = document.querySelectorAll(".nav-item");

hamburger.onclick = function () {navItems.forEach(item => { item.style.display="block";});}

window.onclick = function(event) {
  if(!event.target.matches('.nav-link')) {
    document.getElementById("nav-drop").style.display="none";
  }
}

// nav-dropdown 
function dropdown() {
  document.getElementById("nav-drop").style.display="block";
}
// if clicked anywhere on the window and we are not
// clicking on any of the navigation buttons
// then we will simply close the drop-down.
window.onclick = function(event) {
  if(!event.target.matches('.nav-link')) {
    document.getElementById("nav-drop").style.display="none";
  }
}

// user clicks on enter button and returns a welcome message.
const enter_btn = document.getElementById("enter-btn");

enter_btn.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  document.getElementById(
    "welcome-msg"
  ).innerHTML = `<h1 class="intro-msg"> WELCOME TO MY WEBSITE ${name} :) </h1>`;
  document.getElementById('intro').style.display = "none";
  // let text = `WELCOME TO MY WEBSITE ${name} :)`
  // let str = text.split("");
  // let newStr = "";
  // for(let i = 0; i < str.length; i++) {
  //   newStr += ` <span style="--i:${i+1}">  ${str[i]} </span> ` + "<span>  </span>";
  // }
  // document.getElementById(
  //   "welcome-msg"
  // ).innerHTML = newStr;
});

// click to contact me
const contact_btn = document.getElementById("contact-btn");
// display popup page
contact_btn.addEventListener("click", function () {
  document.getElementById("popup-contact").style.display = "block";
});

// close and resets form
function form_clicked() {
    document.getElementById("popup-contact").style.display = "none";
    document.getElementById("form").reset();
}



// API with dog image
const container = document.querySelector(".container");

// get the images

function loadImages() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const img = document.createElement("img");
      img.src = `${data.message}`;
      container.appendChild(img);
    });
}

//可以用了
function findMovie() {
  fetch("https://www.omdbapi.com/?i=tt0372784&apikey=d00f2bb6")
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch the data for that resource");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const img = document.createElement("img");
      img.src = `${data.Poster}`;
      container.appendChild(img);
    })
    .catch((err) => {
      console.log(err);
    });
}
