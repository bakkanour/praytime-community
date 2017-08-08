# praytime-community

[![N|Solid](https://upload.wikimedia.org/wikipedia/commons/a/a9/BISMILLAH.JPG)](https://nodesource.com/products/nsolid)

### The storie
> for a long time I was looking for a "geek" thing to display salat time
> why not a raspberry that litle computer can do most of things
> lazy as I am, the first thing i do was looking on the internet if somedoby
> already do that thing. I found some project but none of them fulfilled my
> expectations untill that i saw this [TV Screen] inside the masjid where
> I usually going to.
> And that's the begining...

__So praytime-community is a simple one-page site with responsive design and mobile ready.__

### Features!
  - Show you salat times with 15°
  - Responsive design
  - Geolocation using Google API

### To do...
__Want to contribute? Great!__
- Choosing calculating method
- Replace the Google API by something open source
- Make it run in docker for convenience

### Tech
praytime-community uses a number of open source projects to work properly:

* [Bootstrap]
* [JavaScript]
* [jQuery]
* [praytimes code]
* [GitHub]
And of course praytime-community itself is open source with on [GitHub]
* [praytime-community]

But geolocation is not, untill I find something to replace Google API
* [Google Maps Geolocation API]

### Installation
[praytime-community] is a simple web site, so you have to get a web server working and running, and place the code as you do with other site.
Or you can use python as web server and run [praytime-community] this way:
```sh
git clone https://github.com/bakkanour/praytime-community.git
cd praytime-community
python -m SimpleHTTPServer
```

### Docker
Hope it will come sooner...

License
----
None for the moment.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Bootstrap]: <http://getbootstrap.com/>
   [jQuery]: <http://jquery.com>
   [JavaScript]: <https://www.w3schools.com/js/>
   [Google Maps Geolocation API]: <https://developers.google.com/maps/documentation/geolocation/intro>
   [TV Screen]: <http://horaires.mosquee-gennevilliers.com/>
   [GitHub]: <https://github.com>
   [praytime-community]: <https://github.com/bakkanour/praytime-community>
   [praytimes code]: <http://praytimes.org/>
