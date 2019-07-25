
//var spelare = [{name:"JP",init:12,id:id++ }];
var spelare = JSON.parse(localStorage.getItem("Sparfil") || "[]");
var id = parseFloat(localStorage.getItem("id")) || 0;
    

function save() {

    if (spelare.length > 0){
        id = (spelare[(spelare.length-1)].id + 1);
    }


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
   localStorage.setItem("id",id.toString());
   //tömmer värden på data
   $init.value = "";
   $name.value = "";

   //uppdatera listan på skärmen
   uppdatera();
}

function onSubmit() {
    save();
    return false;
}

function sort() {

    //ändra ordningen på arrayen
    spelare.sort(function (a, b) {
        return b.init - a.init;
    })
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

    //skriver ut listan
    for (var i = 0; i < spelare.length ; i++ )
    {
        var li = document.createElement("li");
        var temp = spelare[i];
        const mittI = i;
        li.appendChild(document.createTextNode(`Name: ${temp.name}  Initiative: ${temp.init}`));

        // radera knapp
        var btnRadera = document.createElement("button");
        btnRadera.innerText = "Radera";
        btnRadera.addEventListener("click", function () {
            spelare.splice(mittI,1);
            uppdatera();
        });
        li.appendChild(btnRadera);

        // redigera knapp
        var btnEdit = document.createElement("button");
        btnEdit.innerText = "Edit";
        btnEdit.addEventListener("click", function () {
            
            uppdatera();
        });
        li.appendChild(btnEdit);

        li.setAttribute("id", "element"+i);
        listan.appendChild(li);
    }
}

uppdatera();