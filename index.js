
let a="10";
let b="10";
function upcheck()
{
     a = document.getElementById("pass").value;
     b = document.getElementById("user").value;
    console.log(a);
    console.log(b);
    if(b==="Someone@gmail.com"||a==="1234")
     {
         alert("You entered a correct password");
         
        }
        else{
            alert("You entered a wrong password");
            window.location.href="mainpage.html";
        // window.close();
        // window.open("https://www.youtube.com");
              }

}
let pop="Someone@gmail.com";
console.log("Someone@gmail.com"==pop);
console.log(a);
console.log(b);