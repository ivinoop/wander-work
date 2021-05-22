
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




let overlayData = [

  {
    overallRating: 80,
    cost: 90,
    internet: 85,
    fun: 95,
    sefety: 80
  },

  {
    overallRating: 80,
    cost: 90,
    internet: 85,
    fun: 95,
    sefety: 80
  },

  {
    overallRating: 80,
    cost: 90,
    internet: 85,
    fun: 95,
    sefety: 80
  },

  {
    overallRating: 80,
    cost: 90,
    internet: 85,
    fun: 95,
    sefety: 80
  },

  {
    overallRating: 80,
    cost: 90,
    internet: 85,
    fun: 95,
    sefety: 80
  },

  {
    overallRating: 80,
    cost: 90,
    internet: 85,
    fun: 95,
    sefety: 80
  },

  {
    overallRating: 80,
    cost: 90,
    internet: 85,
    fun: 95,
    sefety: 80
  },

  {
    overallRating: 80,
    cost: 90,
    internet: 85,
    fun: 95,
    sefety: 80
  }


];

function createCardUI() {

  data.forEach((elm, i) => {
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

      
      card.addEventListener("mouseover", (event) => {
        let hover = event.target;
        createHoverUI(hover, i);
      });

      card.append(cardHeader, placeDetails, cardFooter);
      // card.append(cardContainer);
      cardContainer.append(card);
  }); 

}

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

  



function createHoverUI(hover,index) {

  // overlay.innerHTML = "";

  
    
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let overallContainer = document.createElement("div");
    let overallText = document.createElement("label");
    overallText.innerText = "Overall"
    let overallImg = document.createElement("span");
    overallImg.innerText = "⭐";
    overallText.prepend(overallImg);
    let overallProgress = document.createElement("progress");
    overallProgress.value = overlayData[index].overallRating;
    overallContainer.append(overallText, overallProgress);

    let costContainer = document.createElement("div");
    let costText = document.createElement("label");
    costText.innerText = "Cost";
    let costImg = document.createElement("span");
    costImg.innerText = "💸";
    costText.prepend(costImg);
    let costProgress = document.createElement("progress");
    costProgress.value = overlayData[index].cost;
    costContainer.append(costText, costProgress);

    let internetContainer = document.createElement("div");
    let internetText = document.createElement("label");
    internetText.innerText = "Internet";
    let internetImg = document.createElement("span");
    internetImg.innerText = "📡";
    internetText.prepend(internetImg);
    let internetProgress = document.createElement("progress");
    internetProgress.value = overlayData[index].internet;
    internetContainer.append(internetText, internetProgress);

    let funContainer = document.createElement("div");
    let funText = document.createElement("label");
    funText.innerText = "Fun";
    let funImg = document.createElement("span");
    funImg.innerText = "😆";
    funText.prepend(funImg);
    let funProgress = document.createElement("progress");
    funProgress.value = overlayData[index].fun;
    funContainer.append(funText, funProgress);

    let safeContainer = document.createElement("div");
    let safeText = document.createElement("label");
    safeText.innerText = "Safety";
    let safeImg = document.createElement("span");
    safeImg.innerText = "👮‍♀️";
    safeText.prepend(safeImg);
    let safeProgress = document.createElement("progress");
    safeProgress.value = overlayData[index].fun;
    safeContainer.append(safeText, safeProgress);
    console.log(overlayData[index]);
    overlay.append(overallContainer, costContainer, internetContainer, funContainer, safeContainer);

    hover.append(overlay);
    console.log(hover);
  //  document.body.append(overlay);
  

  
}



function popUpUI() {

}
document.body.append(cardContainer);


// createHoverUI();
createCardUI();