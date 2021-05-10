
    function showLocation(position) {
        var latitude = 50.97181474340561;
        var longitude =  22.311796880763357;

        var wspolrzedne = new google.maps.LatLng(latitude,longitude);
        var opcjeMapy = {
            zoom: 10,
            center: wspolrzedne,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
       var mapa = new google.maps.Map(document.getElementById("map"),opcjeMapy);
    }
