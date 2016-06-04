
requirejs.config({
    paths: {
        "jquery": "https://code.jquery.com/jquery-2.2.4.min"
    }
    // ,
    // shim: {
    //     "tmpl": {
    //         "exports": "js/template"
    //     }
    // }
});

requirejs(["jquery", "model", "view", "controller", "template"], function ($, Model, View, Controller, template) {
  'use strict';


    var model = new Model(['Learn HTML','Learn CSS','Call client','Close project']);
    var view = new View(model);
    var controller = new Controller(model,view);

});
