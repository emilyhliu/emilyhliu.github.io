/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "key2kEC3HSQ7lE8EV" }).base(
  "appzGDjOSRllXEodh"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("animal").select({}).eachPage(gotPageOfSpecies, gotAllSpecies);

// an empty array to hold our book data
var species = [];

// callback function that receives our data
function gotPageOfSpecies(records, fetchNextPage) {
  console.log("gotPageOfSpecies()");
  // add the records from this page to our array
  species.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSpecies(err) {
  console.log("gotAllSpecies()");
  // try {
  //   showTypes();
  // } catch (error) {
  //   error.log(error);
  // }

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogSpecies();
  showSpecies();
}

// just loop through the books and console.log them
function consoleLogSpecies() {
  console.log("consoleLogSpecies()");
  species.forEach((organism) => {
    console.log("Organism:", organism);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showSpecies() {
    console.log("showSpecies()");
    species.forEach((organism) => {
        
      var organismContainer = document.createElement("div");
      organismContainer.classList.add("organism-container");
      document.querySelector(".container").append(organismContainer);

        var organismTitle = document.createElement("h1");
        organismTitle.classList.add("organism-title");
        organismTitle.innerText = organism.fields.title;
        organismContainer.append(organismTitle);

        var organismDescription = document.createElement("p");
        organismDescription.classList.add("organism-description");
        organismDescription.innerText = organism.fields.description;
        organismContainer.append(organismDescription);

        var organismImage = document.createElement("img");
        organismImage.classList.add("organism-image");
        organismImage.src = organism.fields.image[0].url;
        organismContainer.append(organismImage);


    });
  }

