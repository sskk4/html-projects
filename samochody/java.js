function tuning()
{
    
    document.getElementById("glowny").innerHTML = " <h2> SUPER! PATRZ JAK TERAZ IDZIE"
    document.getElementById("glowny").innerHTML+=' <br> <br> <img src="zdjecia/po.gif" onclick="tuning()" width="50%" height="50%" >'
}

function losowanie()
{
    var liczba = document.getElementById("liczba").value;
     var losowa=Math.floor(Math.random() * 10);
    
   
    if (liczba==losowa)
        {
            document.getElementById("wynik").innerHTML='<h2> BRAWO! Trafiłeś '+losowa+'!</h2> <br><br> Wygrałeś sportowe BMW E36 <br> <img src="zdjecia/nagroda.webp" width="60%" height="50%"> '
        }
    else
        {
            document.getElementById("wynik").innerHTML="<h2> WYNIK NIEPRAWIDŁOWY </h2> <br> Niestety zostało wylosowane "+losowa+"... :( "

}
    
}

function galeria(x)

{
    var tablica = ['<img src="zdjecia/bmw0.jpg" width="100%" height="100%" onclick="window.location.reload();">  ', '<img src="zdjecia/bmw1.jpg" width="100%" height="100%"  onclick="window.location.reload();"> ', '<img src="zdjecia/bmw2.jpg" width="100%" height="100%" onclick="window.location.reload();" >  ']
    {
        document.getElementById("glowny").innerHTML=tablica[x]
    }
    
}

function przeladowanie()
{
    location:reload;
}