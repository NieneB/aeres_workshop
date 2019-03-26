# Check for WebGL support

Go to https://browserleaks.com/webgl

OR : https://get.webgl.org/

# How to Enable or Disable WebGL in Your Web Browser

### WebGL in Firefox

WebGL is supported and enabled by default since Firefox 4 and Firefox for Android 19.

To enable or disable WebGL in Firefox, follow the simple steps:

    In the address bar, type about:config, without any http:// or www
    Click the button labeled «I'll be careful, I promise!»
    In Search field, enter webgl.disabled string
    Toggle webgl.disabled to true to disable WebGL, or to false to enable WebGL, please do not confuse.


WebGL 2.0:

To enable WebGL 2 in Firefox, go to about:config and toggle webgl.enable-webgl2 to true.

WebGL 2 is enabled by default since Firefox 51.

### WebGL in Chrome

WebGL is supported and enabled by default since Chrome 8.

To disable WebGL, start Google Chrome with one of these command-line options:

    --disable-webgl turn off WebGL
    --disable-3d-apis turn off all client-visible 3D APIs, in particular WebGL and Pepper 3D

These instructions are valid for all Chromium-based web browsers, in the same way you can setup WebGL in Opera and Vivaldi.

WebGL 2.0:

To enable WebGL 2 in Chrome, open chrome://flags/, find WebGL 2.0 flag, and toggle it to Enabled.

WebGL 2 is enabled by default since Chrome 56.

### WebGL in Safari

WebGL is available and enabled by default since Safari 8.

Safari — the only browser that has the ability to Ask before running WebGL scripts in a random websites. You can easily enable or disable WebGL globally or for a specific website, by going the menu Preferences → Security → Allow WebGL → Website Settings.

WebGL 2.0:

WebGL 2 is available in Safari 10 Technology Previews, it can be enabled via the "Experimental Features" develop menu.

### WebGL in Edge and IE

WebGL enabled by default since IE 11, and there is no way to turn it off.

WebGL 2.0: so far no info about supporting WebGL 2 in Edge or IE.
