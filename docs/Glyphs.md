# Making custom Glyphs with node-fontnik

## Make directories

    /glyps_tutorial
        /glyphs
        /font


## Download custom font

Download your font as a `.ttf` format from font squirrel. 

https://www.fontsquirrel.com  place in font folder.

    /glyps_tutorial
        /glyphs
        /font
            /Comfortaa


## Download node-fontnik

git clone https://github.com/mapbox/node-fontnik.git

    /glyps_tutorial
        /node-fontnik
        /glyphs
        /font

in folder /node-fontnik run

    nmp install

Now you need to run "node-fontnik" - inside the "glyphs-tutorial" directory, run the following commands:


    node-fontnik/bin/build-glyphs fonts/Comfortaa/Comfortaa-Regular.ttf glyphs/Comfortaa


In your `style.json`:

    "glyphs": "http://localhost:8000/glyphs/{fontstack}/{range}.pbf",


## Tutorial:

https://developer.tomtom.com/maps-sdk-web/tutorials-advanced/creating-custom-glyphs


# genfontgl
Another tool 

A simple command line tool to generate fonts for Mapbox GL via fontnik without gzipping the result.
https://github.com/sabas/genfontgl

https://www.npmjs.com/package/genfontgl

    npm install genfontgl
    
    genfontgl OpenSans-Regular.ttf [output location]

    npm run genfontgl -- OpenSans-Regular.ttf [output location]