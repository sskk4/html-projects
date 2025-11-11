var numer=Math.floor(Math.random()*5)+1;
function schowaj()
{
	$("#slajdy").fadeOut(500);
}
function zmienslajd()
{
	numer++; if(numer>5) numer=1;
	
	var plik="<img src=\"img/tank" + numer + ".jpg\" width=\"500px\" height=\"500px\" /> ";
	document.getElementById("slajdy").innerHTML=plik;
	$("#slajdy").fadeIn(500)
	setTimeout("zmienslajd()", 5000);
	setTimeout("schowaj()", 4500);
	}
	

