

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});




const destinations = [

{
    name: "Assam",
    type: "Nature",
    image: "assets/images/assam.jpg",
    description:
    "Experience tea gardens, Kaziranga National Park and the rich culture of Northeast India."
},

{
    name: "Goa",
    type: "Beach",
    image: "assets/images/goa.jpg",
    description:
    "Famous for beaches, nightlife and Portuguese heritage."
},

{
    name: "Kerala",
    type: "Backwaters",
    image: "assets/images/kerala.jpg",
    description:
    "God's Own Country with serene backwaters and lush greenery."
},

{
    name: "Rajasthan",
    type: "Heritage",
    image: "assets/images/rajasthan.jpg",
    description:
    "Land of forts, palaces and royal experiences."
},

{
    name: "Kashmir",
    type: "Mountains",
    image: "assets/images/kashmir.jpg",
    description:
    "Paradise on Earth with snow-capped mountains and valleys."
},

{
    name: "Meghalaya",
    type: "Adventure",
    image: "assets/images/meghalaya.jpg",
    description:
    "Home of living root bridges and breathtaking waterfalls."
}

];




const container = document.getElementById("destination-container");

destinations.forEach(destination => {

container.innerHTML += `

<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

    <img src="${destination.image}"
        class="h-56 w-full object-cover">

    <div class="p-5">

        <h3 class="text-2xl font-bold mb-2">
            ${destination.name}
        </h3>

        <p class="text-gray-600 mb-4">
            ${destination.type}
        </p>

        <div class="flex justify-between">

            <button
                class="details-btn bg-yellow-400 px-4 py-2 rounded-lg"
                data-name="${destination.name}">

                Know More

            </button>

            <button
                class="save-btn text-red-500 text-2xl">

                ❤

            </button>

        </div>

    </div>

</div>

`;

});




const modal = document.getElementById("destinationModal");

const modalTitle = document.getElementById("modalTitle");

const modalImage = document.getElementById("modalImage");

const modalDescription =
document.getElementById("modalDescription");

const closeModal =
document.getElementById("closeModal");


document.addEventListener("click", function(e){

if(e.target.classList.contains("details-btn")){

const selectedDestination =
destinations.find(
d => d.name === e.target.dataset.name
);

modalTitle.textContent =
selectedDestination.name;

modalImage.src =
selectedDestination.image;

modalDescription.textContent =
selectedDestination.description;

modal.classList.remove("hidden");

modal.classList.add("flex");

}

});


closeModal.addEventListener("click", () => {

modal.classList.add("hidden");

});






const carouselData = [

{
    title:"Goa",
    image:"assets/images/goa.jpg",
    description:"Sun, sand and unforgettable nightlife."
},

{
    title:"Kashmir",
    image:"assets/images/kashmir.jpg",
    description:"Snow-covered mountains and valleys."
},

{
    title:"Kerala",
    image:"assets/images/kerala.jpg",
    description:"Backwaters and peaceful houseboats."
},

{
    title:"Meghalaya",
    image:"assets/images/meghalaya.jpg",
    description:"Clouds, waterfalls and adventure."
}

];

let currentSlide = 0;

const carouselImage =
document.getElementById("carousel-image");

const carouselTitle =
document.getElementById("carousel-title");

const carouselDescription =
document.getElementById("carousel-description");


function updateCarousel(){

carouselImage.src =
carouselData[currentSlide].image;

carouselTitle.textContent =
carouselData[currentSlide].title;

carouselDescription.textContent =
carouselData[currentSlide].description;

}


document.getElementById("nextBtn")
.addEventListener("click",()=>{

currentSlide++;

if(currentSlide >= carouselData.length){

currentSlide = 0;

}

updateCarousel();

});


document.getElementById("prevBtn")
.addEventListener("click",()=>{

currentSlide--;

if(currentSlide < 0){

currentSlide =
carouselData.length - 1;

}

updateCarousel();

});




const recommendation =
document.getElementById("recommendation");

document.querySelectorAll(".mood-btn")
.forEach(button => {

button.addEventListener("click", () => {

const mood = button.textContent.trim();

let place = "";

switch(mood){

    case "Adventure":
    place = "Meghalaya";
    break;

    case "Nature":
    place = "Assam";
    break;

    case "Beach":
    place = "Goa";
    break;

    case "Spiritual":
    place = "Varanasi";
    break;

    case "Luxury":
    place = "Udaipur";
    break;

}

recommendation.innerHTML =
`Recommended Destination: ${place}`;

});

});




const favoritesContainer =
document.getElementById("favorites-container");

function displayFavorites(){

favoritesContainer.innerHTML = "";

const favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

favorites.forEach(place => {

favoritesContainer.innerHTML += `

<div class="bg-gray-100 p-4 rounded-xl shadow">

<h3 class="text-xl font-bold">
${place}
</h3>

</div>

`;

});

}

displayFavorites();


document.addEventListener("click", function(e){

if(e.target.classList.contains("save-btn")){

const card =
e.target.closest(".bg-white");

const destination =
card.querySelector("h3").textContent;

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

if(!favorites.includes(destination)){

favorites.push(destination);

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

displayFavorites();

alert("Added to Favorites ❤️");

}

}

});






const postStory =
document.getElementById("postStory");

const storyContainer =
document.getElementById("storyContainer");

postStory.addEventListener("click", () => {

const name =
document.getElementById("storyName").value;

const story =
document.getElementById("storyText").value;

if(name === "" || story === ""){

alert("Please enter story details");

return;

}

storyContainer.innerHTML += `

<div class="bg-gray-100 p-5 rounded-xl shadow">

<h3 class="text-xl font-bold mb-2">
${name}
</h3>

<p>
${story}
</p>

</div>

`;

document.getElementById("storyName").value = "";

document.getElementById("storyText").value = "";

});








const canvas =
document.getElementById("passportCanvas");

const ctx =
canvas.getContext("2d");

document.getElementById("generatePassport")
.addEventListener("click", () => {

const name =
document.getElementById("passportName").value;

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle = "#facc15";
ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle = "black";

ctx.font = "30px Arial";

ctx.fillText(
"KARWAAN EXPLORER PASSPORT",
40,
80
);

ctx.font = "26px Arial";

ctx.fillText(
name.toUpperCase(),
40,
170
);

ctx.fillText(
"Every Journey Has A Story",
40,
240
);

});







const dragItems =
document.querySelectorAll(".drag-item");

const dropZone =
document.getElementById("dropZone");

dragItems.forEach(item => {

item.addEventListener("dragstart", () => {

item.classList.add("opacity-50");

});

});


dropZone.addEventListener(
"dragover",
(e) => {

e.preventDefault();

}
);


dragItems.forEach(item => {

item.addEventListener("dragend", () => {

item.classList.remove("opacity-50");

});

});


dropZone.addEventListener(
"drop",
(e) => {

e.preventDefault();

const dragged =
document.querySelector(".opacity-50");

dropZone.appendChild(
dragged.cloneNode(true)
);

}
);









document.getElementById("copyItinerary")
.addEventListener("click", async () => {

try{

await navigator.clipboard.writeText(
dropZone.innerText
);

alert(
"Itinerary copied successfully!"
);

}

catch{

alert(
"Copy failed."
);

}

});





document.getElementById("fullscreenBtn")
.addEventListener("click", () => {

const image =
document.getElementById("galleryImage");

if(image.requestFullscreen){

image.requestFullscreen();

}

});




document.getElementById("shareBtn")
.addEventListener("click", async () => {

if(navigator.share){

await navigator.share({

title: "Karwaan",

text:
"Explore India with Karwaan!",

url:
window.location.href

});

}
else{

alert(
"Share API not supported."
);

}

});





const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

e.preventDefault();

const name =
document.getElementById("contactName").value;

const email =
document.getElementById("contactEmail").value;

const message =
document.getElementById("contactMessage").value;

if(
name === "" ||
email === "" ||
message === ""
){

alert(
"Please fill all fields."
);

return;

}

alert(
"Message Sent Successfully!"
);

contactForm.reset();

});



window.addEventListener("load",()=>{

document.getElementById("loader")
.style.display = "none";

});


document.getElementById("searchBtn")
.addEventListener("click", () => {

const search =
document.getElementById("searchInput")
.value
.toLowerCase();

const found =
destinations.find(
d => d.name.toLowerCase() === search
);

if(found){

document.getElementById("explore")
.scrollIntoView({
behavior:"smooth"
});

alert(
`Found ${found.name} in Explore Destinations`
);

}
else{

alert(
"Destination not found"
);

}

});
