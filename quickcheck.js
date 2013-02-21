// Generated by CoffeeScript 1.3.3
(function() {
  var describe, genArray, genBoolean, genInteger, genNumber, genString, get_type, run,
    __slice = [].slice;

  get_type = function(type) {
    if (type === "String") {
      return genString();
    }
    if (type === "Integer") {
      return genInteger();
    }
    if (type === "Boolean") {
      return genBoolean();
    }
    if (type === "Number" || type === "Float") {
      return genNumber();
    }
    if (type.split(" ")[0] === "Array") {
      return genArray(type.split(" ")[1]);
    } else {
      return console.log("Not a valid type");
    }
  };

  genString = function() {
    var x;
    return (function() {
      var _i, _results;
      _results = [];
      for (x = _i = 0; _i <= 99; x = ++_i) {
        _results.push(Math.random().toString(36).substr(2, 16));
      }
      return _results;
    })();
  };

  genInteger = function() {
    var x;
    return (function() {
      var _i, _results;
      _results = [];
      for (x = _i = 0; _i <= 99; x = ++_i) {
        _results.push(Math.floor((Math.random() * 100) + 1));
      }
      return _results;
    })();
  };

  genNumber = function() {
    var x;
    return (function() {
      var _i, _results;
      _results = [];
      for (x = _i = 0; _i <= 99; x = ++_i) {
        _results.push(Math.random());
      }
      return _results;
    })();
  };

  genArray = function(str) {
    var array, x, _i;
    array = [];
    for (x = _i = 0; _i <= 99; x = ++_i) {
      array.push(get_type(str));
    }
    return array;
    return console.log(array);
  };

  genBoolean = function() {
    return Math.random() > 0.5;
  };

  run = function() {
    var description, name, properties, _i, _len, _results;
    name = arguments[0], properties = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    console.log("Testing " + name);
    console.log("-----------------------------");
    _results = [];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      description = properties[_i];
      _results.push(console.log(description));
    }
    return _results;
  };

  describe = function(type, func, failure) {
    var item, items, string, succeeded, success, _i, _len;
    string = "";
    success = 0;
    items = get_type(type);
    for (_i = 0, _len = items.length; _i < _len; _i++) {
      item = items[_i];
      if (func(item)) {
        success += 1;
        succeeded = true;
      } else {
        string += "Failed after completing " + (items.indexOf(item)) + " tests \n";
        string += item + "\n";
        break;
      }
    }
    string += "True for all " + success + " iterations \n";
    return string;
  };

  run("Sample", describe("Integer", function(x) {
    return ((x + 1) - 1) === x;
  }));

  console.log(genArray("Integer"));

}).call(this);
