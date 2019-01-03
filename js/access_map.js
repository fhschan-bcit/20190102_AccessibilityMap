let myUrl = window.location.href;
let delimiter = "?";
let searchIndex = myUrl.indexOf(delimiter)+1;
let searchTerm = myUrl.substring(searchIndex);


function imgReplace(){
    if (searchTerm == 'test'){
       let myMap = document.getElementById('access-map');
       myMap.src = "../img/map_1.jpg";
    }
}

imgReplace();