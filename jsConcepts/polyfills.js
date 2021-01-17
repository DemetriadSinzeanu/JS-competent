/** A polyfill is a piece of code that implements the features that you expect the browser to support natively.*/


/** The above lines of code are just regular JavaScript which are needed for the browser to understand if the browser does not 
 * have native support for the specific feature startsWith().*/

/** As an example we have a polyfill for the ES6 String method startsWith() */

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      const result = this.substr(position, searchString.length) === searchString;
      console.log(result)
      return result
    };
  }

/** The above lines of code are just regular JavaScript which are needed for the browser to understand
 * if the browser does not have native support for the specific feature startsWith(). */

/** Furthermore, if (!String.prototype.startsWith) is used to prevent overwriting of the browser’s native startsWith() method.
 * If the feature is not present then the polyfill fills the hole in the browser’s feature set. Cool stuff! */
