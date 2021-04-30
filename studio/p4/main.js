let result = document.querySelector("#result");

document.addEventListener("keydown", function(event)
{
  console.log(event);
  console.log("what did we just press:");
  console.log(event.key);  
  if (event.key == "a"){
    document.body.classList.toggle("letter_a");
  }
  if (event.key == "s"){
    document.body.classList.toggle("letter_s");
  }
  if (event.key == "d"){
    document.body.classList.toggle("letter_d");
  }
  if (event.key == "f"){
    document.body.classList.toggle("letter_f");
  }
  if (event.key == "g"){
    document.body.classList.toggle("letter_g");
  }
  if (event.key == "h"){
    document.body.classList.toggle("letter_h");
  }
  if (event.key == "j"){
    document.body.classList.toggle("letter_j");
  }
  if (event.key == "k"){
    document.body.classList.toggle("letter_k");
  }
  if (event.key == "l"){
    document.body.classList.toggle("letter_l");
  }

  result.innerText = event.key;
})

