#easylogin
Stop hunting for the login link

## Works on Firefox and Chrome

## What it does
This lets you use a hotkey to log into sites, rather than looking for login
links all the time. It also binds a hotkey to register, and to go to the
index page.

Specifically, when enabled, this will give you the ability to use "l" as the
"login" key. Also "h" as "home" and "r" as "register. This is used as
part of whatever "accesskey" key chord is available on your OS. For
new macs, "CTRL+OPT+l/h/r," likely "ALT+SHIFT+l/h/r" on everything else.
Check here to be sure: https://en.wikipedia.org/wiki/Access_key


## Using It

First, clone this repo locally.

### Firefox
1. Type CMD-O (Or CTRL-O for windows, I've heard) in firefox to add a
plugin from your local directory.
2. Select the firefox/@easylogin-0.0.1.xpi file (or whatever the version is) from this repo and
   follow prompts to install it.

### Chrome
1. Go to Chrome and visit "chrome://extensions/" (no http or anything)
2. Select "Pack extension..." and choose the /chrome directory from this
   package (don't worry about the private key file the first time)
3. This will add a new "chrome.crx" file (and the first time, a
   "chrome.pem" file as well) to your directory
4. Now drag that new chrome.crx file onto the chrome://extensions page
   in chrome (yes, right into the browser)
5. You might have to click enable somewhere on that page.

## Hacking and Helping

### Firefox
1. You'll need the firefox build utility called "jpm."  You can install
   it like this:
    npm install jpm -g

If that didn't work, add a sudo at the beginning maybe

2. Change files (probably index.js and data/content-script.js)

3. Try it out with "jpm run". This will build a new version and launch
   it with a clean firefox profile.

4. Build a new one with "jpm xpi" to see what you did, but don't commit
   that file. The patch won't be accepted with a modified binary.

### Chrome
The whole process is pretty much identical to building it for yourself
in the previous section. Just fork and submit a PR if you want. You'll
probably just want to mess with the make_accesskeys.js file

### In general
I'm interested in on which sites the functionality is broken. If you
want to help with minimal commitment, just send a PR with additions to
broken_sites.md.

Don't commit any binary files or certs (chrome.crx, chrome.pem, or
@easylogin.xpi)

## What it doesn't do (Roadmap?)
1. Work on every site. Some sites don't work. Amazon doesn't work on the
   front page. There could be specific rules for pages that don't fit
   the mold, but right now, that is not the case.
2. Work even when certain things (input fields) have focus, so any site
   that uses autofocus will break this by default (until you click
   somewhere to blur first).
3. Have an accesskey (f?) to focus on any arbitrary search field in a
   site. There's very little consistency here.
4. Try to match links based on Aria attributes.
5. Try to match links with any intelligence generally. It just takes the first
   link with "login/log in/Login/LogIn/etc" that it sees. It might
   nonsensically just link to something in the content (eg. a reddit
   link about watching mature content on youtube without logging in)
6. Ignore links that point to different domains, eg. links on a content
   site like reddit that might link to stories
7. Right now, there aren't any binaries on the chrome store or firefox
   freegan garage sale or whatever they call it.
8. Also, it would be nice if both versions pulled from a common script
   file.

## MIT Licence

The MIT License (MIT)

Copyright (c) 2015 Evan Burchard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
