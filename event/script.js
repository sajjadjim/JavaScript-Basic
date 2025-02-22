const getButton = document.getElementById('change-btn')

// console.log(getButton)
getButton.addEventListener('click' , function(){
    const pageTittle = document.getElementById('page-tittle');
    pageTittle.innerText = 'I study in Daffodil International University..';
})

const updateBTN = document.getElementById('update-btn')
updateBTN.addEventListener('click' , function(){
    // Now get The access name input field 
   const inputNAME = document.getElementById('input-name');
   const name = inputNAME.value;

//    update name show the Upper 
const showNAME = document.getElementById('show-update-name')
showNAME.innerText = name;
})