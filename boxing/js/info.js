function info(x)
{
    
    var tekst = document.getElementById("tekst");
    
    if(x==0)
        {
            tekst.innerHTML='<h2> <img src="img/back.png" onclick="window.location.reload()" width="25px"> Karate </h2> (jap. 空手 karate)  <br><br>'
            tekst.innerHTML+='<img src="img/zdj0.png" width="400px0"><br><br>'
            tekst.innerHTML+=' <p align="justify"> sztuka walki i sport walki stworzone na Okinawie, w Japonii. <br>Karate obejmuje swoim zasięgiem cały świat. <br> Do chwili obecnej powstało ponad 100 stylów karate. <br> Charakterystyczny dla karate jest system stopni uczniowskich i mistrzowskich, stworzony na bazie judo, odrębny w wielu organizacjach i stylach karate. </p>'
        }
    if(x==1)
        {
            tekst.innerHTML='<h2> <img src="img/back.png" onclick="window.location.reload()" width="25px"> Boks <br><br>'
            tekst.innerHTML+='<img src="img/zdj1.png" width="400px0"><br><br>'
            tekst.innerHTML+=' <p align="justify">Boks jest dyscypliną sportową polegającą na bezpośredniej walce na pięści dwóch zawodników, według określonych zasad przy ograniczonym polu uderzeń .<br> Jest to jedyna dyscyplina ujęta w programie igrzysk olimpijskich , której istotą jest wykazanie wyższości nad przeciwnikiem przy pomocy bicia. <br> Wciągu wieków podejmowano próby łagodzenia brutalności tego sportu poprzez wprowadzenie chociażby ściśle określonych reguł walki, jednak samego elementu bicia nie da się wyeliminować gdyż nie była by to już ta sama dyscyplina sporu. </p>'
        }
    
    if(x==2)
        {
            tekst.innerHTML='<h2> <img src="img/back.png" onclick="window.location.reload()" width="25px"> Muay-thai </h2> (taj. มวยไทย)  <br><br>'
            tekst.innerHTML+='<img src="img/zdj2.png" width="400px0"><br><br>'
            tekst.innerHTML+=' <p align="justify">  Tajski sport walki kładący nacisk na walkę w klinczu z wykorzystaniem uderzeń łokciami i kolanami. </p>'
        }
}