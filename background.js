/*global opera:false*/
"use strict";

window.addEventListener('load', function() {
  var button = opera.contexts.toolbar.createItem({
    disabled: false,
    title: "Terms of Service",
    icon: "img/logo-18.png",
    onclick: function() {
      window.opera.postError('"Button example" clicked.');
    }
  });
  opera.contexts.toolbar.addItem(button);
}, false);
