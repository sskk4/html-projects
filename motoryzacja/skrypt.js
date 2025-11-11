var i=5; /* wartosc rotacji */ /*do poloneza*/
function taniec()
{
	i=i+5; /*dodawanie o 5*/
	var samochod = document.getElementById("polonez"); 
	samochod.style.transform = "rotate("+i+"deg)"; /*dodanie do stylu smochodu, rotacji zmieniającej się o 5*/
	setTimeout('taniec()', 30) /*dzieki temu sie kreci*/
}

var y=270; /*do malucha 270=poczatkowa wartosc margin-left w style.css*/
function jazda() /* to samo co u góry tylko teraz zmieniamy marginLeft */
{
	y=y+5; 
	var samochod = document.getElementById("polonez"); 
	samochod.style.marginLeft = y+"px"; 
	if(y==1500) /*warunek jeśli minie krawędź prawą*/
	{
		y=-1000; /*zacznij od krawędzi lewej*/
	}
	setTimeout('jazda()', 10) 
}

var x=500; /*poczatkowa wartosc width w arkuszu styli*/
function odjazd() /*do fiata*/
{
	x=x-5 /* odejmuje co 5 */
	var samochod = document.getElementById("odjazd"); 
	if (x==495) /*zeby tylko raz narysowac tyl, inaczej nie odjedzie*/
	{
	samochod.innerHTML='<img src="tyl.png" id="polonez"/>' /*zmienie zdjecia na tyl*/
	}
	var fiacik = document.getElementById("polonez"); 
	fiacik.style.width = x+"px"; /*zmniejszanie wielkosci o -5*/
	setTimeout('odjazd()', 10) 
}