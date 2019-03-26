# Serving vector and raster tiles with OpenMapTiles Server

With The OpenMaptiles Server you can setup your own zoomable map of the whole world or of a selected region in a few basic steps. Maps are powered by the OpenStreetMap data and vector tiles from the OpenMapTiles project.

:link: https://openmaptiles.com/server/ 

:link: https://openmaptiles.org/docs/host/tileserver-gl/

:link: Main documentation https://tileserver.readthedocs.io/en/latest/ 

OpenMapTiles does not create the tiles for you! 

## 1. Download a mbtiles file

Download a `mbtiles` file: https://openmaptiles.com/downloads/planet/

For example the Meterlands:  https://openmaptiles.com/downloads/europe/netherlands/

Size: 910.34 MB / Format: MBTiles (PBF) 

    wget -c https://openmaptiles.os.zhdk.cloud.switch.ch/v3.6.1/extracts/europe/XY1umqRTonSPe1KelyZhz8b5Dh4QWULp/2017-07-03_europe_netherlands.mbtiles

## 2.  Install the server
    
Assuming you have Docker installed:

    docker pull klokantech/tileserver-gl
    docker run -it -v $(pwd):/data -p 8080:80 klokantech/tileserver-gl

    docker run --rm -it -v $(pwd):/data -p 8080:80 klokantech/openmaptiles-server

:link: https://tileserver.readthedocs.io/en/latest/installation.html#docker

## 3. Follow the step-by-step guide

Visit the web interface at http://localhost:8080/ or click in the Preview window and follow the web wizard. You will set your server in few steps.

OpenMapTiles server also supports adding your own data and styles. 

## 4. Use the tiles in your own MapboxGL map

In your `style.json` you can use the server as source for your vector tiles:

```
"sources": {
    "omt":{
        "type": "vector",
        "tiles":  ["http://localhost:8080/maps/{z}/{x}/{y}.pbf"]
    }
},
```
