
var odp0 = ['Vasco Da Gama','Józef Stalin','Leonardo Da Vinci','Wiaczeslaw Molotow'];
var odp1 = ['Rosyjskie','Niemieckiej','Ukraińskiej','Amerykańskiej'];
var odp2 = ['1916','1939','1918','1938'];
var odp3 = [];
var dobreodp =	['2','1','0']
var question = [' Kto stworzył pierwszy prototyp czołgu','Jakiej produkcji jest czołg PzKpfw VI Tiger','W którym roku pierwszy raz użyto czołgu'];
var x=0;
var punkty=0;

function pytania(y)
{

	
	document.getElementById("pytania").innerHTML="<h2> PYTANIE:"+question[x]+"? </h2>"
	for(var i=0;i<4;i++)
	{
	document.getElementById("n"+i).innerHTML='<input type="radio" id="hejeczka'+i+'" value="'+i+'" name="nieobec"/> </input>'
	document.getElementById("u"+i).innerHTML=y[i]+"<br>";
	}
	
	++x;
	document.getElementById('container').childNodes[0].nodeValue = x;
	
	
	document.getElementById("przycisk").innerHTML='<input type="button" onclick="sprawdz()" value="SPRAWDZANIE" class="button2"> </input>'
	if(x==4)
	{
		document.getElementById("koniecgry").innerHTML="Koniec quizu<br> Liczba punktów: "+punkty+'<br><input type="button" class="button2" onclick="czysc()" value="JESZCZE RAZ"> </input>';
		
		
	}
}

//problem
function sprawdz()
{
document.getElementById("przycisk").innerHTML='<input type="button" onclick="pytania(odp'+x+')" value="NASTĘPNE" class="button2"> </input>'
if(document.getElementById('hejeczka'+dobreodp[x-1]).checked)
{ punkty++ }
}

function czysc()
{
	location.reload();
}