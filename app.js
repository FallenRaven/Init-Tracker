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
   uppdatera();
}

function sort() {

    //ändra ordningen på arrayen

    uppdatera();
    
}

// "uppdaterar listan på skärmen"-funktionen
function uppdatera ()
{
    var listan = document.getElementById("spelarna");
    console.log(listan.childElementCount);
    if (listan.childElementCount > 0)
    {
        document.getElementById("spelarna").innerHTML = "";
    }
    var li = document.createElement("li");
    var linebreak = document.createElement("br");
    for (var i = 0; i < spelare.length ; i++ )
    {
        var tempNamn = spelare[i].name;
        var tempInit = spelare[i].init;
        console.log(tempInit+" "+tempNamn);
        //fixa så att det ser bra ut i listan
        li.appendChild(document.createTextNode("Name: " + tempNamn + " Initiative: " + tempInit));
        li.setAttribute("id", "element"+i);
        li.appendChild(linebreak);
        listan.appendChild(li);
    }
}