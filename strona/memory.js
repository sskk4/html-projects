var karty =["ziga.png","chory.png","czachadymi.png","czachadymi.png","nerd.png","zly.png","chory.png","mysli.png","ziga.png","zly.png","mysli.png","nerd.png"] 

var karta0 = document.getElementById("karta0")
var karta1 = document.getElementById("karta1")
var karta2 = document.getElementById("karta2")
var karta3 = document.getElementById("karta3")

var karta4 = document.getElementById("karta4")
var karta5 = document.getElementById("karta5")
var karta6 = document.getElementById("karta6")
var karta7 = document.getElementById("karta7")

var karta8 = document.getElementById("karta8")
var karta9 = document.getElementById("karta9")
var karta10 = document.getElementById("karta10")
var karta11 = document.getElementById("karta11")

karta0.addEventListener("click", function(){odkryjkarte(0);});
karta1.addEventListener("click", function(){odkryjkarte(1);});
karta2.addEventListener("click", function(){odkryjkarte(2);});
karta3.addEventListener("click", function(){odkryjkarte(3);});

karta4.addEventListener("click", function(){odkryjkarte(4);});
karta5.addEventListener("click", function(){odkryjkarte(5);});
karta6.addEventListener("click", function(){odkryjkarte(6);});
karta7.addEventListener("click", function(){odkryjkarte(7);});

karta8.addEventListener("click", function(){odkryjkarte(8);});
karta9.addEventListener("click", function(){odkryjkarte(9);});
karta10.addEventListener("click", function(){odkryjkarte(10);});
karta11.addEventListener("click", function(){odkryjkarte(11);});

var odkryta = false;
var runda = 0;
var pierwszodkryta;
var lock = false;
var pary = 6;

function odkryjkarte(nr)
{
    var opacityValue=$('#karta'+nr).css('opacity')
    
    if (opacityValue !=0 && lock == false)
        {
            lock = true;
            
             var obraz = "url(img/" + karty[nr] +")"
   $('#karta'+nr).css('background-image', obraz);
   $('#karta'+nr).addClass('kartaA'); 
      $('#karta'+nr).removeClass('karta'); 
    
    if(odkryta == false)
        {
            odkryta = true;
            pierwszaodkryta = nr;
            lock = false;
        }
    else
        {
            if(karty[pierwszaodkryta] == karty[nr])
                {
                  //  alert("para")
                      setTimeout(function() {ukryj2(nr, pierwszaodkryta)}, 750)  
                }
    else
        {
          //  alert("pudło")
           setTimeout(function() {przywroc(nr, pierwszaodkryta)}, 1000)  
         
        }
            
            runda++;
            $('#punkty').html("Runda<br>"+ runda);
            odkryta = false;
        }
        }
    
  
}

function ukryj2(nr1, nr2)
{
    $('#karta'+nr1).css('opacity', '0');
    $('#karta'+nr2).css('opacity', '0');
    
    pary--;
    if(pary == 0)
        {
            $('#memories').html('<img src="win.gif" width="500px"> <br> <h1> Udalo ci sie w '+runda+' rund. Brawo!</h1>')
        }
    
    lock=false;
}

function przywroc(nr1, nr2)
{
$('#karta'+nr1).css('background-image', 'url(card.webp)');
$('#karta'+nr1).addClass('karta'); 
$('#karta'+nr1).removeClass('kartaA'); 
      
$('#karta'+nr2).css('background-image', 'url(card.webp)');
$('#karta'+nr2).addClass('karta'); 
$('#karta'+nr2).removeClass('kartaA'); 
    
    lock=false;
}