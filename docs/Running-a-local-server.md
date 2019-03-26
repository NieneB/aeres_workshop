### Running a local server

When developing a website, a web designer needs to be able to see his webpages the same way the end user would. Sometimes simply clicking on and viewing your HTML files in the web browser is enough, but if you want to test dynamic content, you will need to set up a local web server. Doing this is quite simple and can easily be accomplished on Windows, Mac, and Linux. There are many types of web servers available, but we will be using the Python's SimpleHTTPServer as it is very easy to set up.

Easy ways of doing this include running Python's SimpleHTTPServer in your map directory. 

:exclamation: Make sure you have Python installed. 


:arrow_forward: To start a HTTP server on port 8000 (which is the default port), simple type.

On Linux & Mac:

```
python -m SimpleHTTPServer [port]
```

On Windows:

```
python -m http.server [port]
```

Oef! But where?! 
Let's start from the beginning. There are 2 parts: one for Linux and Mac, and one for Windows. 


## Linux

:arrow_forward: On Linux open a Terminal. `Menu > Terminal`

If you have never done this before it might look a bit scary.. But don't worry. There is nothing we will do that will ruin your computer! We will start with the 3 most important navigation tools for the Terminal. Just image the Terminal is like your File Browser, but then without the interface.

:information_source: `pwd` means Print Working Directory. It will answer with the location that we are currently in. Try it:

:arrow_forward: Type `pwd` in the terminal and press enter! 

Probably you are in your home directory.

:information_source: `ls` will LiSt all the files in your current directory. (`dir` will do the same in Windows)

:information_source: `cd [directory]` stands for Change Directory and will navigate you to the next directory you told it to. 

:arrow_forward: If you have a folder named `Documents`, (check with `ls`) then type `cd Documents/` in the terminal and press enter! 

If we would type 'pwd' again, you can see that you changed from your home directory to you Documents directory. 

If you want to go back up the working tree we can use `cd ..` to move 1 folder up.

:arrow_forward: Type `cd ..` and press enter. Check with `pwd` where you are now. 

Using all this information we can browse to `YourDirectory` where the `index.html` and the GeoJSON file is.

This is where we will run our local server! 

:arrow_forward: To start a HTTP server on port 8000 (which is the default port), simple type:

```
python -m SimpleHTTPServer [port]
```

:arrow_forward: Now you can go to `localhost:8000/index.html` in your browser. 


### Windows.

:arrow_forward: On Windows open a Cmnd terminal. `Menu > cmnd.exe`

If you have never done this before it might look a bit scary.. But don't worry. There is nothing we will do that will ruin your computer! We will start with the 3 most important navigation tools for the Terminal. Just image the Terminal is like your File Browser, but then without the interface.

:information_source: `echo %cd%` echo's the Current Directory. It will answer with the location that we are currently in. Try it:

:arrow_forward: Type `echo %cd%` in the terminal and press enter! 

Probably you are in your home directory.
 
:information_source: `dir` will show all the files in your current DIRectory. 

:arrow_forward: Type `dir` in the terminal and press enter! Do you see all the files and folders of your current working directory?

:information_source: `cd [directory]` stands for Change Directory and will navigate you to the next directory you told it to. 

:arrow_forward: If you have a folder named `Documents`, (check with `dir`) then type `cd Documents\` in the terminal and press enter! 

If we would type 'cd' again, you can see that you changed from your home directory to you Documents directory. 
If you want to go back up the working tree we can use `cd ..` to move 1 folder up.

:arrow_forward: Type `cd ..` and press enter. Check with `cd` where you are now. 

Using all this information we can browse to `YourDirectory` where the `index.html` and the GeoJSON file is.

:arrow_forward: Using `cd` go to `Yourdirectory`. 

This is where we will run our local server! 

:arrow_forward: To start a HTTP server on port 8000 (which is the default port), simple type:

```
python -m http.server [port]
```

:arrow_forward: Now you can go to `localhost:8000/index.html` in your browser. 


### Useful stuff:

installing MAMP (for Mac), or installing WampServer (for Windows). 

http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/
https://www.maketecheasier.com/setup-local-web-server-all-platforms/
