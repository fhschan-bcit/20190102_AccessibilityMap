function toMap() {
  document.getElementById("title").style.display = "none";
  document.getElementById("title-content").style.display = "none";
  document.getElementById("back").style.display = "inline-block";
}

function parseInputs() {
  let location = document.getElementById("locationInput");
  let target = document.getElementById("targetInput");

  console.log(location.value);
  console.log(target.value);

  if (location.value == 'bus' && target.value == 'library'){
    toMap();
  } else {
    window.location = "mobile.html";
  }
}

function toHome() {
  window.location = "mobile.html";
}

$("#yourLocation").click(function() {
  document.getElementById("locationInput").value = "bus";
});
