var links = document.body.getElementsByTagName("a");
var signup_re = /(Sign ?Up)|(Register)/i;
var login_re = /(Sign ?In)|(Log ?In)/i;
var keysBound = [];

Array.prototype.forEach.call(links, function(link){
  if(link.text.match(login_re)){
    if(keysBound.indexOf('l')===-1){
      keysBound.push('l');
      link.setAttribute("accesskey","l");
      return true;
    }
  };
  if(link.text.match(signup_re)){
    if(keysBound.indexOf('r')===-1){
      keysBound.push('r');
      link.setAttribute("accesskey","r");
      return true;
    };
  };
  var href = link.getAttribute('href');
  if(href===window.location.origin || href===window.location.host || href===window.location.hostname || href==='/' ){
    if(keysBound.indexOf('h')===-1){
      keysBound.push('h');
      link.setAttribute("accesskey","h")
      return true;
    };
  };
});
console.log("keysBound are: ", keysBound)
