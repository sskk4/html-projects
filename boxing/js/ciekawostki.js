function ciekawostka()
{
    var fakty = ["Pojedynek pięściarzy jest jednym z najstarszych sportów na świecie. ", "Walka na pięści była jedną z konkurencji antycznych igrzysk olimpijskich.", "Pierwszą akademie boksu założył James Figg w 1719 roku w Anglii.", "Od 1889 roku zawodnicy walczą w rękawicach.", "Boks jest sportem igrzysk olimpijskich od 1904 roku.", "W zawodowym boksie istnieje 17 kategorii wagowych. <br>Najlżejsza “słomkowa” do 47,6 kg, a najcięższa “ciężka” powyżej 90,7 kg. "]
    
    var losowa=Math.floor(Math.random() * 6);
    
    document.getElementById("tekst").innerHTML = fakty[losowa] + "<br><br>"
     document.getElementById("tekst").innerHTML += '<input type="button" value="NEXT" id="gozik" onclick="ciekawostka()"> '
    
    
    
    
}