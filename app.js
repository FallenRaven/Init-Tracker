var id = 0;
//var spelare = [{name:"JP",init:12,id:id++ }];
var spelare = JSON.parse(localStorage.getItem("Sparfil") || "[]");
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
   localStorage.setItem("Sparfil", JSON.stringify(spelare));
 
   //tömmer värden på data
   $init.value = "";
   $name.value = "";

   //uppdatera listan på skärmen
   uppdatera();
}

function submit(e) {
    e.preventDefault();
    save();
}

function sort() {
    uppdatera();
}

// "uppdaterar listan på skärmen"-funktionen
function uppdatera ()
{
    var listan = document.getElementById("spelarna");
    console.log(listan.childElementCount);
    //tömmer listan
    if (listan.childElementCount > 0)
    {
        document.getElementById("spelarna").innerHTML = "";
    }
    
    for (var i = 0; i < spelare.length ; i++ )
    {
        var li = document.createElement("li");
        var temp = spelare[i];
        //fixa så att det ser bra ut i listan
        li.appendChild(document.createTextNode(`${temp.name}: ${temp.init}`));
        li.setAttribute("id", "element"+i);
        listan.appendChild(li);
    }
}
uppdatera();