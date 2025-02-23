const sectiontag = document.querySelectorAll('section');

for(let section of sectiontag){
    // console.log(section);
    section.style.border = '2px solid blue';
    section.style.marginBottom = '25px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '5px';
    section.style.background = 'lightgray';
}

const new_apple = document.getElementById('apple');
new_apple.style.backgroundColor = 'lightyellow';
new_apple.style.textAlign = 'center';
