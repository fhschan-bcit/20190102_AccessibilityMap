function toMap(mapType) {
  document.getElementById("title").style.display = "none";
  document.getElementById("title-content").style.display = "none";
  document.getElementById("back").style.display = "inline-block";
  document.getElementById("main").style.display = "inline-block";
  console.log(mapType);

  let map = document.getElementById("currMap");
  map.src = "./img/"+mapType;
  // map.style.overflowX = "scroll";
}

function parseInputs() {
  let location = document.getElementById("locationInput");
  let target = document.getElementById("targetInput");

  if (location.value == 'Bus Stop' && target.value == 'Library'){
    toMap("wheelchair_library.png");
  } else if (location.value == 'SE02' && target.value == 'Tim Hortons') {
    toMap("wheelchair_tim_hortons.png");
  } else {
    window.location = "mobile.html";
  }
}

function toHome() {
  window.location = "mobile.html";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

$("#yourLocation").click(function() {
  document.getElementById("locationInput").value = "Bus Stop";
});

function directionText() {
      let directions = document.getElementById('directions')
      directions.innerHTML = "<br>Cross White Avenue.<br><br>\
                              Turn right and walk for<br> 500 meters.<br><br>\
                              Turn left and walk for<br> 250 meters using the ramp. <br><br>\
                              Go through SE12 and take<br> a right.<br><br>\
                              Take the ramp to reach<br> 2nd floor.<br><br>\
                              Your destination is <br>on the right.\
                              "
  }
  directionText();