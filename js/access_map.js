let myUrl = window.location.href;
let delimiter = "?";
let searchIndex = myUrl.indexOf(delimiter)+1;
let searchTerm = myUrl.substring(searchIndex);

function imgReplace(){
    if (searchTerm == 'test'){
       let myMap = document.getElementById('access-map');
       myMap.src = "../img/wheelchair_library.png";
    }
}

function directionText(){
    if (searchTerm == 'test'){
        let directions = document.createElement('ul');
        let step_1 = document.createElement('li');
        let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        step_1.createTextNode(text);
        directions.appendChild(step_1);
        document.body.append(directions);
    }
}
imgReplace();
directionText();