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
  songs.forEach((song, i) => {
    console.log("song:", song);
  });
}

function showSongs() {
  console.log("showSongs()");
  songs.forEach((song, i) => {
 
    // var songTitle = document.createElement("h1");
    // songTitle.innerText = song.fields.song_title;
    // document.body.append(songTitle);

    // var singerName = document.createElement("singer");
    // singerName.innerText = song.fields.singer;
    // document.body.append(singerName);

    // var songImage = document.createElement("img");
    // songImage.src = song.fields.cover[0].url;
    // document.body.append(songImage);

    //creating a new div container for song title and artist


    var songContainer = document.createElement("div");
    songContainer.classList.add("song-container");
    if (i === 0) {
      songContainer.style.top = "295px";
      songContainer.style.left = "645px";
      songContainer.style.width = "80px";
      songContainer.style.height = "80px";
      songContainer.style.zIndex = "39";
      } else if (i === 1) {
      songContainer.style.top = "260px";
      songContainer.style.left = "400px";
      songContainer.style.width = "480px";
      songContainer.style.height = "480px";
      songContainer.style.zIndex = "8";
      } else if (i === 2) {
        songContainer.style.top = "250px";
        songContainer.style.left = "390px";
        songContainer.style.width = "500px";
        songContainer.style.height = "500px";
        songContainer.style.zIndex = "7";
      }else if (i === 3) {
        songContainer.style.top = "315px";
      songContainer.style.left = "735px";
      songContainer.style.width = "390px";
      songContainer.style.height = "390px";
      songContainer.style.zIndex = "35";
      }else if (i === 4) {
      songContainer.style.visibility = "hidden";
      }else if (i === 5) {
        songContainer.style.top = "50px";
        songContainer.style.left = "610px";
        songContainer.style.width = "700px";
        songContainer.style.height = "700px";
        songContainer.style.zIndex = "2";
      }else if (i === 6) {
        songContainer.style.top = "210px";
        songContainer.style.left = "360px";
        songContainer.style.width = "60px";
        songContainer.style.height = "60px";
        songContainer.style.zIndex = "40";
      }else if (i === 7) {
      songContainer.style.top = "510px";
      songContainer.style.left = "785px";
      songContainer.style.width = "45px";
      songContainer.style.height = "45px";
      songContainer.style.zIndex = "40";
      }else if (i === 8) {
        songContainer.style.top = "200px";
        songContainer.style.left = "350px";
        songContainer.style.width = "80px";
        songContainer.style.height = "80px";
        songContainer.style.zIndex = "39";
      }else if (i === 9) {
      songContainer.style.top = "500px";
      songContainer.style.left = "775px";
      songContainer.style.width = "65px";
      songContainer.style.height = "65px";
      songContainer.style.zIndex = "39";
      }else if (i === 10) {
        songContainer.style.top = "90px";
        songContainer.style.left = "310px";
        songContainer.style.width = "440px";
        songContainer.style.height = "440px";
        songContainer.style.zIndex = "11";
    }else if (i === 11) {
      songContainer.style.top = "305px";
      songContainer.style.left = "725px";
      songContainer.style.width = "410px";
      songContainer.style.height = "410px";
      songContainer.style.zIndex = "34";
    }else if (i === 12) {
      songContainer.style.top = "25px";
      songContainer.style.left = "110px";
      songContainer.style.width = "350px";
      songContainer.style.height = "350px";
      songContainer.style.zIndex = "31";
    }else if (i === 13) {
      songContainer.style.top = "10px";
      songContainer.style.left = "190px";
      songContainer.style.width = "580px";
      songContainer.style.height = "580px";
      songContainer.style.zIndex = "4";
    }else if (i === 14) {
      songContainer.style.visibility = "hidden";
    }else if (i === 15) {
      songContainer.style.top = "490px";
      songContainer.style.left = "765px";
      songContainer.style.width = "85px";
      songContainer.style.height = "85px";
      songContainer.style.zIndex = "38";
    }else if (i === 16) {
      songContainer.style.top = "190px";
      songContainer.style.left = "340px";
      songContainer.style.width = "100px";
      songContainer.style.height = "100px";
      songContainer.style.zIndex = "38";
    }else if (i === 17) {
      songContainer.style.visibility = "hidden";
    }else if (i === 18) {
      songContainer.style.top = "0px";
      songContainer.style.left = "180px";
      songContainer.style.width = "600px";
      songContainer.style.height = "600px";
      songContainer.style.zIndex = "3";
    }else if (i === 19) {
      songContainer.style.top = "40px";
      songContainer.style.left = "600px";
      songContainer.style.width = "720px";
      songContainer.style.height = "720px";
      songContainer.style.zIndex = "1";
    }else if (i === 20) {
      songContainer.style.top = "305px";
      songContainer.style.left = "655px";
      songContainer.style.width = "60px";
      songContainer.style.height = "60px";
      songContainer.style.zIndex = "40";
    }else if (i === 21) {
      songContainer.style.top = "180px";
      songContainer.style.left = "330px";
      songContainer.style.width = "120px";
      songContainer.style.height = "120px";
      songContainer.style.zIndex = "37";
    }else if (i === 22) {
      songContainer.style.top = "240px";
      songContainer.style.left = "380px";
      songContainer.style.width = "520px";
      songContainer.style.height = "520px";
      songContainer.style.zIndex = "6";
    }else if (i === 23) {
      songContainer.style.visibility = "hidden";
    }else if (i === 24) {
      songContainer.style.top = "15px";
      songContainer.style.left = "100px";
      songContainer.style.width = "370px";
      songContainer.style.height = "370px";
      songContainer.style.zIndex = "30";
    }else if (i === 25) {
      songContainer.style.top = "480px";
      songContainer.style.left = "755px";
      songContainer.style.width = "105px";
      songContainer.style.height = "105px";
      songContainer.style.zIndex = "37";
    }else if (i === 26) {
      songContainer.style.top = "80px";
        songContainer.style.left = "300px";
        songContainer.style.width = "460px";
        songContainer.style.height = "460px";
        songContainer.style.zIndex = "10";
    }else if (i === 27) {
      songContainer.style.top = "295px";
      songContainer.style.left = "715px";
      songContainer.style.width = "430px";
      songContainer.style.height = "430px";
      songContainer.style.zIndex = "33";
    }else if (i === 28) {
      songContainer.style.top = "470px";
      songContainer.style.left = "745px";
      songContainer.style.width = "125px";
      songContainer.style.height = "125px";
      songContainer.style.zIndex = "36";
    }else if (i === 29) {
      songContainer.style.top = "10px";
      songContainer.style.left = "580px";
      songContainer.style.width = "450px";
      songContainer.style.height = "450px";
      songContainer.style.zIndex = "20";
    }else if (i === 30) {
      songContainer.style.top = "285px";
      songContainer.style.left = "635px";
      songContainer.style.width = "100px";
      songContainer.style.height = "100px";
      songContainer.style.zIndex = "38";
    }else if (i === 31) {
      songContainer.style.top = "230px";
      songContainer.style.left = "370px";
      songContainer.style.width = "540px";
      songContainer.style.height = "540px";
      songContainer.style.zIndex = "6";
    }else if (i === 32) {
      songContainer.style.visibility = "hidden";
    }else if (i === 33) {
      songContainer.style.top = "220px";
      songContainer.style.left = "360px";
      songContainer.style.width = "560px";
      songContainer.style.height = "560px";
      songContainer.style.zIndex = "5";
    }else if (i === 34) {
      songContainer.style.top = "275px";
      songContainer.style.left = "625px";
      songContainer.style.width = "120px";
      songContainer.style.height = "120px";
      songContainer.style.zIndex = "37";
    }else if (i === 35) {
      songContainer.style.top = "285px";
      songContainer.style.left = "705px";
      songContainer.style.width = "450px";
      songContainer.style.height = "450px";
      songContainer.style.zIndex = "32";
    }else if (i === 36) {
      songContainer.style.top = "30px";
      songContainer.style.left = "590px";
      songContainer.style.width = "740px";
      songContainer.style.height = "740px";
      songContainer.style.zIndex = "0";
    }else if (i === 37) {
      songContainer.style.visibility = "hidden";
    }
    document.querySelector(".container").append(songContainer);
 
    var songTitle = document.createElement("h1");
    songTitle.classList.add("song-title");
    songTitle.innerText = song.fields.song_title;
    songContainer.append(songTitle);

    var songArtist = document.createElement("p");
    songArtist.classList.add("song-artist");
    songArtist.innerText = song.fields.singer;
    songContainer.append(songArtist);


    // //creating a new div container for song cover
    // var coverContainer = document.createElement("div");
    // coverContainer.classList.add("cover-container");
    // document.querySelector(".container").append(coverContainer);

    var songCover = document.createElement("img");
    songCover.classList.add("song-cover");
    songCover.src = song.fields.cover[0].url;
    songContainer.append(songCover);
    
    // var songNumber = document.createElement("p");
    // songNumber.classList.add("song-number");
    // songNumber.innerText = song.fields.number;
    // songContainer.append(songNumber);



  
      


    


    

    //      get genre field from airtable
    // loop through the array and add each genre as
    // a class to the song container
    var songGenre = song.fields.genre;
    songGenre.forEach(function(genre){
      songContainer.classList.add(genre)
    })


    // clicking on filter by working
    // change.borderColor of working genres to 100%
    // else change to white

    var filterWorking = document.querySelector(".working");
    filterWorking.addEventListener("click", function() {
      if (songContainer.classList.contains("working")) {
        songContainer.style.borderColor = "white";
      } else {
        songContainer.style.borderColor = "gray";
      }
    })

    // filter by playing game music
    var filterPlaying = document.querySelector(".playing");
    filterPlaying.addEventListener("click", function() {
      if (songContainer.classList.contains("playing_games")) {
        songContainer.style.borderColor = "white";
      } else {
        songContainer.style.borderColor = "gray";
      }
    });

    // filter by sleeping music
    var filterSleeping = document.querySelector(".sleeping");
    filterSleeping.addEventListener("click", function() {
      if (songContainer.classList.contains("sleeping")) {
        songContainer.style.borderColor = "white";
      } else {
        songContainer.style.borderColor = "gray";
      }
    });

    // filter by new wave music
    var filterWalking = document.querySelector(".walking");
    filterWalking.addEventListener("click", function() {
      if (songContainer.classList.contains("walking")) {
        songContainer.style.borderColor = "white";
      } else {
        songContainer.style.borderColor = "gray";
      }
    });

    var filterAlone = document.querySelector(".alone");
    filterAlone.addEventListener("click", function() {
      if (songContainer.classList.contains("staying_alone")) {
        songContainer.style.borderColor = "white";
      } else {
        songContainer.style.borderColor = "gray";
      }
    });

    // filter reset
    var filterReset = document.querySelector(".reset");
    filterReset.addEventListener("click", function() {
      songContainer.style.borderColor = "gray";
    });

        //when click, song title appear
        songContainer.addEventListener("click", function(){
          songArtist.classList.toggle("active");
          songTitle.classList.toggle("active");
          
        })

        // songContainer.addEventListener("mouseon", function(){
        //   songContainer.classList.toggle("active");
        // })

        // //add number div for each song
        // var songNumber = song.fields.number;
        // songNumber.forEach(function(number){
        //   songContainer.classList.add(number)
        // })
  
        // var filterAlone = document.querySelector(".alone");
        // filterAlone.addEventListener("click", function() {
        //   if (songContainer.classList.contains("staying_alone")) {
        //     songContainer.style.borderColor = "white";
        //   } else {
        //     songContainer.style.borderColor = "gray";
        //   }
    

    

  


  });


}


