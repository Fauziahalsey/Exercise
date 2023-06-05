function handleClick() {
    console.log("Button clicked!");
    document.getElementById("button").textContent = "Submitted Successfully!";
  }
  
  
  function buttonClickHandler(event) {
    
    handleClick();
  }
  
  
  const button = document.getElementById("button");
  button.addEventListener("click", buttonClickHandler);
  