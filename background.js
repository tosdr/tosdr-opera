/*global opera:false*/
"use strict";

var button;

window.addEventListener('load', function() {
  button = opera.contexts.toolbar.createItem({
    disabled: false,
    title: "Terms of Service",
    icon: "img/logo-18.png",
    onclick: function() {
      window.opera.postError('"Button example" clicked.');
    }
  });
  opera.contexts.toolbar.addItem(button);
}, false);

opera.extension.onmessage = function(event) {
  var service = Tosdr.getService(event.data);
  if (service) {
    if (service.tosdr.rated) {
      button.icon = 'icons/' + service.tosdr.rated.toLowerCase() + '.png';
    }
    else {
      button.icon = 'icons/false.png';
    }
  }
  else {
    button.icon = 'icons/none.png';
  }
};
