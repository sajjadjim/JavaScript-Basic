
// console.log(mainTag)

const allSection = document.getElementsByTagName('section')
for(let sectionTag of allSection){
    sectionTag.style.color = 'green'
    sectionTag.style.backgroundColor = 'lightgray'
    sectionTag.style.border = '2px solid black'
    sectionTag.style.borderRadius = '8px'
    sectionTag.style.marginTop = '10px'
    sectionTag.style.padding = '15px'
}



//1. Where I should Add the tag 
const mainContainer = document.getElementById('main_container');

//2. What i should add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText= 'Hew tag Add By using Javascript';
section.appendChild(h1);

// create a unOrdered list Where the List items are append Here :
const ul = document.createElement('ul')

const li1 = document.createElement('li');
li1.innerText = "Item 1 List ";
ul.appendChild(li1)
const li2 = document.createElement('li');
li2.innerText = "Item 2 List ";
ul.appendChild(li2)
const li3 = document.createElement('li');
li3.innerText = "Item 3 List ";
ul.appendChild(li3)
const li4 = document.createElement('li');
li4.innerText = "Item 4 List ";
ul.appendChild(li4)


//Add For the Website tag use append 
mainContainer.append(section)
section.appendChild(ul)

//Style given Here Part 
section.style.border = '2px solid Black'
section.style.color = 'red'
section.style.padding = '30px'
section.style.marginTop = '10px'
section.style.textAlign = 'center'
section.style.fontSize = '30px'



/// set inner HTML directly ----->
const  sectionNew = document.createElement('section')
sectionNew.innerHTML = `
<ul>
<h2>New inner HTML Create Input File</h2>
<li>List Items 1</li>
<li>List Item 2</li>
<li>List Item 3</li>
<li>List Item 4</li>
</ul>
`
mainContainer.append(sectionNew)
sectionNew.style.alignItems = 'center'
sectionNew.style.textAlign = 'center'
sectionNew.style.border = '10px solid green'
sectionNew.style.margin = '10px'
sectionNew.style.borderRadius = '20px'
sectionNew.style.fontSize = '30px'

