var spelare = [];
var id = 0;
function save() {


    //hämtar data i fält
   var $name = document.querySelector("#name");
   var $init = document.querySelector("#initiative");
 
   //skriver ut/spara datan
   console.log($init.value);
   console.log($name.value);
   spelare.push({
       name:$name.value , init:$init.value, id:id++
   })
 
   //tömmer värden på data
   $init.value = "";
   $name.value = "";

   //uppdatera listan på skärmen
}

function sort() {
    uppdatera();
}

// "uppdaterar listan på skärmen"-funktionen
function uppdatera ()
{
    var listan = document.getElementById("spelarna");
    console.log(listan.childElementCount);
    //for (var i = 0;i < listan.childElementCount; i++){
    //    listan.removeChild("#element"+i);
    //}
    //listan.removeChild("#element1");
    var li = document.createElement("li");
    for (var i = 0; i < spelare.length ; i++ )
    {
        var temp = spelare[i];
        li.appendChild(document.createTextNode(JSON.stringify(temp)));
        li.setAttribute("id", "element"+i);
        listan.appendChild(li);
    }
}