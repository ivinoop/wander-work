
let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container", "container");
let searchBar = document.querySelector(".search-container");
let perfect =  `rgb(98,223,116)`;
let moderate = `rgb(255,202,61)`;
let expensive = `rgb(255,202,61)`;


let data = [

  { 
    popularity: "popular",
    img: "assets/media/places-img/bengaluru-india-600px.jpg",
    speed: 19,

    city: "Bengaluru",
    country: "India",

    climate: "⛅",
    temperature: "Feels 31°C",
    degrees: "27°C",
    emojiImg: "😝",
    aqi: 38,

    expense: "728"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/places-img/goa.jpg",
    speed: 9,

    city: "Goa",
    country: "India",

    climate: "⛅",
    temperature: "Feels 34°C",
    degrees: "28°C",
    emojiImg: "🙂",
    aqi: 45,

    expense: "1,129"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/places-img/mumbai.jpg",
    speed: 9,

    city: "Mumbai",
    country: "India",

    climate: "⛅",
    temperature: "Feels 42°C",
    degrees: "32°C",
    emojiImg: "🙂",
    aqi: 67,

    expense: "1351"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/places-img/macleod.jpg",
    speed: 20,

    city: "McLeod Ganj",
    country: "India",

    climate: "⛅",
    temperature: "Feels 22°C",
    degrees: "22°C",
    emojiImg: "😝",
    aqi: 90,

    expense: "790"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/places-img/pokhra.jpg",
    speed: 7,

    city: "Pokhara",
    country: "Nepal",

    climate: "⛅",
    temperature: "Feels 30°C",
    degrees: "28°C",
    emojiImg: "😝",
    aqi: 61,

    expense: "585"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/places-img/berlin-germany-600px.jpg",
    speed: 32,

    city: "Berlin",
    country: "Germany",

    climate: "⛅",
    temperature: "Feels 18°C",
    degrees: "18°C",
    emojiImg: "🧐",
    aqi: 25,

    expense: "2,518"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/places-img/singapore-singapore-600px.jpg",
    speed: 87,

    city: "Singapore",
    country: "Singapore",

    climate: "⛅",
    temperature: "Feels 40°C",
    degrees: "31°C",
    emojiImg: "🙂",
    aqi: 65,

    expense: "2,321"

  },

  { 
    popularity: "popular",
    img: "assets/media/places-img/london-united-kingdom-600px.jpg",
    speed: 23,

    city: "London",
    country: "United Kingdom",

    climate: "⛅",
    temperature: "Feels 11°C",
    degrees: "13°C",
    emojiImg: "🧐",
    aqi: 27,

    expense: "3,554"

  },
  
  { 
    popularity: "popular",
    img: "assets/media/places-img/sydney-australia-600px.jpg",
    speed: 19,

    city: "Sydney",
    country: "Australia",

    climate: "⛅",
    temperature: "Feels 17°C",
    degrees: " 17°C",
    emojiImg: "🧐",
    aqi: 54,

    expense: "3,234"

  },

  { 
    popularity: "popular",
    img: "assets/media/places-img/paris-france-600px.jpg",
    speed: 32,

    city: "Paris",
    country: "France",

    climate: "⛅",
    temperature: "Feels 17°C",
    degrees: "17°C",
    emojiImg: "🧐",
    aqi: 25,

    expense: "3,389"

  },


  { 
    popularity: "popular",
    img: "assets/media/places-img/tokyo.jpg",
    speed: 31,

    city: "Tokyo",
    country: "Japan",

    climate: "⛅",
    temperature: "Feels 24°C",
    degrees: "24°C",
    emojiImg: "🧐",
    aqi: 21,

    expense: "2,614"

  },

  { 
    popularity: "popular",
    img: "assets/media/places-img/new-york-city-ny-united-states-600px.jpg",
    speed: 34,

    city: "New York City,NY",
    country: "United States",

    climate: "⛅",
    temperature: "Feels 21°C",
    degrees: "21°C",
    emojiImg: "🧐",
    aqi: 11,

    expense: "3,889"

  },

  { 
    popularity: "popular",
    img: "assets/media/places-img/humburg.jpg",
    speed: 38,

    city: "Hamburg",
    country: "Germany",

    climate: "⛅",
    temperature: "Feels 13°C",
    degrees: "14°C ",
    emojiImg: "🧐",
    aqi: 21,

    expense: "3,118"

  },

  { 
    popularity: "popular",
    img: "assets/media/places-img/colombo.jpg",
    speed: 8,

    city: "Colombo",
    country: "Srilanka",

    climate: "⛅",
    temperature: "Feels 39°C",
    degrees: "30°C",
    emojiImg: "😝",
    aqi: 11,

    expense: "732"

  },

  { 
    popularity: "popular",
    img: "assets/media/lisbon.jpg",
    speed: 26,

    city: "Lisbon",
    country: "Portugal",

    climate: "⛅",
    temperature: "Feels 21°C",
    degrees: "21°C",
    emojiImg: "🙂",
    aqi: 27,

    expense: "1683"

  },

  { 
    popularity: "popular",
    img: "assets/media/places-img/kuching.jpg",
    speed: 26,

    city: "Kuching",
    country: "Malaysia",

    climate: "⛅",
    temperature: "Feels 41°C",
    degrees: "31°C",
    emojiImg: "😝",
    aqi: 38,

    expense: "728"

  },
  
];



function createCardUI(data) {
  console.log(data,"inside");
  cardContainer.innerHTML = "";
  data.forEach((elm, i) => {
    let card = document.createElement("div");
    card.classList.add("card");
    
    card.style.background = `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${elm.img}) center center no-repeat`;
    
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
      aqiDetails.innerText = "AQI";
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

      
      
      card.addEventListener("click", (event) => {
        let parent = event.target;
        createPopUpUI(parent, i);
      })

      card.append(cardHeader, placeDetails, cardFooter);
      // card.append(cardContainer);
      cardContainer.append(card);
  }); 

}


function createPopUpUI(e, index) {
  
  let popUpContainer = document.createElement("div");
  popUpContainer.classList.add("popUpContainer");
  let popUpHeader = document.createElement("header");
  
  popUpHeader.style.background = `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${data[index].img}) center center no-repeat`;
  popUpHeader.style.backgroundSize = "cover";

  let cityName = document.createElement("h2");
  cityName.innerText = data[index].city;
  let countryName = document.createElement("h5");
  countryName.innerText = data[index].country;
  let btn = document.createElement("a");
  btn.classList.add("btn", "btn-primary");
  btn.innerText = `Learn to work remotely from ${data[index].city}`;
  let headerBottom = document.createElement("div");
  headerBottom.classList.add("flex", "jcb", "headerBottom");
  let placeDetails = document.createElement("div");
  placeDetails.classList.add("flex");
  let cost = document.createElement("span");
  cost.innerText = `Cost of Living`;
  let rightArrowOne = document.createElement("i");
  rightArrowOne.classList.add("fas", "fa-angle-double-right");
  cost.append(rightArrowOne);
  let country = document.createElement("span");
  country.innerText = `${data[index].country}`;
  let rightArrowTwo = document.createElement("i");
  rightArrowTwo.classList.add("fas", "fa-angle-double-right");
  country.append(rightArrowTwo);
  let city = document.createElement("span");
  city.innerText = `${data[index].city}`;
  placeDetails.append(cost, country, city);
  let closeBtn = document.createElement("a");
  closeBtn.classList.add("btn", "btn-secondary", "closeBtn");
  closeBtn.innerText = "CLOSE";
  closeBtn.addEventListener("click", () => {
    popUpContainer.style.display = "none";
  });
  headerBottom.append(placeDetails);
  popUpHeader.append(cityName, countryName, btn, headerBottom, closeBtn);


  let dataContainer = document.createElement("div");
  dataContainer.classList.add("data-container");
  let dataHeader = document.createElement("header");
  dataHeader.classList.add("flex", "jcb");
  let scores = document.createElement("a");
  scores.classList.add("active");
  scores.innerText = `Scores`;
  let digitalNomad = document.createElement("a");
  digitalNomad.innerText = `Digital Nomad Guide`;
  let people = document.createElement("a");
  people.innerText = `People`;
  let costOfLiving = document.createElement("a");
  costOfLiving.innerText = `Cost Of Living`;
  let pros = document.createElement("a");
  pros.innerText = `Pros and Cons`;
  let reviews = document.createElement("a");
  reviews.innerText = `Reviews`;
  let weather = document.createElement("a");
  weather.innerText = `Weather`;
  let trends = document.createElement("a");
  trends.innerText = `Trends`;
  let chat = document.createElement("a");
  chat.innerText = `Chat`;
  let neighborhood = document.createElement("a");
  neighborhood.innerText = `Neighborhoods`;

  let dataBody = document.createElement("div");
  dataBody.classList.add("dataBody", "flex");
  let dataBoxOne = document.createElement("div");
  dataBoxOne.classList.add("flex-50", "flex", "column", "boxOne");

  let rowOne = document.createElement("div");
  rowOne.classList.add("flex", "jcb", "aic", "row");
  let overallScore = document.createElement("h6");
  overallScore.innerText = `Overall Score`;
  let overallImg = document.createElement("span");
  overallImg.innerText = "⭐";
  overallScore.prepend(overallImg);
  let overallPercentage = document.createElement("div");
  overallPercentage.classList.add("percentage");
  let overallBgColor = document.createElement("div");
  overallBgColor.style.backgroundColor = perfect ;
  overallBgColor.style.width = "80%";
  let overallPercentageText = document.createElement("span");
  overallPercentageText.innerText = overallData[index].overall;
  overallPercentage.append(overallBgColor, overallPercentageText);
  rowOne.append(overallScore, overallPercentage);

  let rowTwo = document.createElement("div");
  rowTwo.classList.add("flex", "jcb", "aic", "row");
  let temperatureScore = document.createElement("h6");
  temperatureScore.innerText = `Temperature (now)`;
  let temperatureImg = document.createElement("span");
  temperatureImg.innerText = "⛅";
  temperatureScore.prepend(temperatureImg);
  let temperaturePercentage = document.createElement("div");
  temperaturePercentage.classList.add("percentage");
  let temperatureBgColor = document.createElement("div");
  temperatureBgColor.style.backgroundColor = createBackground(overallData[index].temperature);
  temperatureBgColor.style.width = createWidth(overallData[index].temperature);
  let temperaturePercentageText = document.createElement("span");
  temperaturePercentageText.innerText = overallData[index].temperature;
  temperaturePercentage.append(temperatureBgColor, temperaturePercentageText);
  rowTwo.append(temperatureScore, temperaturePercentage);


  let rowThree = document.createElement("div");
  rowThree.classList.add("flex", "jcb", "aic", "row");
  let internetScore = document.createElement("h6");
  internetScore.innerText = `Internet`;
  let internetImg = document.createElement("span");
  internetImg.innerText = "📡";
  internetScore.prepend(internetImg);
  let internetPercentage = document.createElement("div");
  internetPercentage.classList.add("percentage");
  let internetBgColor = document.createElement("div");
  internetBgColor.style.backgroundColor = createBackground(overallData[index].internet);
  internetBgColor.style.width = createWidth(overallData[index].internet);
  let internetPercentageText = document.createElement("span");
  internetPercentageText.innerText = overallData[index].internet;
  internetPercentage.append(internetBgColor, internetPercentageText);
  rowThree.append(internetScore, internetPercentage);

  let dataBoxTwo = document.createElement("div");
  dataBoxTwo.classList.add("flex-50", "flex", "column", "boxTwo");

  let rowFour = document.createElement("div");
  rowFour.classList.add("flex", "jcb", "aic", "row");
  let safetyScore = document.createElement("h6");
  safetyScore.innerText = `Safety`;
  let safetyImg = document.createElement("span");
  safetyImg.innerText = "👮‍♀️";
  safetyScore.prepend(safetyImg);
  let safetyPercentage = document.createElement("div");
  safetyPercentage.classList.add("percentage");
  let safetyBgColor = document.createElement("div");
  safetyBgColor.style.backgroundColor = createBackground(overallData[index].safety);
  safetyBgColor.style.width = createWidth(overallData[index].safety);
  let safetyPercentageText = document.createElement("span");
  safetyPercentageText.innerText = overallData[index].safety;
  safetyPercentage.append(safetyBgColor, safetyPercentageText);
  rowFour.append(safetyScore, safetyPercentage);

  let rowFive = document.createElement("div");
  rowFive.classList.add("flex", "jcb", "aic", "row");
  let expenseScore = document.createElement("h6");
  expenseScore.innerText = `Cost`;
  let expenseImg = document.createElement("span");
  expenseImg.innerText = "💸";
  expenseScore.prepend(expenseImg);
  let expensePercentage = document.createElement("div");
  expensePercentage.classList.add("percentage");
  let expenseBgColor = document.createElement("div");
  expenseBgColor.style.backgroundColor = createBackground(overallData[index].expenses);
  expenseBgColor.style.width = createWidth(overallData[index].expenses);
  let expensePercentageText = document.createElement("span");
  expensePercentageText.innerText = overallData[index].expenses;
  expensePercentage.append(expenseBgColor, expensePercentageText);
  rowFive.append(expenseScore, expensePercentage);

  let rowSix = document.createElement("div");
  rowSix.classList.add("flex", "jcb", "aic", "row");
  let aqiScore = document.createElement("h6");
  aqiScore.innerText = `Air quality (annual)`;
  let aqiImg = document.createElement("span");
  aqiImg.innerText = "☁☁️";
  aqiScore.prepend(aqiImg);
  let aqiPercentage = document.createElement("div");
  aqiPercentage.classList.add("percentage");
  let aqiBgColor = document.createElement("div");
  aqiBgColor.style.backgroundColor = createBackground(overallData[index].aqi);
  aqiBgColor.style.width = createWidth(overallData[index].aqi);
  let aqiPercentageText = document.createElement("span");
  aqiPercentageText.innerText = overallData[index].aqi;
  aqiPercentage.append(aqiBgColor, aqiPercentageText);
  rowSix.append(aqiScore, aqiPercentage);

  let popUpFooter = document.createElement("footer");
  let footerText = document.createElement("small");
  footerText.innerText = `Values derived from national statistics, might differ from the city itself. Last updated 2021-05-22T07:05:48+00:00`;
  popUpFooter.append(footerText);

  dataBoxTwo.append(rowFour, rowFive, rowSix);

  dataBoxOne.append(rowOne, rowTwo, rowThree);
  dataBody.append(dataBoxOne, dataBoxTwo);


  dataHeader.append(scores, digitalNomad, people, costOfLiving, pros, reviews, weather, trends, chat, neighborhood);
  dataContainer.append(dataHeader, dataBody);

  popUpContainer.append(popUpHeader, dataContainer, popUpFooter);
  
  document.body.append(popUpContainer);



}
document.body.append(cardContainer);





function createWidth(str) {

  if(str.includes("Perfect") || str.includes("Cheap") || str.includes("Great") || str.includes("Super")) {
    let width = "90%";
    return width;
  }
  if(str.includes("Moderate")) {
    let width = "50%";
    return width;
  }
  if(str.includes("Good") || str.includes("Okay") || str.includes("Fast")) {
    let width = "60%";
    return width;
  }
  
  if(str.includes("Pricey")) {
    let width = "40%";
    return width;
  }

  if(str.includes("expensive") || str.includes("Pricey")) {
    let width = "30%";
    return width;
  }

  if(str.includes("Affordable")) {
    let width = "70%";
    return width;
  }

  if(str.includes("Nice")) {
    let width = "75%";
    return width;
  }

   if(str.includes("hot") || str.includes("cold")) {
     let width = "25%";
     return width;
   }

}


function createBackground(str) {

  
  if(str.includes("Moderate") || str.includes("Good") || str.includes("Okay") || str.includes("Fast")) {
    let color = moderate;
    return color;
  }
  
  if(str.includes("Cheap") || str.includes("Nice") ||  str.includes("Perfect") || str.includes("Affordable") || str.includes("Great") || str.includes("Super")) {
    let color = perfect
    return color;
  }
  if(str.includes("Pricey") || str.includes("hot") || str.includes("cold") || str.includes("expensive") || str.includes("Pricey")) {
    let color = "red";
    return color;
  }

  if(str.includes("Expensive")) {
    let color = expensive;
    return expensive;
  }

  

}

searchBar.addEventListener("input", searchCards);

function searchCards(e) {
  
  let searchCard = data.filter((elm) => elm.city.toUpperCase().includes(e.target.value) || elm.city.toLowerCase().includes(e.target.value));
  createCardUI(searchCard);
}

createCardUI(data);