# Tegola

Tegola is a vector tile server delivering Mapbox Vector Tiles leveraging PostGIS as the data provider.

* Native geometry processing (simplification, clipping, make valid, intersection, contains, scaling, translation)
* Mapbox Vector Tile v2 specification compliant.
* Embedded viewer with auto generated style for quick data visualization and inspection.
* Support for PostGIS as a data provider. Extensible to support additional data providers.
* Local filesystem caching. Extensible design to support additional cache backends.
* Cache seeding to fill the cache prior to web requests.
* Parallelized tile serving and geometry processing.
* Support for Web Mercator (3857) and WGS84 (4326) projections.


:link: https://github.com/go-spatial/tegola

Documentation on  https://hub.docker.com/r/gospatial/tegola/ or tegola.io


## Run with Docker

    docker pull gospatial/tegola

Run command line tool help to test if tegola is working:

    docker run --rm gospatial/tegola:latest /opt/tegola -h

:information_source: `--rm` removes the Docker container on exit. 
:information_source: `-h` runs the help command of Tegola. 

Make the following directories.

* /config
* /tiles


## Configuration file

We need to create a config.toml file.

```toml
[webserver]
port = ":9090"              # port to bind the web server to. defaults ":8080"

[cache]                     # configure a tile cache
type = "file"               # a file cache will cache to the local file system
basepath = "/tmp/tegola"    # where to write the file cache

# register data providers
[[providers]]
name = "test_postgis"       # provider name is referenced from map layers (required)
type = "postgis"            # the type of data provider. currently only supports postgis (required)
host = "localhost"          # postgis database host (required)
port = 5432                 # postgis database port (required)
database = "tegola"         # postgis database name (required)
user = "tegola"             # postgis database user (required)
password = ""               # postgis database password (required)
srid = 3857                 # The default srid for this provider. Defaults to WebMercator (3857) (optional)
max_connections = 50        # The max connections to maintain in the connection pool. Default is 100. (optional)

	[[providers.layers]]
	name = "landuse"                    # will be encoded as the layer name in the tile
	tablename = "gis.zoning_base_3857"  # sql or table_name are required
	geometry_fieldname = "geom"         # geom field. default is geom
	id_fieldname = "gid"                # geom id field. default is gid
	srid = 4326                         # the srid of table's geo data. Defaults to WebMercator (3857)

	[[providers.layers]]
	name = "roads"                      # will be encoded as the layer name in the tile
	tablename = "gis.zoning_base_3857"  # sql or table_name are required
	geometry_fieldname = "geom"         # geom field. default is geom
	id_fieldname = "gid"                # geom id field. default is gid
	fields = [ "class", "name" ]        # Additional fields to include in the select statement.

	[[providers.layers]]
	name = "rivers"                     # will be encoded as the layer name in the tile
	geometry_fieldname = "geom"         # geom field. default is geom
	id_fieldname = "gid"                # geom id field. default is gid
	# Custom sql to be used for this layer. Note: that the geometery field is wraped
	# in a ST_AsBinary() and the use of the !BBOX! token
	sql = "SELECT gid, ST_AsBinary(geom) AS geom FROM gis.rivers WHERE geom && !BBOX!"

# maps are made up of layers
[[maps]]
name = "zoning"                              # used in the URL to reference this map (/maps/:map_name)

	[[maps.layers]]
	name = "landuse"                         # name is optional. If it's not defined the name of the ProviderLayer will be used.
	                                         # It can also be used to group multiple ProviderLayers under the same namespace.
	provider_layer = "test_postgis.landuse"  # must match a data provider layer
	min_zoom = 12                            # minimum zoom level to include this layer
	max_zoom = 16                            # maximum zoom level to include this layer

		[maps.layers.default_tags]           # table of default tags to encode in the tile. SQL statements will override
		class = "park"

	[[maps.layers]]
	name = "rivers"                          # name is optional. If it's not defined the name of the ProviderLayer will be used.
	                                         # It can also be used to group multiple ProviderLayers under the same namespace.
	provider_layer = "test_postgis.rivers"   # must match a data provider layer
	dont_simplify = true                     # optionally, turn off simplification for this layer. Default is false.
	min_zoom = 10                            # minimum zoom level to include this layer
	max_zoom = 18                            # maximum zoom level to include this layer
```

## Serve

	docker run --rm -d -v `pwd`/config:/config -v `pwd`/tiles:/tiles  -p 9797:9797 --name tegolaserver gospatial/tegola /opt/tegola serve --config /config/config.toml

:information_source: `-d` runs the server on the background.

To view server logs and follow `-f`:

    docker logs -f tegolaserver

## Cache

To fill the cache:

	docker run --rm -d -v `pwd`/config:/config -v `pwd`/tiles:/tiles  -p 9797:9797 --name tegolacahce  gospatial/tegola /opt/tegola cache seed --bounds "5.109074,52.002952,5.233923,52.046929" --maxzoom 20 --minzoom 6 --overwrite --map mymap  --config /config/config.toml


## In your own MapboxGL.js map

```
"sources": {
    "omt":{
        "type": "vector",
        "tiles":  ["http://localhost:9797/maps/mymap/{z}/{x}/{y}.pbf"]
    }
},
```
