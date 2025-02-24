const getButton = document.getElementById("change-btn");

// console.log(getButton)
getButton.addEventListener("click", function () {
  const pageTittle = document.getElementById("page-tittle");
  pageTittle.innerText = "I study in Daffodil International University..";
});

const updateBTN = document.getElementById("update-btn");
updateBTN.addEventListener("click", function () {
  // Now get The access name input field
  const inputNAME = document.getElementById("input-name");
  const name = inputNAME.value;

  //    update name show the Upper
  const showNAME = document.getElementById("show-update-name");
  showNAME.innerText = name;
  inputNAME.value = ''
});

// age Update code here
const getAgeButton = document.getElementById("age-submit");
getAgeButton.addEventListener("click", function () {
  const inputAge = document.getElementById("input-age");
  const age = inputAge.value;

  const updateAgeShow = document.getElementById("update-age-show");
  updateAgeShow.innerText = age;
  updateAgeShow.style.fontSize = "25px";
  updateAgeShow.style.color = "green";
  inputAge.value = ''
});
