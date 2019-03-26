

# Fonts, Extrusions and interaction! 

What makes MapboxGL.js so cool is that you can add a lot of interaction and styling flexibility to the map. 
Here we will introduce some extra concepts and tricks. 

From here on the steps do not contain any specific action but are just an explanation about the possibilities in the style.json. You can use these to create your own map.

* [WebGL support](#webgl-support)
* [Glyphs & Fonts](#glyps--fonts)
* [Sprites & Icons](#sprites--icons)
* [Fill-extrusion](#fill-extrusion)
* [Interaction](#interaction)
* [Styling tips](#some-styling-tips)
* [Other sources to use](#other-tile-sources)

:link: https://www.mapbox.com/help/glossary/    


:arrow_right: When you are happy with your map go put it online with [[hosting on github]]! 


##  Fill-Extrusion

Do you want this cool 3D effect? This is called `fill-extrusion`.

A fill-extrusion is only possible on polygons! 

The type of layer is `fill-extrusion`:

```
{
    "id": "building_extrusion",
    "type": "fill-extrusion",
    "source": "pdok",
    "source-layer":"urban",
    "maxzoom": 22,
    "minzoom": 11,
    "paint": {
        "fill-extrusion-height": 20,
        "fill-extrusion-color": "#f37788",
        "fill-extrusion-opacity": 0.9
    }
}
```

:arrow_forward: Try to get one or more layers in fill-extrusion. (extrusion == 2,5D )

## Interaction

The best part about developing your own map is we can add our own JavaScript interaction. This gives you a lot of freedom with the interactivity and the possibilities to extent your application with other libraries, like D3.js. Think about graphs, pop-ups, side panels, scroll stories. 

Let's start with adding a simple mouse move action! 

```js
 //Adding hover effect
map.on("mousemove", "admin", function(e) {
    panel.innerHTML = e.features[0].properties.name;
    map.setFilter("admin-hover", ["==", "name", e.features[0].properties.name]);
});

// Reset the state-fills-hover layer's filter when the mouse leaves the layer.
map.on("mouseleave", "admin", function() {
    map.setFilter("admin-hover", ["==", "name", ""]);
});
```

:arrow_forward: Add this code to your `main.js` JavaScript file.


We need an extra layer in the `style`. We make the layer with an empty filter. So it does not show up on the map on initialization. With the `mousemove` event we can change the filter so the layer is rendered.  

```json
 {
    "id": "admin-hover",
    "type": "fill",
    "source": "pdok",
    "source-layer": "admin",
    "maxzoom": 22,
    "minzoom": 0,
    "filter": ["==", "name", ""],
    "paint": {
        "fill-color" :"#3fa39a"
    }
},
```

:arrow_forward: Add this to the `style` object. 

When you refresh your browser the Admin layer will change color on your mouse movement! 

## Get feature information in pop-up

We can also see attribute information about a feature on a mouse click. 

:arrow_forward: Add the following code to your JavaScript and change the `layer-name` to the layer you want to query. 

```js
// Get polygon infromation
map.on('click', 'geojson-points', function (e) {
console.log(e.features[0]);
new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(e.features[0].properties)
    .addTo(map);

});
```

:arrow_forward: Refresh your browser. Does the pop-up show up when you click on a feature? 

:information_source: The `console.log` statement logs the first `feature` of the clicked object `e`. :arrow_forward: Check your console logs for any errors or information about the feature. See if you can change the pop-up properties so it shows the information you want to see about object `e`. 


On the Mapbox Example page there are more JavaScript interaction examples to find! Check out these:

- https://www.mapbox.com/mapbox-gl-js/example/hover-styles/
- https://www.mapbox.com/mapbox-gl-js/example/center-on-symbol/
- https://www.mapbox.com/mapbox-gl-js/example/using-box-queryrenderedfeatures/


## Add another source

It is possible to add multiple sources to your style. This can be another tile source or a GeoJSON for example. 

## PDOK 

BGT en BRT data. 

https://github.com/PDOK/vectortiles-bgt-brt

https://forum.pdok.nl/t/vector-tiles-brt-en-bgt-via-pdok/1103/12

```
http://geodata.nationaalgeoregister.nl/beta/topotiles/{z}/{x}/{y}.pbf
```

## Amsterdam

https://api.data.amsterdam.nl/api/

https://github.com/maptime-ams/vector-tiles-workshop/blob/master/Workshop_Materials/Amsterdam/main.js

https://github.com/maptime-ams/vector-tiles-workshop/wiki


```
https://t1.data.amsterdam.nl/wm/{z}/{x}/{y}.pbf 
```

## ESRI

http://blogs.esri.nl/de-topografische-basiskaart-een-vertrouwd-beeld-met-nieuwe-technologie/

https://tiles.arcgis.com/tiles/nSZVuSZjHpEZZbRo/arcgis/rest/services/Topo_RD/VectorTileServer/tile/1/0/0.pbf

https://www.arcgis.com/home/item.html?id=c8cb478cd4da4206a56e2a2fba545ccf

## Openmaptiles

https://openmaptiles.com/downloads/europe/netherlands/


## Maptiler
[Maptiler]()

```
https://maps.tilehosting.com/data/v3.json?key=personalkey
https://maps.tilehosting.com/data/v3/{z}/{x}/{y}.pbf?key=personalkey"
```
## Tilehosting

https://www.tilehosting.com/

```
https://free.tilehosting.com/data/v3.json?key=*****
```
Want to make your own tiles? Check out the advanced part. 

## Glyphs & Fonts

In order to add labels we need a font. Fonts have also to be converted to `pbf`, in order to render them with WebGL, these are called Glyphs. Mapbox provides some fonts glyphs but then there are also some open source alternatives and of course we can host them ourselves. (see Advanced [[Glyps]], [[Fonts]])

We add the `glyphs` reference at the top of our style specification. 

```js
{
    "version": 8,
    "name": "Mijn eigen Stijl",
    "sprite": "url",
    "glyphs": "url/{fontstack}/{range}.pbf",
    "sources": {...},
    "layers": [...]
}
```

Using Mapbox fonts is possible by adding the glyphs to the style.json:

    "glyphs": "mapbox://fonts/openmaptiles/{fontstack}/{range}.pbf",

But you do need your mapbox access token again. 

If you do not want to depend on the Mapbox token we can use free providers or make our own. For example using fonts from openmaptiles:

    "glyphs": "http://fonts.openmaptiles.org/{fontstack}/{range}.pbf",

In the advanced tutorial [[Glyphs]] you can learn how to transform you own font to pbf range. 

Now we can add a label layer of type `symbol` :

```json
{
    "id": "high_prior_labels",
    "type": "symbol",
    "source": "pdok",
    "source-layer": "label",
    "maxzoom": 20,
    "minzoom": 5,
    "filter": ["==", "z_index", 1000000],
    "layout": {
        "visibility": "visible",
        "symbol-placement": "point",
        "symbol-avoid-edges" : false,
        "text-field":"{name}",
        "text-font": ["Open Sans Regular"],
        "text-size": 20,
        "text-max-width": 5,
        "text-anchor": "center",
        "text-line-height": 1,
        "text-justify": "center",
        "text-padding": 20,
        "text-allow-overlap": false
    },
    "paint":{
        "text-opacity": 1,
        "text-color": "#535353"
    }
}
```

There are a lot of options to style your labels. Have a look at :https://www.mapbox.com/mapbox-gl-js/style-spec#layers-symbol 

The most important is `"text-field" : "{name}"`. This takes the `name` attribute to assign the label text.

Then `"text-font":"["Open Sans Regular"]` gets the Open Sans font which is available at our glyphs link.

`"text-size"` and `"text-color"` are also very important! 

:arrow_forward: Add labels to your map! Use the PDOK labels. In the [PDOK vector Tile Documentation](https://github.com/PDOK/vectortiles-bgt-brt) you can find the layer name. 


### Glyph sources:

[Mapbox Fonts]()

    "glyphs": "mapbox://fonts/openmaptiles/{fontstack}/{range}.pbf",

[Open map tiles Glyphs](https://github.com/openmaptiles/fonts)

    "glyphs": "http://fonts.openmaptiles.org/{fontstack}/{range}.pbf",

    "glyphs" : "https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key={key}"

[Maptiler](https://cloud.maptiler.com/maps/basic/)

    "glyphs" : "https://maps.tilehosting.com/fonts/{fontstack}/{range}.pbf.pict?key=ownkey"


## Sprites & Icons

A sprite is a single image containing all icons included in a style. Sprites are often used in web development and even video games to improve performance. By combining lots of small images into a single image (sprite), you can reduce the number of requests needed to fetch all the images, improving performance and making your map faster.

:link: https://www.mapbox.com/help/define-sprite/
:link: https://www.mapbox.com/mapbox-gl-js/style-spec/#sprite

Your style requires the image sprites used for patterns and icons.

    "sprite": "http://openmaptiles.org/sprites/"

The link contains 2 files:

* a png file with the images
* a json file with the x and y location and reference name to the images. 

The 2 files have the same file name. 

Example of an icon in the `json` file: 

```
"airport-15": {
  "width": 42,
  "height": 42,
  "x": 76,
  "y": 300,
  "pixelRatio": 2,
  "visible": true
}
```
This means that you can reference an icon by name, such as "airport-15", and our map renderer will reference the JSON file to get data about the icon and then only show the sprite at that specific icon.

In order to create your own sprites and self-host them via HTTP, you need to use the spritezero-cli. See the advanced [[Sprite]] tutorial to make them yourself. 

For now we can use the OpenMaptile sprites. If you have a look at the
[Openmaptiles Github](https://github.com/openmaptiles/klokantech-basic-gl-style) you can find the available icons and their reference name. 

Use this sprite source in your `style.json`: 

    "sprite": "https://openmaptiles.github.io/klokantech-basic-gl-style/sprite"


To make a icon in your map we need a layer with type `symbol`:

 ```json
 {
    "id": "poi-park",
    "type": "symbol",
    "source": "oms",
    "source-layer": "poi",
    "minzoom": 15,
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "in",
            "subclass",
            "park",
            "playground"
        ]
    ],
    "layout": {
        "icon-image": "playground_11",
        "text-padding": 2,
        "text-font": [
            "Lato"
        ],
        "text-anchor": "center",
        "text-field":"{name}",
        "text-offset": [
            0,
            0.6
        ],
        "text-size": 12,
        "text-max-width": 9
    },
    "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#79906c",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
    }
},
```
:information_source: In the `layout` we specify the `"icon-image"` to use. This is the reference name that is defined in the sprite.json file. 


### Sprite sources:

[Openmaptiles](https://github.com/openmaptiles/klokantech-basic-gl-style)

    "sprite": "https://openmaptiles.github.io/klokantech-basic-gl-style/sprite"

[Maptiler](https://cloud.maptiler.com/maps/basic/)

    "sprite": "https://maps.tilehosting.com/styles/basic/sprite"


##  WebGL support

Do you want a pop-up when someone opens you application and does not have WebGL support? Add the following code to your JavaSript file:

```js
    // Check for Mapbox gl support:
    if (!mapboxgl.supported()) {
        alert('Your browser does not support Mapbox GL');
    };
```
