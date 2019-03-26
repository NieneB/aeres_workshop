# Making your own.

The next chapters are used on your own. Assuming you know about Vector tiles and have some developing experience. 

What you need to know or have:

* everything from the beginners course
* `Docker`
* `NodeJS/NPM`
* your own data in `PostGIS` or as `GeoPackage`

There are a few thing you can do, depending on your own whishes:

## Serving & Generating
With [[OpenMapTiles]] you can serve existing tiles and styles. Maps are powered by the OpenStreetMap data and vector tiles from the OpenMapTiles project.

[[Tegola]] and [[T-rex]] serve data from your own PostGIS database to Vector tiles. You can also use these to cache your tiles. 

The [[T-rex]] tutorial is based on data from [NLExtract](https://data.nlextract.nl/) also for the [[Tegola]] server a example is available with [NLextract](https://data.nlextract.nl/) data. See https://github.com/nlextract/NLExtract/wiki/Vectortiles

## Customizing
To customize your map further we can create our own [[Sprite]] and [[Glyphs]].

## Viewing
The section [[Qgis]] is a short explanation about viewing your tiles in Qgis