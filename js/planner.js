const tripForm =
document.getElementById("tripForm");

const tripOutput =
document.getElementById("tripOutput");

tripForm.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const destination =
document.getElementById("destination").value;

const date =
document.getElementById("date").value;

const budget =
document.getElementById("budget").value;

const travelers =
document.getElementById("travelers").value;


// Validation

if(
name === "" ||
destination === "" ||
date === "" ||
budget === "" ||
travelers === ""
){

alert("Please fill all fields");

return;

}


if(budget <= 0){

alert("Budget must be greater than 0");

return;

}


// Session Storage

const tripData = {

name,
destination,
date,
budget,
travelers

};

sessionStorage.setItem(
"tripPlan",
JSON.stringify(tripData)
);


// Display

tripOutput.innerHTML = `

<div class="bg-white shadow-lg rounded-xl p-6">

<h3 class="text-2xl font-bold mb-3">
Trip Saved Successfully
</h3>

<p><strong>Name:</strong> ${name}</p>

<p><strong>Destination:</strong> ${destination}</p>

<p><strong>Date:</strong> ${date}</p>

<p><strong>Budget:</strong> ₹${budget}</p>

<p><strong>Travelers:</strong> ${travelers}</p>

</div>

`;

tripForm.reset();

});