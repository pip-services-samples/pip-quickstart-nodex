"use strict";

const components = require("pip-services3-components-nodex");
const commons = require("pip-services3-commons-nodex");
const controller = require("./HelloWorldController");
const restService = require("./HelloWorldRestService");

class HelloWorldServiceFactory extends components.Factory {
    constructor() {
        super();
        this.registerAsType(
            new commons.Descriptor('hello-world', 'controller', 'default', '*', '1.0'),
            controller.HelloWorldController
        );
        this.registerAsType(
            new commons.Descriptor('hello-world', 'service', 'http', '*', '1.0'),
            restService.HelloWorldRestService
        );
    }
}

exports.HelloWorldServiceFactory = HelloWorldServiceFactory
