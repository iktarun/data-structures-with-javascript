/**
 *Object.assign
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support    No      No      No                  No    No      No
 * -------------------------------------------------------------------------------
 */
if (typeof Object.create !== "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "create", {
    value: function (proto, propertiesObject) {
      if (typeof proto !== "object" && typeof proto !== "function") {
        throw new TypeError("Object prototype may only be an Object: " + proto);
      } else if (proto === null) {
        throw new Error(
          "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
        );
      }

      if (typeof propertiesObject != "undefined") {
        throw new Error(
          "This browser's implementation of Object.create is a shim and doesn't support a second argument."
        );
      }

      function F() {}
      F.prototype = proto;

      return new F();
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

/**
 *Object.assign
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support    No      No      No                  No    No      No
 * -------------------------------------------------------------------------------
 */
if (typeof Object.assign !== "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      "use strict";
      if (target === null || target === undefined) {
        throw new TypeError("Cannot convert undefined or null to object");
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
