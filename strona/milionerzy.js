var obrazki = new Array();
obrazki[1] = "logo0.png";
obrazki[2] = "logo1.png";
var sekund = 1; 
 
var a = 1;
 
function zmien()
{
	var ile = obrazki.length;
	document.getElementById("obrazek").src = obrazki[a];	
	a++;
	if(ile==a) {
		a=1;
	} 
 
}
 
 
setInterval("zmien()", sekund*1000);
 




var pytania = ["Jaka jest stolica Azerbejdżanu?","Kto pierwszy poleciał w kosmos?"]

var odp0= ["Baku", "Maku", "Daku" ,"Raku"]
var odp1= ["Pajonk", "Pies", "Człowiek" ,"Koza"]
var nr = 0;


function pytanko(x){
    var okno =document.getElementById("gra");
    
   okno.innerHTML="<b> Pytanie:  "+pytania[x]+"<br><br></b>"
   
   
   for(var i=0;i<4;i++){
       
   okno.innerHTML+='<br><input type="radio" value="odp0'+i+'" id="nwm'+i+'" name="oddd">'+odp0[i]
       
   }
    
    okno.innerHTML+='<br><input type="button" value="UDZIELAM ODPOWIEDZI" id="przycisk" onclick="pytanko1(1)"></input>'

}

function pytanko1(x)
{
    if(document.getElementById("nwm0").checked)
    {
    var okno =document.getElementById("gra");
    okno.innerHTML="<b> Pytanie:  "+pytania[x]+"<br><br></b>"
    
   for(var i=0;i<4;i++){
       
   okno.innerHTML+='<br><input type="radio" value="odp1'+i+'" id="nwm'+i+'" name="oddd">'+odp1[i]
       
   }
    
     okno.innerHTML+='<br><input type="button" value="UDZIELAM ODPOWIEDZI"  id="przycisk" onclick="pytanko2()"></input>'
        }
    
    else 
        {
            location.href = "zle.html"
        }
}

function pytanko2()
{
    if(document.getElementById("nwm1").checked)
        {
            location.href = "dobrze.html"
        }
    
      else 
        {
            location.href = "zle.html"
        }
}