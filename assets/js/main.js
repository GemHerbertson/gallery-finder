// ----- USER LOCATION INPUT -----

function searchLocation() {
    const searchInput = document.getElementById("search-input");

    let userLocation = searchInput.value;
    let searchJSON = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=gallery+in+${userLocation}&key=AIzaSyDfOb9Bhs-PfKNNeqouQ6VjhDtxgNv5_e8`;

    searchInput.value = "";
    return(searchJSON);
}

// ----- GET API -----

function getData(callback) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "XXX");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data){
    console.log(data);
}

getData(printDataToConsole);