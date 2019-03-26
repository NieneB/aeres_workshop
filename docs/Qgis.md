# Vector Tiles in Qgis

Install the QGIS-Plugin Vector Tiles Reader. https://giswiki.hsr.ch/Vector_Tiles_Reader_QGIS_Plugin

With this plugin you can read in vector tiles from a remote connection, an MBTiles file or a directory (with metadata and unpacked PDFs).

You need the correct:

1. tilejson.json
2. style.json
3. metadata.json


## Tilejson 2.2.0

Tilejson needs to be conform the tilejson spec 2.2.0:  https://github.com/mapbox/tilejson-spec/tree/master/2.2.0 

Example:
```json
{
    "tilejson": "1.0.0",
    "name": "OpenStreetMap",
    "description": "A free editable map of the whole world.",
    "version": "1.0.0",
    "attribution": "(c) OpenStreetMap contributors, CC-BY-SA",
    "scheme": "xyz",
    "tiles": [
        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ],
    "minzoom": 0,
    "maxzoom": 18,
    "bounds": [ -180, -85, 180, 85 ]
}
```
## Style json 

The style.json needs to be conform the Mapbox GL js style spec : https://www.mapbox.com/mapbox-gl-js/style-spec

Root properties:

```json
{
    "version": 8,
    "name": "Mapbox Streets",
    "sprite": "mapbox://sprites/mapbox/streets-v8",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "sources": {...},
    "layers": [...]
}
```

## Metadata

The metadata.json needs to be up to date! The metadata.json is mostly automatically created when generating your vector tiles. It is located in the directory of your tiles:

```
/root-dir/
  metadata.json
  /0
    /1
      /2.pbf
  /1
```
More information :  https://github.com/geometalab/Vector-Tiles-Reader-QGIS-Plugin/wiki/Help#metadatajson

Example:

```json
{
	"attribution": "",
	"basename": "osm_line_small",
	"bounds": "[8.22821,47.20934,8.28255,47.23532]",
	"center": "[8.25538,47.22233,2]",
	"description": "osm_line_small",
	"format": "pbf",
	"id": "osm_line_small",
	"json": "{\"vector_layers\":[{\"description\":\"\",\"fields\":{\"access\":\"\",\"addr:housename\":\"\",\"addr:housenumber\":\"\",\"addr:interpolation\":\"\",\"admin_level\":\"\",\"aerialway\":\"\",\"aeroway\":\"\",\"amenity\":\"\",\"area\":\"\",\"barrier\":\"\",\"bicycle\":\"\",\"boundary\":\"\",\"brand\":\"\",\"bridge\":\"\",\"building\":\"\",},\"id\":\"planet_osm_line\",\"maxzoom\":22,\"minzoom\":0}]}",
	"maxzoom": 6,
	"minzoom": 0,
	"name": "osm_line_small",
	"vector_layers": [{
			"maxzoom": 14,
			"fields": {
				"class": "String"
			},
			"minzoom": 0,
			"id": "water",
			"description": ""
		}, {
			"maxzoom": 14,
			"minzoom": 0,
			"id": "waterway",
			"description": ""
		}, {
			"maxzoom": 14,
			"fields": {
				"class": "String",
				"subclass": "String"
			},
			"minzoom": 0,
			"id": "landcover",
			"description": ""
		}, {
			"maxzoom": 14,
			"fields": {
				"class": "String"
			},
			"minzoom": 0,
			"id": "landuse",
			"description": ""
		}, {
			"maxzoom": 14,
			"minzoom": 0,
			"id": "mountain_peak",
			"description": ""
		}
	]
}
```

## Links:

* http://plugins.qgis.org/plugins/vector_tiles_reader/
* https://github.com/geometalab/Vector-Tiles-Reader-QGIS-Plugin
* https://giswiki.hsr.ch/Vector_Tiles_Reader_QGIS_Plugin