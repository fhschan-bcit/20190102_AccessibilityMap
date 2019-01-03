let myUrl = window.location.href;
let delimiter = "?";
let searchIndex = myUrl.indexOf(delimiter) + 1;
let searchTerm = myUrl.substring(searchIndex);

function imgReplace() {
    if (searchTerm == 'bus_library') {
        let myMap = document.getElementById('access-map');
        myMap.src = "../img/wheelchair_library.png";
    }
    else if (searchTerm == "se02_timmies"){
        let myMap = document.getElementById('access-map');
        myMap.src = "../img/wheelchair_tim_hortons.png";
    }
}

function directionText() {
    if (searchTerm == 'bus_library') {
        let directions = document.getElementById('directions')
        directions.innerHTML = "<br>Cross White Avenue.<br><br>\
                                Turn right and walk for<br> 500 meters.<br><br>\
                                Turn left and walk for<br> 250 meters using the ramp. <br><br>\
                                Go through SE12 and take<br> a right.<br><br>\
                                Take the ramp to reach<br> 2nd floor.<br><br>\
                                Your destination is <br>on the right.\
                                "
    }

    else if (searchTerm == "se02_timmies"){
        let directions = document.getElementById('directions')
        directions.innerHTML = "<br>Proceed to South exit<br> of SE02.<br><br>\
                                Turn left and walk for<br> 15 meters.<br><br>\
                                Turn right and walk for<br> 250 meters using the ramp. <br><br>\
                                Your destination is on<br> the right.\
                                "
    }
}

function toggleNav(){
    let navWidth = document.getElementById('mySidebar').offsetWidth;
    if (navWidth == "0"){
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    else {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}

imgReplace();
directionText();