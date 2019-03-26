
Table of Contents
-------------------

.. toctree::
   :maxdepth: 1
   :numbered:

   Introduction in Vector tiles
   Mapbox studio
   MapboxGL js part 1
   MapboxGL js part 2
   MapboxGL js part 3
   Hosting on Github


    Making your own.md
    OpenMapTiles.md
    Tegola.md
    T-rex.md
    Glyphs.md
    Sprite.md
    Vector Tiles in Qgis.md


In case you need it
-------------------

**In case you need it:**

.. toctree::
   :maxdepth: 2

    Making a web page
    Troubleshooting WebGL support
    CORS headers
    Running things locally
    Interesting Links 

========================================================================
Welcome to the Aeres Workshop into Web mapping with Vector Tiles! 
========================================================================

## Presentation
-------------------
This workshop will start with a [presentation](https://nieneb.github.io/mgi_workshop/) to introduce the basic concepts that are needed to do this workshop.

## Workshop Description
-------------------
Vector tile technologie is een nieuw alternatief op de traditionele raster image tiles voor web maps. Zij maken web maps sneller te publiceren en flexibeler vorm te geven.

Hoe werken vector tiles en hoe kom je er aan? In deze workshop maken we zelf een web map op basis van vector tiles. We gebruiken vector tiles van PDOK en OpenMapTiles of maken vector tiles van eigen geo-data (PostGIS/GeoPackage). Er zijn voorbeelden voor beginners en gevorderden.

Voor beginners ligt de focus op de front-end ontwikkeling. We maken een kaart te maken met Mapbox Studio. Daarna zetten we zelf een eenvoudige web-pagina met een kaart-viewer op te zetten met MapboxGL.js. We gebruiken de Mapbox Style Specification om een eigen cartografische vormgeving te specificeren in de vorm van een style.json bestand. De vector tiles komen van PDOK. Enige voorkennis van HTML, CSS en JavaScript is hierbij handig.

Voor gevorderden zijn er voorbeelden om vanuit PostGIS je eigen data te serveren als vector tiles met Tegola of T-rex en om OpenStreetMap data te serveren met OpenMapTiles Server. Als extra kan je de cartografische vormgeving verder uitwerken door zelf iconen (sprites) te maken en eigen lettertypes (glyphs) te gebruiken. Deze voorbeelden gebruiken Docker of NodeJS/NPM om de tools te installeren en draaien.

## Short outline of the workshop
-------------------
1. Try out [[Mapbox Studio]]
Upload your own data and style this in the browser. 

2. Develop your own web map [[mapboxGL js part 1]]
Set-up your own web map with HTML, CSS and JS. We will use the MapboxGL JavaScript library and import the map you made in the previous step with [[Mapbox Studio]]

3. Make your own custom style. [[MapboxGL js part 2]]
Get loose from Mapbox and remove your access token to use the library at it fullest power with your own custom style! 

4. Get familiair with Fonts, Extrusion and even some JavaScript interaction in [[MapboxGL js part 3]]

5. Put your map online so you can show your results with the world! 

## At the end of the workshop you will be able to:

* Style a simple map in Mapbox Studio.
* Make a custom map with MapboxGL.js.
* Style vector tiles from PDOK according to the  [Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-js/style-spec/).

## Goal 
-------------------
At the end of this workshop, you will have your own web page with an interactive map based on vector tiles! Custom styled by yourself! Your web page will be hosted on Github, so you can immediately share your progress of the day with all your family and friends!


### Beginners
-------------------
You need to know a little about: HTML, CSS & JS. 

:link: If you are not that comfortable with HTML, CSS and JavaScript yet, this [Making a Web page](https://github.com/NieneB/Webmapping_for_beginners/wiki/Making-a-web-page) tutorial will help you along!

:link: Or do some online courses like the ones on [Code Academy](https://www.codecademy.com/)

Next you need a computer with:

* a web browser, like Firefox, Chrome or Safari.
* a proper text editor, like [Visual Studio Code](https://code.visualstudio.com/) , [Nodepad ++](https://notepad-plus-plus.org/download/v7.6.html), [SublimeText](http://www.sublimetext.com/) or [Brackets](http://brackets.io/) with [Syntax Highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting).
* Internet

>### Syntax Highlighting
>
> Syntax highlighting is a feature of text editors that are used for programming, scripting, or mark-up languages, such as HTML. It displays text, especially source code, in different colours and fonts according to the category of terms to make them more visually distinct. Highlighting does not affect the meaning of the text itself; it is intended only for human readers.

### Advanced
-------------------
You need your own laptop with:

* everything from the beginners course
* `Docker`
* `NodeJS/NPM`
* *Optional*: your own data in `PostGIS` or as `GeoPackage`


## How does this tutorial work?
-------------------
Just follow the links or the sidebar. At the bottom of each step is the link to the next step.

:fast_forward: Takes you to the next step

In the tutorials you will see:

:arrow_forward: This are the things that you should do, execute, get working! Hands on! 

:information_source: Indicates an explanation about the code blocks. 

Code is shown in code blocks or in-line. `this is in-line code` 

``` html
<h1> This is block code </h1>
```

Some background information, extra information or debug tips are shown in grey :

> This is some additional information
> or
> Some extra explanation

:link: Some additional reading materials or [interesting Links](https://findtheinvisiblecow.com/). 

## Preparation
-------------------
:arrow_forward: On your computer create a directory for yourself, where we can work in today. For example:

	/home/niene/Documents/MyVectorTileMap

In these directories we save everything we make and download today. During this workshop it is referred to as :open_file_folder:`yourDirectory`.

## Let's start!
-------------------
:arrow_right: If you are not that comfortable with HTML, CSS and JavaScript yet, this **[[Making a web page ]]** tutorial will help you along!

:arrow_right: If you already know some HTML, CSS and JavaScript, you can start immediately with reading the introduction to [[Vector tiles]]