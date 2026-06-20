// ================= GEOLOCATION =================

const locationBtn =
document.getElementById("locationBtn");

const locationResult =
document.getElementById("locationResult");

locationBtn.addEventListener("click", () => {

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

(position) => {

locationResult.innerHTML = `

Latitude:
${position.coords.latitude}
<br>

Longitude:
${position.coords.longitude}

`;

},

() => {

locationResult.innerHTML =
"Location access denied.";

}

);

}

});






// ================= COOKIES =================

function setCookie(name,value,days){

const date = new Date();

date.setTime(
date.getTime() +
(days * 24 * 60 * 60 * 1000)
);

document.cookie =
`${name}=${value};expires=${date.toUTCString()};path=/`;

}


function getCookie(name){

const cookieName = name + "=";

const decodedCookie =
decodeURIComponent(document.cookie);

const cookieArray =
decodedCookie.split(';');

for(let cookie of cookieArray){

cookie = cookie.trim();

if(cookie.indexOf(cookieName) === 0){

return cookie.substring(
cookieName.length
);

}

}

return "";

}


const banner =
document.getElementById("welcomeBanner");

const visited =
getCookie("karwaanVisitor");

if(visited){

banner.innerHTML =
"👋 Welcome Back Explorer!";

}
else{

banner.innerHTML =
"🌍 Welcome To Karwaan - Every Journey Has A Story";

setCookie(
"karwaanVisitor",
"true",
7
);

}