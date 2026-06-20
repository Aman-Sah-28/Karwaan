

const weatherBtn =
document.getElementById("weatherBtn");

const weatherResult =
document.getElementById("weatherResult");

weatherBtn.addEventListener("click", async () => {

const city =
document.getElementById("cityInput").value;

if(city === ""){

alert("Enter a city");

return;

}

try{

const response = await fetch(
`https://wttr.in/${city}?format=j1`
);

const data = await response.json();

weatherResult.innerHTML = `

<div class="bg-white p-5 rounded-xl shadow">

<h3 class="text-2xl font-bold mb-3">
${city}
</h3>

<p>
Temperature:
${data.current_condition[0].temp_C} °C
</p>

<p>
Humidity:
${data.current_condition[0].humidity}%
</p>

<p>
Weather:
${data.current_condition[0].weatherDesc[0].value}
</p>

</div>

`;

}

catch(error){

weatherResult.innerHTML =

"<p class='text-red-500'>Unable to fetch weather data.</p>";

}

});
