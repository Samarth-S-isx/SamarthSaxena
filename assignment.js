function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
    // Add class to dragged image
    ev.target.classList.add("dragged");
  }
  function drop(ev) {
    ev.preventDefault();
    
    var data = ev.dataTransfer.getData("text");
    
    // Prevent drop if target is not a container or if target is the same as the parent of the dragged item
    if (ev.target.id != "container1" && ev.target.id != "container2" || ev.target == document.getElementById(data).parentElement) {
      document.getElementById(data).classList.remove("dragged");
      return;
    } 
    
    // Remove class from dragged image
    document.getElementById(data).classList.remove("dragged");
    
    ev.target.appendChild(document.getElementById(data));
    
    // Show alert
    alert("Successfully moved!");
  }
  function reset() { 
    location.reload()
    
  }