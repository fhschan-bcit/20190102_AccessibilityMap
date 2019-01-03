// Takes in the search parameters and parses it to the map page.


function search_read(){
    let start_loc = document.getElementById('start');
    let end_loc = document.getElementById('end');

    if (start_loc.value == 'bus' && end_loc.value == 'library'){
        window.location = "./html/map.html?test";
    }
    else{
        window.location = "./html/map.html";
    }
}

function getCurrentLocation(){
    console.log("Hello");
    document.getElementById("start").placeholder = "bus";
}
    
let search_btn = document.getElementById('search-btn');
search_btn.onclick = search_read;