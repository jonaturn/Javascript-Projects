'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map;
let mapEvent;

//classes to store data
class Workout {
    constructor(id, distance, duration, coords, date) {
        this.id = id;
        this.distance = distance;
        this.duration = duration;
        this.coords = coords;
        this.date = date;
    }


}

class Running extends Workout {
    constructor () {

    }
}

class Cycling extends Workout {
    constructor() {

    }
}

class App {
    constructor() {

    }

    //methods

    //data and arrays
}

//global variable in other.js, any global variable declared in other scripts will be available in this script, as long as this
//script is declared after the other scripts in the html file
// console.log(firstName);

//geolocation
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];

    //L is the namespace for leaflet, it has a couple of methods that we can use e.g. .map .tileLayer
map = L.map('map').setView(coords, 13); //We can use an event listener to this new map variable
console.log(map);

L.tileLayer('https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {//openstreetmap open source map to show streetview, we can also use googlemaps etc
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker(coords).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

//leaflet library handling clicks on map
    map.on("click", function(mapE) {
        form.classList.remove("hidden")
        inputDistance.focus();
        mapEvent = mapE;
        // console.log(mapEvent);
        // const {lat, lng} = mapEvent.latlng;
        // L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
        //     maxWidth: 250,
        //     minWidth: 50,
        //     autoClose: false,
        //     closeOnClick: false,
        //     className: "running-popup",
        // })).setPopupContent("Workout").openPopup();
    });//new leaflet method
}, 
function() {
alert("could not get your position");
});
}

form.addEventListener("submit", function(e) {
    //Display Marker
    e.preventDefault();

        // console.log(mapEvent);
         const {lat, lng} = mapEvent.latlng;
         L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
             maxWidth: 250,
             minWidth: 50,
             autoClose: false,
             closeOnClick: false,
             className: "running-popup",
         })).setPopupContent(`Workout: ${inputDistance.value}km`).openPopup();

             //clear input fields when submit form
    inputCadence.value = inputDuration.value = inputDistance.value = inputElevation.value = "";
})

inputType.addEventListener("change", function() {
    // console.log("change");

    //using the closest parent of inputElevation with the class ".form__row"
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    // inputCadence.classList.add("form__row--hidden");
    // inputElevation.classList.remove("form__row--hidden");   
})

