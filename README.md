#easylogin
Stop hunting for the login link

## This is for firefox right now.  Might do a chrome one later.

## What it does
This lets you use a hotkey to log into sites, rather than looking for login
links all the time. It also binds a hotkey to register, and to go to the
index page.

## What it doesn't do (Roadmap?)
1. Work on every site. Some sites don't work. Amazon doesn't work.
2. Work even when certain things (input fields) have focus, so any site
   that uses autofocus will break this by default (until you click
   somewhere to blur first).
3. Have an accesskey (f?) to focus on any arbitrary search field in a
   site. There's very little consistency here.

## If you just want to use it
1. Click CMD-O (Or CTRL-O for windows, I've heard) in firefox to add a
plugin from your local directory.
2. Select the @easylogin-0.0.1.xpi (or whatever the version is) and
   follow prompts to install it.
3. When available, this will give you the ability to use "l" as the
   "login" key. Also "h" as "home" and "r" as "register. This is used as
   part of whatever "accesskey" key chord is available on your OS. For
   new macs, "CTRL+OPT+l," likely "ALT+SHIFT+l" on everything else.
   Check here to be sure: https://en.wikipedia.org/wiki/Access_key

## If you want to change it
1. You'll need the firefox build utility called "jpm."  You can install
   it like this:
    npm install jpm -g

If that didn't work, add a sudo at the beginning maybe

2. Change files (probably index.js and data/content-script.js)

3. Try it out with "jpm run". This will build a new version and launch
   it with a clean firefox profile.

4. Build a new one with "jpm xpi"

## If you want to give improved versions to other people
Send me a pull request.

## MIT Licence
