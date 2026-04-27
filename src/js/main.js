function updateParkInfo(){
    document.getElementById("parkName").textContent = "Yellowstone"
    document.querySelector("#parkType").textContent = "National Park"
    document.getElementById("parkStates").innerHTML = "ID, WY, MT"
    document.getElementById("heroImg").src = "public/images/yellowstone.jpg"
}

updateParkInfo()