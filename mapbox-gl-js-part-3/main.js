var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "glyphs": "https://ta.webmapper.nl/wm/glyphs/{fontstack}/{range}.pbf",
    "sprite": "https://ta.webmapper.nl/wm/sprites/stb_icons",
    "sources": {
        "cartiqo": {
            "type": "vector",
            "tiles": [
                "https://ta.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
                "https://tb.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
                "https://tc.webmapper.nl/wm/cartiqo/{z}/{x}/{y}"
            ]
        }
    },
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "#FFFFFF"
            }
        },
        {
            "id": "admin",
            "type": "line",
            "source": "cartiqo",
            "source-layer": "boundaries",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "type", "province"],
            "paint": {
                "line-color": "#54D8CC",
                "line-width": 5
            }
        },
        {
            "id": "building_extrusion",
            "type": "fill-extrusion",
            "source": "cartiqo",
            "source-layer": "builtup",
            "maxzoom": 22,
            "minzoom": 11,
            "filter":
                [
                    "==",
                    "type",
                    "building"
                ],
            "paint": {
                "fill-extrusion-height": 20,
                "fill-extrusion-color": "#f37788",
                "fill-extrusion-opacity": 0.9
            }
        },
        {
            "id": "poi-cafe-restaurant",
            "type": "symbol",
            "source": "cartiqo",
            "source-layer": "pois",
            "filter": ["==", "type", "food_drink"],
            "layout": {
                "icon-image": "cafe_11",
                "text-padding": 2,
                "text-font": [
                    "Lato"
                ],
                "text-anchor": "bottom",
                "text-field": "{name}",
                "text-offset": [
                    0,
                    2
                ],
                "text-size": 10,
                "text-max-width": 9
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "#79906c",
                "text-halo-width": 1,
                "text-halo-color": "#ffffff"
            }
        },
        {
            "id": "place-labels",
            "type": "symbol",
            "source": "cartiqo",
            "source-layer": "labels",
            "filter":
                [
                    "==",
                    "type",
                    "place"
                ],
            "minzoom": 8,
            "maxzoom": 16,
            "layout": {
                "text-allow-overlap": false,
                "text-padding": 1,
                "text-size": 16,
                "text-font": ["Lato"],
                "text-field": "{name}",
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "#1d464d",
                "text-halo-width": 1,
                "text-halo-color": "#fff"
            }
        },
        {
            "id": "admin-hover",
            "type": "line",
            "source": "cartiqo",
            "source-layer": "boundaries",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "originalid", ""],
            "paint": {
                "line-color": "#eeee00",
                "line-width": 15
            }
        }
    ]
};

var map = new mapboxgl.Map({
    container: 'map-container',
    style: mystyle,
    hash: true,
    zoom: 11,
    pitch: 60,
    bearing: 62.4,
    center: [4.8, 52.4]
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), "top-left");


//Adding hover effect
map.on("mousemove", "admin", function (e) {
    // panel.innerHTML = e.features[0].properties.name;
    map.setFilter("admin-hover", ["==", "originalid", e.features[0].properties.originalid]);
});

// Reset the state-fills-hover layer's filter when the mouse leaves the layer.
map.on("mouseleave", "admin", function () {
    map.setFilter("admin-hover", ["==", "originalid", ""]);
});

// Get polygon infromation
map.on('click', 'admin', function (e) {
    console.log(e.features[0]);
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(e.features[0].properties.name)
        .addTo(map);

});

// Check for Mapbox gl support:
if (!mapboxgl.supported()) {
    alert('Your browser does not support Mapbox GL');
};



// Make a GEOJSON
var wurjson = {
    "type": "FeatureCollection",
    "name": "15yrMGI",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "fid": 0, "height": 60 }, "geometry": { "type": "Point", "coordinates": [5.66647, 51.98514] } },
        { "type": "Feature", "properties": { "fid": 1, "height": 45 }, "geometry": { "type": "Point", "coordinates": [5.66801, 51.9864] } },
        { "type": "Feature", "properties": { "fid": 2, "height": 100 }, "geometry": { "type": "Point", "coordinates": [5.66361, 51.98531] } },
        { "type": "Feature", "properties": { "fid": 3, "height": 30 }, "geometry": { "type": "Polygon", "coordinates": [[[5.66554, 51.98675], [5.66832, 51.9875], [5.66778, 51.98825], [5.66602, 51.98779], [5.66591, 51.98784], [5.66501, 51.98758], [5.66498, 51.98753], [5.66554, 51.98675]]] } }
    ]
};
// On Load add GeoJSON SOURCE and LAYER
map.on('load', function (e) {
    // ADD GEOJSON SOURCE
    map.addSource('punten', {
        'type': 'geojson',
        'data': wurjson
    });
    // ADD an extra layer
    map.addLayer({
        'id': 'geojson-points',
        'type': 'circle',
        'source': 'punten',
        'layout': {},
        'paint': {
            'circle-color': '#000fff',
            'circle-radius': 10
        }
    });
});
