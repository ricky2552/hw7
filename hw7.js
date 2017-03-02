var locations = [
    [
        "Clearihue Building",
        48.464295,
         -123.310357
    ],
    [
    		"MacLaurin Building",
        48.463226,
        -123.313633
    ],
    [
        "McPherson Library",
        48.463431,
        -123.309649
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function(){
          console.log (marker.position.lat(), marker.position.lng());
          infowindow.setContent(locations[i][0]+"  "+marker.position.lat()+marker.position.lng());
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
    function countMarkers(markers){
      var count = 0
      $.each(markers, function (i, marker) {
        console.log(marker.visible);
        infowindow.setContent(count)
        if (marker.visible == true) {
          count++;
        }
      });
      $('#countBox').val(count);
    }