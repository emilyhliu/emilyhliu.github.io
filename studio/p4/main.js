
let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

// Detect when we press a key while in the text box
inputElement.addEventListener("keydown",function(event){

  // Detect when we specifically press enter key
  if (event.key == "Enter"){
    
    // Get the contents of the text input (aka name)
    let name = inputElement.value;
    console.log(name);

    //We can also clear what we wrote in the text box
    inputElement.value = "";
    
    //Clear the reading result from last time
    result.innerHTML = "";
    
    // Loop through 4 times
    for (let i = 0; i < 4; i++){
      
      // Print the number we're at in the loop
      console.log(i);
      
      // Get the i-th letter in the name
      let letter = name[i];
      console.log(letter);
      
      // Create a new HTML image element for the card
      let selectedDecoration = document.createElement("img");
      
      // If letter is any of these, use the devil card
      if (["a", "b", "c", "d", "e", "f"].includes(letter)){
        selectedDecoration.src = "image/1.jpg";
      }
      
      // If letter is any of these, use the magician card
      if (["g", "h", "i", "j", "k", "l"].includes(letter) ){
        selectedDecoration.src = "image/1.jpg";
      }
      
      // If letter is any of these, use the star card
      if (["m", "n", "o", "p", "q", "r"].includes(letter)){
        selectedDecoration.src = "image/1.jpg";
      }
      
      // If letter is any of these, use the moon card
      if (["s", "t", "u", "v", "w", "x", "y", "z"].includes(letter)){
        selectedDecoration.src = "image/1.jpg";
      }
      
      result.appendChild(selectedDecoration);
      
    }
    
  }
})