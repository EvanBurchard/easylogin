var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
//function dummy(text, callback) {
  //callback(text);
//}

//exports.dummy = dummy;

//var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

//var button = buttons.ActionButton({
  //id: "mozilla-link",
  //label: "Visit Mozilla",
  //icon: {
    //"16": "./icon-16.png",
    //"32": "./icon-32.png",
    //"64": "./icon-64.png"
  //},
  //onClick: handleClick
//});

//function handleClick(state) {
  //console.log(autologin);
//}

var data = require("sdk/self").data;

require("sdk/tabs").on("ready", runScript);

function runScript(tab) {
  tab.attach({
    contentScriptFile:data.url("content-script.js")
  });

  //contentScript: "if (document.body) document.body.style.border = '5px solid red';"
}
