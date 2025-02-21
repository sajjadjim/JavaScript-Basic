async function myFunction() {
    return "Hello";
  }


  async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  
async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  getFile();