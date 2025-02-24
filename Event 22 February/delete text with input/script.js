const deleteTEXT = document.getElementById("text-delete");
const deleteBTN = document.getElementById("btn-delete");
deleteTEXT.addEventListener("keyup", function () {

    // input area text get command here doing   
  const text = event.target.value;
  if (text === "delete") {
    console.log("delete types");
    // set the attribute disables for display none 
    deleteBTN.removeAttribute("disabled");

    //ACtivate The delete button to press and Remove The Text
    deleteBTN.addEventListener("click", function () {
    // Upper H1 tag get
      const text = document.getElementById("heading");
      text.style.display = "none";
    });
  } else {
    console.log("something wrong ......");
    deleteBTN.setAttribute("disabled", true);
  }
});

// style part Here 
deleteBTN.style.padding = '5px'
deleteBTN.style.backgroundColor = 'azure'
deleteBTN.style.borderRadius = '5px'
