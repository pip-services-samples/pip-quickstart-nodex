"use strict";

class HelloWorldController {
  constructor() {
    this._defaultName = "Pip User";
  }

  configure(config) {
    this._defaultName = config.getAsStringWithDefault("default_name", this._defaultName);
  }

  async greeting(name) {
    return "Hello, " + (name || this._defaultName) + "!";
  }
}

exports.HelloWorldController = HelloWorldController
