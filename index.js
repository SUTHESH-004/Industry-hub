
function upcheck()
{
     b = document.getElementById("pass").value;
     a = document.getElementById("user").value;
    console.log(a);
    console.log(b);
    if(a==="Someone@gmail.com"||b==="1234")
     {
         alert("You entered a correct password");
         window.location.href="https://www.youtube.com";
        }
        else{
            alert("You entered a wrong password");
        // window.close();
        // window.open("https://www.youtube.com");              }

}   };
let pop="Someone@gmail.com";
console.log("Someone@gmail.com"==pop);
console.log(a);
console.log(b);