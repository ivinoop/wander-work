
let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container", "container");

let data = [

  { 
    popularity: "popular",
    img: "assets/media/lisbon.jpg",
    speed: 26,

    city: "Lisbon",
    country: "Portugal",

    climate: "⛅",
    temperature: "Feels 30",
    degrees: "30",
    emojiImg: "😭",
    aqi: 18,

    expense: "1351"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/lisbon.jpg",
    speed: 26,

    city: "Lisbon",
    country: "Portugal",

    climate: "⛅",
    temperature: "Feels 30",
    degrees: "30",
    emojiImg: "😭",
    aqi: 18,

    expense: "1351"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/lisbon.jpg",
    speed: 26,

    city: "Lisbon",
    country: "Portugal",

    climate: "⛅",
    temperature: "Feels 30",
    degrees: "30",
    emojiImg: "😭",
    aqi: 18,

    expense: "1351"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/lisbon.jpg",
    speed: 26,

    city: "Lisbon",
    country: "Portugal",

    climate: "⛅",
    temperature: "Feels 30",
    degrees: "30",
    emojiImg: "😭",
    aqi: 18,

    expense: "1351"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/lisbon.jpg",
    speed: 26,

    city: "Lisbon",
    country: "Portugal",

    climate: "⛅",
    temperature: "Feels 30",
    degrees: "30",
    emojiImg: "😭",
    aqi: 18,

    expense: "1351"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/lisbon.jpg",
    speed: 26,

    city: "Lisbon",
    country: "Portugal",

    climate: "⛅",
    temperature: "Feels 30",
    degrees: "30",
    emojiImg: "😭",
    aqi: 18,

    expense: "1351"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/lisbon.jpg",
    speed: 26,

    city: "Lisbon",
    country: "Portugal",

    climate: "⛅",
    temperature: "Feels 30",
    degrees: "30",
    emojiImg: "😭",
    aqi: 18,

    expense: "1351"

  },

  { 
    popularity: "popular",
    img: "assets/media/lisbon.jpg",
    speed: 26,

    city: "Lisbon",
    country: "Portugal",

    climate: "⛅",
    temperature: "Feels 30",
    degrees: "30",
    emojiImg: "😭",
    aqi: 18,

    expense: "1351"

  }           
  
];


let hoverData = [
   {
     overallRating: "80",
     cost: "70",
     internet: "85",
     fun: "90",
     safety: "89"


   }
]

/* <div class="overlay">
    <div class="flex jcb">
      <label for="overall"><span>⭐</span>Overall</label>
      <progress id="overall" value="80" max="100">80%</progress>
    </div>
    <div class="flex jcb">
      <label for="cost"><span>💸</span>Cost</label>
      <progress id="cost" value="85" max="100">80%</progress>
    </div>
    <div class="flex jcb">
      <label for="internet"><span>📡</span>Overall</label>
      <progress id="internet" value="70" max="100">80%</progress>
    </div>
    <div class="flex jcb">
      <label for="fun"><span>😆</span>Fun</label>
      <progress id="fun" value="80" max="100">80%</progress>
    </div>
    <div class="flex jcb">
      <label for="safety"><span>👮‍♀️</span>safety</label>
      <progress id="safety" value="80" max="100">80%</progress>
    </div>
  </div> */

  


function createCardUI() {

  data.forEach((elm) => {
    let card = document.createElement("div");
    card.classList.add("card");
    
    card.style.background = `url(${elm.img}) center center no-repeat`;
    
    card.style.backgroundSize = "cover";
    // let cardContainer = document.createElement("div");
    // cardContainer.classList.add("card-container");
    
   
    
    let cardHeader = document.createElement("header");
    cardHeader.classList.add("flex", "jcb", "aic");
    let popularityRanking = document.createElement("span");
    popularityRanking.classList.add("popularity", "upper");
    popularityRanking.innerText = elm.popularity;
    let connectivity = document.createElement("div");
    connectivity.classList.add("connectivity", "flex", "aic");
    let range = document.createElement("i");
    range.classList.add("fas", "fa-wifi");
    let dataSpeed = document.createElement("div");
    dataSpeed.classList.add("data-speed", "flex", "column", "text-center");
    let speed = document.createElement("span");
    speed.classList.add("speed");
    speed.innerText = elm.speed;
    let mbps = document.createElement("small");
     mbps.innerText = "Mbps";
     dataSpeed.append(speed, mbps);
     connectivity.append(range, dataSpeed);
     cardHeader.append(popularityRanking, connectivity);

     let placeDetails = document.createElement("div");
     placeDetails.classList.add("place-details");
     let city = document.createElement("h3");
     city.innerText = elm.city;
     let country = document.createElement("h5");
      country.innerText = elm.country;
      placeDetails.append(city, country);

      let cardFooter = document.createElement("footer");
      cardFooter.classList.add("footer", "flex", "jcb");
      let climate = document.createElement("div");
      climate.classList.add("climate", "flex", "aic");
      let climateImg = document.createElement("span");
      climateImg.innerText = elm.climate;
      let temperature = document.createElement("div");
      temperature.classList.add("temperature", "flex", "column", "text-center");
      let temperatureDetails = document.createElement("small");
      temperatureDetails.innerText = elm.temperature;
      let temperatureInDegrees = document.createElement("span");
      temperatureInDegrees.innerText = elm.degrees;
      temperature.append(temperatureDetails, temperatureInDegrees);
      let emoji = document.createElement("div");
      emoji.classList.add("emoji", "flex");
      let emojiImg = document.createElement("span");
      emojiImg.innerText = elm.emojiImg;
      emoji.append(emojiImg);
      let aqi = document.createElement("div");
      aqi.classList.add("aqi", "flex", "column");
      let aqiDetails = document.createElement("small");
      aqiDetails.innerText = "AQ1";
      let aqiIndex = document.createElement("small");
      aqiIndex.innerText = elm.aqi;
      aqi.append(aqiDetails, aqiIndex);
      climate.append(climateImg, temperature, emoji, aqi);

      let expense = document.createElement("div");
      expense.classList.add("expense");
      let expenseDetails = document.createElement("h5");
      expenseDetails.innerText = elm.expense;
      expense.append(expenseDetails);

      cardFooter.append(climate, expense);

      
      

      card.append(cardHeader, placeDetails, cardFooter);
      // card.append(cardContainer);
      cardContainer.append(card);
  }); 

}


document.body.append(cardContainer);


// createHoverUI();
createCardUI();