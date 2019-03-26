# No access token! 

The link `style: 'mapbox://styles/nieneb/cjg3h8yp80oi82rldxukpu0oi',` contains everything what is needed to show the vector tile map:

- The vector tile source. 
- The styling information.
- Fonts and Glyphs

Mapbox Studio's style editor provides the user interface where you can define your map style. Behind the scenes, Studio creates the style.json and hosts it on the Mapbox Styles API when published. This style is then accessible via endpoint to add to your map.

If we use the Mapbox hosting we need an access token. But we can also generate and host this all ourselves! We can do this by making using our own data and making our own `style.json` file.

The style definition is most commonly supplied in a `JSON` format. :link: Mapbox provides good documentation on the [style specifications](https://www.mapbox.com/mapbox-gl-js/style-spec/)

Here we will learn how to make our own style object in JavaScript. 


## The style

The map style itself is written as rules which define its visual appearance using the Mapbox GL Style Specification. It specifies:

* What data to draw: [Sources](#sources)
* What order to draw the data in: [Layers](#layers)
* How to style the data when drawing it: [Layers](#layers)
* Which fonts and icons to use: Glyphs & Fonts

This is the basics of a style:

```js
var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "sprite": "url",
    "glyphs": "url/{fontstack}/{range}.pbf",
    "sources": {...},
    "layers": [...]
}
```
:arrow_forward: Create a style object in your JavaScript `main.js` file. 

```js
var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "sources": {...},
    "layers": [...]
}
```

The 2 most important for now are the `sources` and the `layers`. The sources tell us where our data is coming from. Vector Tiles or GeoJSON data for example. By setting `layers` we can style every separate layer available in the vector tiles and assigning it colours etc. 

In order to use this we need to create a style object in JavaScript and add it to the map definition, instead of the mapbox url. We can also remove the access token now. 

:arrow_forward: Change the mapbox url style into your own style object


```js
var map = new mapboxgl.Map({
        container: 'map',
        style: mystyle,
        hash: true,
        zoom: 11,
        pitch: 60,
        bearing: 62.4,
        center: [ 4.8, 52.4]
    });
```

:arrow_forward: Remove your mapbox access token.

## Sources

For now we start with 1 source, namely our vector tiles that are hosted by Webmapper:

```
"sources": {
    "cartiqo":{
        "type": "vector",
        "tiles":  [
            "https://ta.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tb.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tc.webmapper.nl/wm/cartiqo/{z}/{x}/{y}"
        ]
    }
},
```

:arrow_forward: Replace `"sources": {...},` with this source object in the `mystyle` object.

:information_source: The source name we give to it is `cartiqo` 

:information_source: The type of source is `vector` and the url to the tiles is given. 

## Layers

Next we can create layers, accordingly on what layers are available in the vector data. The first layer is a background layer with the background fill color white. Then we call a `admin` layer which is available in the vector tiles. We apply a filter to the layer in order to get only the province boundaries. 

```
"layers":[ 
        { 
            "id":  "background",
            "type": "background",
            "paint": {
                "background-color":"#FFFFFF"
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
        }
    ]
```

:arrow_forward: Add these `layers` to your `style` object.

Replace `"layers": [...]` with the code snippet. 

:arrow_forward: Refresh the file in your browser and see your custom map!

:information_source: The `"id"` is a custom name you give to the layer. You can give it any name you like.

:information_source: The `"source"` is the name of the source provided in the beginning of the style object. We called it `"cartiqo"`.

:information_source: The `"source-layer"` is the name of the data layer in the vector tiles. This information is fixed. We provided all the names of the layers for you already. A bit further on we will explain how you can request the vector tile information. 

:information_source: `"type"` is the rendering type of the layer. It can be one of `fill`, `line`, `symbol`, `circle`, `fill-extrusion`, `raster` or `background`. 

:information_source: `"paint"` Default paint properties for this layer.

There are more options you can give to a layer. For example:

 - filter
 - minzoom
 - maxzoom

We can go on and on with adding layers.


:arrow_forward: Try adding more layers and styling them!

For example:

```json
{
    "id": "buildings",
    "type": "fill",
    "source": "cartiqo",
    "source-layer":"builtup",
    "paint": {
        "fill-color": "#f37788",
        "fill-outline-color": "#ffffff"
    }
}
```

### Available layers and types:







We can also make use of already existing styles. 

:arrow_forward: Have a look at https://ta.webmapper.nl/wm/styles/topography.json to see a complete styling JSON for getting a map of the Netherlands. 

An alternative style is https://ta.webmapper.nl/wm/styles/data_lines.json

:arrow_forward: Copy this whole object as a variable in your `main.js` and see what happens if you style your map with this. 

## Make a beautiful map visualization. 

:arrow_forward: Try to design a map that goes with a existing project you are working on. Use new fonts and the colors of the housestyle of your project.

:arrow_forward: Think about what is necessary on your map. Do you need a full topographic map for your project or will simple country borders be sufficient? 

:arrow_forward: What is the initial view of your map? Will the user be allowed to scroll and zoom? Set the map settings and view so you control the map. 

:link: Make use of the Mapbox style spec: https://www.mapbox.com/mapbox-gl-js/style-spec/ 

:link: Mapbox also provides a lot of examples: https://www.mapbox.com/mapbox-gl-js/example/simple-map/

For inspiration:
:link: Have a look at https://www.mapbox.com/resources/guide-to-map-design-part-1.pdf

## Glyphs & Fonts

In order to add labels we need a font. Fonts have also to be converted to `pbf`, in order to render them with WebGL, these are called Glyphs. Mapbox provides some fonts glyphs but then there are also some open source alternatives and of course we can host them ourselves. 

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

If you do not want to depend on the Mapbox token we can use free providers or make our own. For example the fonts we made at Webmapper:

        "glyphs": "https://ta.webmapper.nl/wm/glyphs/{fontstack}/{range}.pbf",

:arrow_forward: Put the glyphs reference in your style object. place this above the `sources`.

Now we can add a label layer of type `symbol` :

```json
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
```

:arrow_forward: Add this layer at the end of your style object. 

There are a lot of options to style your labels. Have a look at :https://www.mapbox.com/mapbox-gl-js/style-spec#layers-symbol 

The most important is `"text-field" : "{name}"`. This takes the `name` attribute to assign the label text.

Then `"text-font":"["Lato"]` gets the Lato font which is available at our glyphs link.

Other fonts available at Webmapper are:

* `Comfortaa`
* `DosisLight`
* `Giraffey`
* `Lato`
* `LatoSemi`
* `Open Sans Regular`
* `RalewayBold`

`"text-size"` and `"text-color"` are also very important! 

:arrow_forward: Add the labels to your map which you need!

## Some styling tips.

* The order of the layers in your `style` is the order of drawing. So first defined layer, "background", is drawn first, the next layer is drawn on top, etc. 
* The labels placing priority is also dependend on the layer order. Layers at the top have less drawing priority, layers at the bottom of the file have more drawing priority!  

![creative](https://media.giphy.com/media/3oEduXdm2gjnrsJBOo/giphy.gif)

In [[MapboxGL js part 3]] we give you more information about the possibilities of styling the map and interaction on the map

* Adding a GeoJSON layer
* Adding multiple sources
* Fill-extrusion
* Interaction
* WebGL support
* Glyphs & Fonts
* Sprites & Icons

:no_entry_sign: [Solution](https://github.com/NieneB/aeres_workshop/tree/master/mapbox-gl-js-part-2)

:arrow_right: Go to the next step [[MapboxGL js part 3]] for more advanced mapping!

:arrow_right: When you are happy with your map go put it online with [[hosting on github]]! 