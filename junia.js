var req = new XMLHttpRequest();

function hae () {
    req.onreadystatechange = function () {
        console.log("Ready state vaihtunut arvoon:- " + req.readyState);
        if (req.readyState === 4) {
            if (req.status === 200) {
                console.log(req.responseText)
                var taulu = JSON.parse(req.responseText)
                console.dir(taulu)
                haelistalta();
            } else {
                alert("Pyyntö epäonnistui");
            }
        }
    };
    req.open('GET', 'https://rata.digitraffic.fi/api/v1/metadata/stations', true);
    req.send('null');
}
function haelistalta(lista) {
    var taulu = JSON.parse(req.responseText)
    for (var  i=0;i < taulu.length; i++) {
        var juna = taulu[i];
        var tulostajuna = juna.stationName + " | "  + juna.stationShortCode;  //"|" + juna.trainType + " | " +juna.trainCategory + " | " + juna.departureDate + " | " + juna.timetableAcceptanceDate;
        var tulolista = document.createElement("li");
        var texti = document.createTextNode(tulostajuna);
        tulolista.appendChild(texti);
        document.getElementById("listat").appendChild(tulolista);


        //var lahtoaika = juna.timeTableRows[0].scheduledTime;
        //  var saapumisaika = juna.timeTableRows[].scheduledTime

        // htmllista.innerHTML += "<li> id: |"+ lista[i].id + " | nimi: " +  lista[i].name + " | email:  " + lista[i].email ;
    }
}