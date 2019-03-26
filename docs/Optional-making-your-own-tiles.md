You can make your own tiles if you have some geodata. There are many tools and servers out there for generating and hosting vector tiles. Have a look at https://github.com/mapbox/awesome-vector-tiles.

One of the best tools we found, and is available in Docker, is Tippecanoe from Mapbox itself. It is open source and free to use!

# Making your own vector tiles with TippeCanoe! 

To use Tippecanoe you need:

	- Docker
	- Geodata as GeoJSONs

:arrow_forward: Export your geodata to GeoJSON. For example with `ogr2ogr` or export from Qgis or any other GIS tool you use.  

:arrow_forward: Get Tippecanoe.

Get the code form https://github.com/mapbox/tippecanoe . Here you can also find their documentation. To build and run tippecanoe:

	docker run -it --rm \
	  -v /tiledata:/data \
	  tippecanoe:latest \
	  tippecanoe --output=/data/output.mbtiles /data/example.geojson

I already dockerized Tippecaoe and put in on the Docker Hub. So you can also immediately pull it form there. For the first time just run:

	docker run niene/tippecanoe

For more information just read the Tippecanoe documentation. If you have any questions, feel free to contact me!

# Get tiles from OSM
Another way of getting vector tiles, without having your own data is from OSM. 

Have a look at http://osm2vectortiles.org/

