/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "key2kEC3HSQ7lE8EV" }).base(
  "app2hM4mShT0BAzB2"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("table").select({}).eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our book data
const songs = [];

// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  // add the records from this page to our array
  songs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSongs(err) {
  console.log("gotAllSongs()");



  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogSongs();
  showSongs();
}

// just loop through the books and console.log them
function consoleLogSongs() {
  console.log("consoleLogSongs()");
  songs.forEach((song) => {
    console.log("song:", song);
  });
}

function showSongs() {
  console.log("showSongs()");
  songs.forEach((song) => {
     
    // var songTitle = document.createElement("h1");
    // songTitle.innerText = song.fields.song_title;
    // document.body.append(songTitle);

    // var singerName = document.createElement("singer");
    // singerName.innerText = song.fields.singer;
    // document.body.append(singerName);

    // var songImage = document.createElement("img");
    // songImage.src = song.fields.cover[0].url;
    // document.body.append(songImage);

    //creating a new div container
    var songContainer = document.createElement("div");
    songContainer.classList.add("song-container");
    document.querySelector(".container").append(songContainer);

    var songTitle = document.createElement("h1");
    songTitle.classList.add("song-title");
    songTitle.innerText = song.fields.song_title;
    songContainer.append(songTitle);

    var songArtist = document.createElement("p");
    songArtist.classList.add("song-artist");
    songArtist.innerText = song.fields.singer;
    songContainer.append(songArtist);

    var songImage = document.createElement("img");
    songImage.classList.add("song-cover");
    songImage.src = song.fields.cover[0].url;
    songContainer.append(songImage);
  });


}


