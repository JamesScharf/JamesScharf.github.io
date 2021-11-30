geojsonFeatureCollection = geoFemale;

var mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 3,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1Ijoic2NoYXJmamFtaWUiLCJhIjoiY2t3M3ZxN3FnYXF1NDJvcXAxY3RxMHhtcSJ9.wxcqcjJU0szz3lg-E7u8EA'
}).addTo(mymap);

L.geoJson(geojsonFeatureCollection).addTo(mymap);

function getColor(d) {
    return d > 0.7 ? '#fff7f3' :
        d > 0.6 ? '#fde0dd' :
            d > 0.5 ? '#fcc5c0' :
                d > 0.4 ? '#fa9fb5' :
                    d > 0.3 ? '#f768a1' :
                        d > 0.2 ? '#dd3497' :
                            d > 0.1 ? '#ae017e' :
                                '#7a0177';
}


function style(feature) {
    return {
        fillColor: getColor(feature.properties.yr_sch_ter),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(geojsonFeatureCollection, { style: style }).addTo(mymap);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}