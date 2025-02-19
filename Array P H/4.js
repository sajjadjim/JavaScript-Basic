
function checkFunction(Boy,Girl){
    if(Array.isArray(Boy) || Array.isArray(Girl)){
        return "Yes, It's an Array";
    }
    else{
        return "No, It's not an Array";
    }
}

function ageCheck (Boy,Girl){
if(Boy.age === Girl.age){
    return "Yes, They are same age";
}
else{
    return "No, They are not same age";
}
}
function ageGapFind(Boy,Girl){
const ageGap =Math.abs(Boy[0].age - Girl[0].age);
return console.log("Age Gap is: ",ageGap);
}

Boy=[{name:"JIM" ,age:25 , country:"BD" ,salary:25000}]
Girl=[{name:"Labanna" ,age:29 , country:"USA" ,salary:35000}]
console.log(checkFunction(Boy,Girl),ageCheck(Boy,Girl));
ageGapFind(Boy,Girl);