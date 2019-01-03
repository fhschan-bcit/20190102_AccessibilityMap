// Takes in the search parameters and parses it to the map page.


function search_read(){
    let start_loc = document.getElementById('start').value.trim();
    let end_loc = document.getElementById('end').value.trim();

    start_loc = start_loc.toLowerCase();
    end_loc = end_loc.toLowerCase();


    if (start_loc == 'bus stop' && end_loc == 'library'){
        window.location = "./html/map.html?bus_library";
    }

    else if (start_loc == 'se02' && end_loc =='tim hortons'){
        window.location = "./html/map.html?se02_timmies";
    }

    else{
        window.location = "./html/map.html";
    }
}

function getCurrentLocation(){
    console.log("Hello");
    document.getElementById("start").placeholder = "bus";
    document.getElementById("start").value = "bus";

}
    
let search_btn = document.getElementById('search-btn');
search_btn.onclick = search_read;