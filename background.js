/*global opera:false, Tosdr:false*/
"use strict";

var button;

window.addEventListener('load', function() {
  button = opera.contexts.toolbar.createItem({
    disabled: false,
    title: "Terms of Service",
    icon: "icons/none.png",
    popup: {
      href: 'popup.html',
      width: 550,
      height: 480
    }
  });
  opera.contexts.toolbar.addItem(button);
}, false);

opera.extension.onmessage = function(event) {
  updateIcon(event.data);
};
opera.extension.tabs.onfocus = function(event) {
  updateIcon(event.tab.url);
};
opera.extension.windows.onfocus = function() {
  updateIcon(opera.extension.tabs.getSelected().url);
};

function updateIcon(url) {
  var service = Tosdr.getService(url);
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
}
