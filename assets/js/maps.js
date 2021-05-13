function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 53.3497645,
            lng: -6.2602732
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        lat: 53.3311897,
        lng: -6.2646929
    }, {
        lat: 53.344565,
        lng: -6.2651355
    }, {
        lat: 53.3431285,
        lng: -6.2634071
    }, {
        lat: 53.342377,
        lng: -6.261907
    }, {
        lat: 53.33998895,
        lng: -6.241975387192118
    }, {
        lat: 53.3252716,
        lng: -6.2662014
    }, {
        lat: 53.3298496,
        lng: -6.264461598857143
    }, {
        lat: 53.3323962,
        lng: -6.2736657
    }, {
        lat: 53.3344161,
        lng: -6.266138
    }, {
        lat: 53.34358241958306,
        lng: -6.284137579039399
    }, {
        lat: 53.33709328639574,
        lng: -6.273085429963753
    }, {
        lat: 53.33283938344494,
        lng: -6.265517214621971
    }];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}