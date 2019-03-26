# Solving CORS headers errors

CORS (cross origin request sharing) errors can be identified by checking for error messages in the console.
When you receive a CORS (cross origin request sharing) error, it means that the file you have opened is attempting to load external data, either from a relative or absolute URL.

To avoid this error, you can either put the file on the same domain (or, for local testing, in the same directory) as the Javascript, or open the file via a server delivering that supports CORS. Python’s SimpleHTTPServer supports CORS and is relatively straightforward to set up. See [[running things locally]] for help.

:link: https://www.mapbox.com/help/cors-errors/


## Enable CORS issues.

Firefox plug-in

:link: https://addons.mozilla.org/en-US/firefox/addon/cross-domain-cors/

Cross Domain will help you to deal with cross domain - CORS problem. This is a small tool will helpful for web developer and related domain that face with cross domain issue.