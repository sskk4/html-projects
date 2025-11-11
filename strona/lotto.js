function lecimy()
{
    
    
      var typ1 = document.getElementById("pole1").value
      var typ2 = document.getElementById("pole2").value
      var typ3 = document.getElementById("pole3").value
      var typ4 = document.getElementById("pole4").value
      
    var punkty=0;
    
    var wynik=document.getElementById("wynik");
    
    wynik.innerHTML=" <br> <br> ZOSTAŁY WYLOSOWANE: <br> <br> "
    
    for(var i=0; i<4; i++)
    {
          var losowa=Math.floor(Math.random() * 101);
      wynik.innerHTML+='<input type="text" class="pole" id="numerwynik'+i+'" value="'+losowa+'">'
    }
    
      var pole0 = document.getElementById("numerwynik0").value
      var pole1 = document.getElementById("numerwynik1").value
      var pole2 = document.getElementById("numerwynik2").value
      var pole3 = document.getElementById("numerwynik3").value

    
        if(pole0==typ1 || pole0==typ2 || pole0==typ3 || pole0==typ4)
            {
                punkty++;
            }
        if(pole1==typ1 || pole1==typ2 || pole1==typ3 || pole1==typ4)
            {
                punkty++;
            }
    if(pole2==typ1 || pole2==typ2 || pole2==typ3 || pole2==typ4)
            {
                punkty++;
            }
    if(pole3==typ1 || pole3==typ2 || pole3==typ3 || pole3==typ4)
            {
                punkty++;
            }
    
     wynik.innerHTML+= '<br><br> Wygrałeś '+ (punkty * 1000) + 'zł :) <br> <input type="button" id="przycisk" value="Jeszcze raz?" onclick="window.location.reload();"> </input>';

}
