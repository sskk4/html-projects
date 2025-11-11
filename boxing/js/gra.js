function gra()
{
    
    document.getElementById("tekst").innerHTML = '<img src="img/mike.png" height="400px"> <br><br>'
    document.getElementById("tekst").innerHTML += 'Odpowiedz: <br>'
    document.getElementById("tekst").innerHTML += '<input type="text" id="odp"> <br><br> '
    document.getElementById("tekst").innerHTML += '<input type="button" value="ODPOWIADAM!" id="gozik1" onclick="gra2()">'
 
    
}

function gra2()
{
    if( document.getElementById("odp").value == "Mike Tyson")
        {
            document.getElementById("tekst").innerHTML = '<img src="img/floyd.png" height="300px"> <br><br>'
             document.getElementById("tekst").innerHTML += 'Odpowiedz: <br>'
    document.getElementById("tekst").innerHTML += '<input type="text" id="odp"> <br><br> '
    document.getElementById("tekst").innerHTML += '<input type="button" value="ODPOWIADAM!" id="gozik1" onclick="gra3()">'
            
        }
    else
        {
            
            document.getElementById("tekst").innerHTML = '<h2>Przegrałeś</h2><br> Poprawna odpowiedz: Mike Tyson <br>  <br>'
             document.getElementById("tekst").innerHTML += '<input type="button" value="TRY AGAIN!" id="gozik" onclick="window.location.reload()">'
        }
}

function gra3()
{
     if( document.getElementById("odp").value == "Floyd Mayweather")
         {
             
               document.getElementById("tekst").innerHTML = '<img src="img/wilder.png" height="300px"> <br><br>'
             document.getElementById("tekst").innerHTML += 'Odpowiedz: <br>'
    document.getElementById("tekst").innerHTML += '<input type="text" id="odp"> <br><br> '
    document.getElementById("tekst").innerHTML += '<input type="button" value="ODPOWIADAM!" id="gozik1" onclick="gra4()">'
         }
     else
        {
            
            document.getElementById("tekst").innerHTML = '<h2>Przegrałeś</h2><br> Poprawna odpowiedz: Floyd Mayweather <br>'
             document.getElementById("tekst").innerHTML += '<input type="button" value="TRY AGAIN!" id="gozik" onclick="window.location.reload()">'
        }
}

function gra4()
{
     if( document.getElementById("odp").value == "Deontay Wilder")
         {
             
             document.getElementById("tekst").innerHTML = '<h2> <font color="green"> Zwycięstwo! </font> </h2> '
               document.getElementById("tekst").innerHTML += '<img src="img/puchar.webp" height="300px"> <br><br>'
             
    
         }
     else
        {
            
            document.getElementById("tekst").innerHTML = '<h2>Przegrałeś</h2> <br> Poprawna odpowiedz: Deontay Wilder <br>'
            document.getElementById("tekst").innerHTML += '<input type="button" value="TRY AGAIN!" id="gozik" onclick="window.location.reload()">'
            
        }
}