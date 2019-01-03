function toMap(mapType) {
  document.getElementById("title").style.display = "none";
  document.getElementById("title-content").style.display = "none";
  document.getElementById("back").style.display = "inline-block";
  console.log(mapType);

  let map = document.getElementById("currMap");
  map.src = "./img/"+mapType;
  map.style.overflow = "auto";
}

function parseInputs() {
  let location = document.getElementById("locationInput");
  let target = document.getElementById("targetInput");

  if (location.value == 'Bus Stop' && target.value == 'Library'){
    toMap("wheelchair_library.png");
  } else if (location.value == 'SE06' && target.value == 'Tim Hortons') {
    toMap("wheelchair_tim_hortons.png");
  } else {
    window.location = "mobile.html";
  }
}

function toHome() {
  window.location = "mobile.html";
}

$("#yourLocation").click(function() {
  document.getElementById("locationInput").value = "Bus Stop";
});
