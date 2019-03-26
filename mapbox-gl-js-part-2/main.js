var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "glyphs": "https://ta.webmapper.nl/wm/glyphs/{fontstack}/{range}.pbf",
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
            "source-layer":"builtup",
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
                "text-font":  ["Lato"],
                "text-field": "{name}",
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color":"#1d464d",
                "text-halo-width": 1,
                "text-halo-color": "#fff"
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
