function updateParkInfo(){
    document.getElementById("parkName").textContent = "Yellowstone"
    document.querySelector("#parkType").textContent = "National Park"
    document.getElementById("parkStates").innerHTML = "ID, WY, MT"
    document.getElementById("heroImg").src = "images/yellowstone.jpg"
}

function addEventListeners() {
  const menuTrigger = document.querySelector("#header-menu-trigger");
  const menuOptions = document.querySelector("#header-menu-options");
  const overview = document.querySelector("#ParkInfo");

  // MENU toggle
  if (menuTrigger && menuOptions) {
    menuTrigger.addEventListener("click", () => {
      menuOptions.classList.toggle("is-hidden");
    });

    // Event delegation (single listener)
    menuOptions.addEventListener("click", (event) => {
      const itemName = event.target.textContent;
      console.log(itemName);
    });
  }

  // Overlay hover color toggle
  if (overview) {
    overview.addEventListener("mouseenter", () => {
      overview.classList.add("overlay-hover");
    });

    overview.addEventListener("mouseleave", () => {
      overview.classList.remove("overlay-hover");   
    });
  }
}

updateParkInfo()
addEventListeners()