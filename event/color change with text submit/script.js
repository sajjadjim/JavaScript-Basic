const colorNAME = document.getElementById("color-name");
const main_tag = document.getElementById("main-container");
// taken button access
colorNAME.addEventListener("keyup", function () {
  // Color Name Taken
  const color_name = event.target.value;

  // taken main container access ----
  const action_btn = document.getElementById("activate-btn");
  if (color_name === "red") {
    action_btn.removeAttribute("disabled");
    action_btn.addEventListener("click", function () {
      main_tag.style.backgroundColor = "red";
    });
  } else if (color_name === "blue") {
    action_btn.removeAttribute("disabled");
    action_btn.addEventListener("click", function () {
      main_tag.style.backgroundColor = "blue";
    });
  } else if (color_name === "yellow") {
    action_btn.removeAttribute("disabled");
    action_btn.addEventListener("click", function () {
      main_tag.style.backgroundColor = "yellow";
    });
  } else if (color_name === "goldenRod") {
    action_btn.removeAttribute("disabled");
    action_btn.addEventListener("click", function () {
      main_tag.style.backgroundColor = "goldenRod";
    });
  } 
  else if (color_name === "green") {
    action_btn.removeAttribute("disabled");
    action_btn.addEventListener("click", function () {
      main_tag.style.backgroundColor = "green";
    });
  }
  else {
    console.log("something wrong typing....");
    action_btn.setAttribute("disabled", true);
  }
});

const remove_color = document.getElementById("remove-btn");
remove_color.addEventListener("click", function () {
  main_tag.style.backgroundColor = "white";
});
