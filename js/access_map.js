let myUrl = window.location.href;
let delimiter = "?";
let searchIndex = myUrl.indexOf(delimiter) + 1;
let searchTerm = myUrl.substring(searchIndex);

function imgReplace() {
    if (searchTerm == "bus_library") {
        let myMap = document.getElementById("access-map");
        myMap.src = "../img/wheelchair_library.png";
    } else if (searchTerm == "se02_timmies") {
        let myMap = document.getElementById("access-map");
        myMap.src = "../img/wheelchair_tim_hortons.png";
    }
}

function directionText() {
    if (searchTerm == "bus_library") {
        let directions = document.getElementById("directions");
        directions.innerHTML =
            "<br>&nbsp;&nbsp;Cross White Avenue.<br><br>\
                                &nbsp;&nbsp;Turn right and walk for<br> &nbsp;&nbsp;500 meters.<br><br>\
                                &nbsp;&nbsp;Turn left and walk for<br>&nbsp;&nbsp; 250 meters using the ramp. <br><br>\
                                &nbsp;&nbsp;Go through SE12 and take<br>&nbsp;&nbsp; a right.<br><br>\
                                &nbsp;&nbsp;Take the ramp to reach<br>&nbsp;&nbsp; 2nd floor.<br><br>\
                                &nbsp;&nbsp;Your destination is <br>&nbsp;&nbsp;on the right.\
                                ";
    } else if (searchTerm == "se02_timmies") {
        let directions = document.getElementById("directions");
        directions.innerHTML =
            "<br>&nbsp;&nbsp;Proceed to South exit<br> of SE02.<br><br>\
        &nbsp;&nbsp;Turn left and walk for<br> 15 meters.<br><br>\
        &nbsp;&nbsp;Turn right and walk for<br>&nbsp;&nbsp; 250 meters using the ramp. <br><br>\
        &nbsp;&nbsp;Your destination is on<br>&nbsp;&nbsp; the right.\
                                ";
    }
}

function toggleNav() {
    let navWidth = document.getElementById("mySidebar").offsetWidth;
    if (navWidth == "0") {
        document.getElementById("mySidebar").style.width = "265px";
        // document.getElementById("main").style.marginLeft = "250px";
    } else {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}

imgReplace();
directionText();
