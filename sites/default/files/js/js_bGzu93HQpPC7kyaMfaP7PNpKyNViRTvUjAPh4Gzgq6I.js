/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
window.drupalTranslations = {"strings":{"":{"Save":"\u4fdd\u5b58","Status message":"\u72b6\u6001\u6d88\u606f","Error message":"\u9519\u8bef\u4fe1\u606f","Warning message":"\u8b66\u544a\u4fe1\u606f","An AJAX HTTP error occurred.":"\u53d1\u751f\u4e00\u4e2aAJAX HTTP\u9519\u8bef\u3002","HTTP Result Code: !status":"HTTP\u8fd4\u56de\u4ee3\u7801\uff1a!status","StatusText: !statusText":"\u72b6\u6001\u6587\u672c: !statusText","ResponseText: !responseText":"\u54cd\u5e94\u6587\u672c\uff1a !responseText","ReadyState: !readyState":"\u51c6\u5907\u72b6\u6001\uff1a !readyState","CustomMessage: !customMessage":"\u5b9a\u5236\u4fe1\u606f\uff1a !customMessage","Please wait...":"\u8bf7\u7a0d\u7b49...","The callback URL is not local and not trusted: !url":"\u975e\u672c\u5730\u7684\u56de\u8c03\u5730\u5740\u4e0d\u4f1a\u88ab\u4fe1\u4efb\uff1a !url","Changed":"\u5df2\u66f4\u6539","Home":"\u9996\u9875","Next":"\u4e0b\u4e00\u4e2a","Replies":"\u56de\u590d","closed":"\u5df2\u5173\u95ed","Cancel":"\u53d6\u6d88","Edit":"\u7f16\u8f91","Open":"\u5f00\u653e","Continue":"\u7ee7\u7eed","Close":"\u5173\u95ed","Select all rows in this table":"\u9009\u62e9\u6b64\u8868\u4e2d\u7684\u6240\u6709\u884c","Deselect all rows in this table":"\u53d6\u6d88\u5168\u9009\u6b64\u8868\u4e2d\u7684\u6240\u6709\u884c","Extend":"\u6269\u5c55","Not promoted":"\u672a\u63a8\u8350","By @name on @date":"\u7531 @name \u5728 @date \u53d1\u5e03","By @name":"\u7531 @name \u53d1\u5e03","Not in menu":"\u4e0d\u5728\u83dc\u5355\u4e2d","Alias: @alias":"\u522b\u540d\uff1a@alias","No alias":"\u65e0\u522b\u540d","@label":"@label","New revision":"\u65b0\u7684\u4fee\u8ba2\u7248\u672c","No revision":"\u6ca1\u6709\u4fee\u8ba2\u7248\u672c","Not restricted":"\u672a\u53d7\u9650\u5236","(active tab)":"\uff08\u6d3b\u52a8\u6807\u7b7e\uff09","Restricted to certain pages":"\u9650\u5236\u5230\u7279\u5b9a\u7684\u533a\u5757","The block cannot be placed in this region.":"\u6b64\u533a\u5757\u4e0d\u80fd\u653e\u7f6e\u5728\u6b64\u533a\u57df\u4e2d","Hide summary":"\u9690\u85cf\u6458\u8981","Edit summary":"\u7f16\u8f91\u6458\u8981","Collapse":"\u6298\u53e0","Needs to be updated":"\u9700\u8981\u88ab\u66f4\u65b0","Does not need to be updated":"\u4e0d\u9700\u8981\u88ab\u66f4\u65b0","Show all columns":"\u663e\u793a\u6240\u6709\u5217","List additional actions":"\u5217\u51fa\u989d\u5916\u7684\u52a8\u4f5c","Flag other translations as outdated":"\u628a\u5176\u4ed6\u7ffb\u8bd1\u6807\u793a\u4e3a\u5df2\u8fc7\u671f","Do not flag other translations as outdated":"\u4e0d\u628a\u5176\u4ed6\u7ffb\u8bd1\u6807\u793a\u4e3a\u5df2\u8fc7\u671f","opened":"\u5df2\u6253\u5f00","Horizontal orientation":"\u6a2a\u5411","Vertical orientation":"\u7eb5\u5411","Tray orientation changed to @orientation.":"\u6258\u76d8\u65b9\u5411\u5df2\u66f4\u6539\u4e3a @orientation\u3002","@action @title configuration options":"@action @title \u914d\u7f6e\u9009\u9879","Press the esc key to exit.":"\u6309ESC\u952e\u9000\u51fa\u3002","End tour":"\u7ed3\u675f\u5bfc\u89c8","Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.":"\u66f4\u6539\u6587\u672c\u683c\u5f0f\u81f3 %text_format \u5c06\u6c38\u4e45\u5220\u9664\u8be5\u6587\u672c\u683c\u5f0f\u4e0d\u5141\u8bb8\u7684\u5185\u5bb9\u3002\u003Cbr\u003E\u003Cbr\u003E\u8bf7\u5728\u5207\u6362\u6587\u672c\u683c\u5f0f\u524d\u4fdd\u5b58\u60a8\u7684\u66f4\u6539\uff0c\u4ee5\u907f\u514d\u4e22\u5931\u6570\u636e\u3002","Tray \u0022@tray\u0022 @action.":"\u6258\u76d8\u201c@tray\u201d@action\u3002","Tray @action.":"\u6258\u76d8 @action\u3002","Hide lower priority columns":"\u9690\u85cf\u8f83\u4f4e\u4f18\u5148\u7ea7\u7684\u5217","!modules modules are available in the modified list.":"!modules \u6a21\u5757\u5728\u5df2\u4fee\u6539\u5217\u8868\u4e2d\u53ef\u7528\u3002","Authored on @date":"\u8ba4\u8bc1\u65e5\u671f\uff1a@date","Text alternative":"\u66ff\u4ee3\u6587\u672c","Add missing alternative text":"\u6dfb\u52a0\u7f3a\u5c11\u7684\u66ff\u4ee3\u6587\u672c","Change image alternative text":"\u6539\u53d8\u56fe\u7247\u66ff\u4ee3\u6587\u672c"}},"pluralFormula":{"1":0,"default":1}};;
/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {
  // Use direct child elements to harden against XSS exploits when CSP is on.
  const settingsElement = document.querySelector(
    'head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]',
  );

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = { behaviors: {}, locale: {} };

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (
  Drupal,
  drupalSettings,
  drupalTranslations,
  console,
  Proxy,
  Reflect,
) {
  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(() => {
      throw error;
    }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} [detach]
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * once('behavior-name', selector, context);` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `once.filter()` and `once.remove()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `once.remove('behaviorName', selector, context)`,
   * to ensure the behavior is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    const processedArgs = {};
    // Transform arguments before inserting them.
    Object.keys(args || {}).forEach((key) => {
      switch (key.charAt(0)) {
        // Escaped only.
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        // Pass-through.
        case '!':
          processedArgs[key] = args[key];
          break;

        // Escaped and placeholder.
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      // Order the keys by the character length. The shortest one is the first.
      keys.sort((a, b) => a.length - b.length);
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    const key = keys.pop();
    const fragments = str.split(key);

    if (keys.length) {
      for (let i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.strings &&
      drupalTranslations.strings[options.context] &&
      drupalTranslations.strings[options.context][str]
    ) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    const urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    } catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {boolean}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    let absoluteUrl = Drupal.url.toAbsolute(url);
    let { protocol } = window.location;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    let baseUrl = `${protocol}//${
      window.location.host
    }${drupalSettings.path.baseUrl.slice(0, -1)}`;

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(`${baseUrl}/`) === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    const pluralDelimiter = drupalSettings.pluralDelimiter;
    const translations = Drupal.t(
      singular + pluralDelimiter + plural,
      args,
      options,
    ).split(pluralDelimiter);
    let index = 0;

    // Determine the index of the plural form.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.pluralFormula
    ) {
      index =
        count in drupalTranslations.pluralFormula
          ? drupalTranslations.pluralFormula[count]
          : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Triggers deprecation error.
   *
   * Deprecation errors are only triggered if deprecation errors haven't
   * been suppressed.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {string} deprecation.message
   *   The deprecation message.
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecationError = ({ message }) => {
    if (
      drupalSettings.suppressDeprecationErrors === false &&
      typeof console !== 'undefined' &&
      console.warn
    ) {
      console.warn(`[Deprecation] ${message}`);
    }
  };

  /**
   * Triggers deprecation error when object property is being used.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {Object} deprecation.target
   *   The targeted object.
   * @param {string} deprecation.deprecatedProperty
   *   A key of the deprecated property.
   * @param {string} deprecation.message
   *   The deprecation message.
   * @returns {Object}
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecatedProperty = ({ target, deprecatedProperty, message }) => {
    // Proxy and Reflect are not supported by all browsers. Unsupported browsers
    // are ignored since this is a development feature.
    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: (target, key, ...rest) => {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message });
        }
        return Reflect.get(target, key, ...rest);
      },
    });
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func, ...args) {
    if (func in Drupal.theme) {
      return Drupal.theme[func](...args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;
  };
})(
  Drupal,
  window.drupalSettings,
  window.drupalTranslations,
  window.console,
  window.Proxy,
  window.Reflect,
);
;
// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// Class indicating that JS is enabled; used for styling purpose.
document.documentElement.className += ' js';

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (Drupal, drupalSettings) {
  /**
   * Calls callback when document ready.
   *
   * @param {function} callback
   *   The function to be called on document ready.
   */
  const domReady = (callback) => {
    const listener = () => {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  // Attach all behaviors.
  domReady(() => {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);
;
/*!
* tabbable 6.0.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,o=e.tabbable={};t(o),o.noConflict=function(){return e.tabbable=n,o}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},i=function(e,t,o){var a=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&a.unshift(e),a=a.filter(o)},l=function e(t,o,a){for(var i=[],l=Array.from(t);l.length;){var u=l.shift();if("SLOT"===u.tagName){var c=u.assignedElements(),d=e(c.length?c:u.children,!0,a);a.flatten?i.push.apply(i,d):i.push({scopeParent:u,candidates:d})}else{r.call(u,n)&&a.filter(u)&&(o||!t.includes(u))&&i.push(u);var f=u.shadowRoot||"function"==typeof a.getShadowRoot&&a.getShadowRoot(u),s=!a.shadowRootFilter||a.shadowRootFilter(u);if(f&&s){var p=e(!0===f?u.children:f.children,!0,a);a.flatten?i.push.apply(i,p):i.push({scopeParent:u,candidates:p})}else l.unshift.apply(l,u.children)}}return i},u=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},f=function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||a(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},s=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},p=function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var i=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(i,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return s(e)}else{if("function"==typeof o){for(var l=e;e;){var u=e.parentElement,c=a(e);if(u&&!u.shadowRoot&&!0===o(u))return s(e);e=e.assignedSlot?e.assignedSlot:u||c===e.ownerDocument?u:c.host}e=l}if(function(e){for(var t,n=a(e).host,o=!!(null!==(t=n)&&void 0!==t&&t.ownerDocument.contains(n)||e.ownerDocument.contains(e));!o&&n;){var r;o=!(null===(r=n=a(n).host)||void 0===r||!r.ownerDocument.contains(n))}return o}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},h=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||p(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},m=function(e,t){return!(f(t)||u(t)<0||!h(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},y=function e(t){var n=[],o=[];return t.forEach((function(t,r){var a=!!t.scopeParent,i=a?t.scopeParent:t,l=u(i,a),c=a?e(t.candidates):i;0===l?a?n.push.apply(n,c):n.push(i):o.push({documentOrder:r,tabIndex:l,item:t,isScope:a,content:c})})),o.sort(c).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},g=t.concat("iframe").join(",");e.focusable=function(e,t){return(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:h.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):i(e,t.includeContainer,h.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,g)&&h(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&m(t,e)},e.tabbable=function(e,t){var n;return n=(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:m.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):i(e,t.includeContainer,m.bind(null,t)),y(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
 * @file
 * Customization of checkbox.
 */

((Drupal) => {
  /**
   * Constructs a checkbox input element.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.checkbox = () =>
    '<input type="checkbox" class="form-checkbox form-boolean form-boolean--type-checkbox"/>';
})(Drupal);
;
/**
 * @file
 * Controls the visibility of desktop navigation.
 *
 * Shows and hides the desktop navigation based on scroll position and controls
 * the functionality of the button that shows/hides the navigation.
 */

/* eslint-disable no-inner-declarations */
((Drupal) => {
  /**
   * Olivero helper functions.
   *
   * @namespace
   */
  Drupal.olivero = {};

  /**
   * Checks if the mobile navigation button is visible.
   *
   * @return {boolean}
   *   True if navButtons is hidden, false if not.
   */
  function isDesktopNav() {
    const navButtons = document.querySelector(
      '[data-drupal-selector="mobile-buttons"]',
    );
    return navButtons
      ? window.getComputedStyle(navButtons).getPropertyValue('display') ===
          'none'
      : false;
  }

  Drupal.olivero.isDesktopNav = isDesktopNav;

  const stickyHeaderToggleButton = document.querySelector(
    '[data-drupal-selector="sticky-header-toggle"]',
  );
  const siteHeaderFixable = document.querySelector(
    '[data-drupal-selector="site-header-fixable"]',
  );

  /**
   * Checks if the sticky header is enabled.
   *
   * @return {boolean}
   *   True if sticky header is enabled, false if not.
   */
  function stickyHeaderIsEnabled() {
    return stickyHeaderToggleButton.getAttribute('aria-checked') === 'true';
  }

  /**
   * Save the current sticky header expanded state to localStorage, and set
   * it to expire after two weeks.
   *
   * @param {boolean} expandedState
   *   Current state of the sticky header button.
   */
  function setStickyHeaderStorage(expandedState) {
    const now = new Date();

    const item = {
      value: expandedState,
      expiry: now.getTime() + 20160000, // 2 weeks from now.
    };
    localStorage.setItem(
      'Drupal.olivero.stickyHeaderState',
      JSON.stringify(item),
    );
  }

  /**
   * Toggle the state of the sticky header between always pinned and
   * only pinned when scrolled to the top of the viewport.
   *
   * @param {boolean} pinnedState
   *   State to change the sticky header to.
   */
  function toggleStickyHeaderState(pinnedState) {
    if (isDesktopNav()) {
      if (pinnedState === true) {
        siteHeaderFixable.classList.add('is-expanded');
      } else {
        siteHeaderFixable.classList.remove('is-expanded');
      }

      stickyHeaderToggleButton.setAttribute('aria-checked', pinnedState);
      setStickyHeaderStorage(pinnedState);
    }
  }

  /**
   * Return the sticky header's stored state from localStorage.
   *
   * @return {boolean}
   *   Stored state of the sticky header.
   */
  function getStickyHeaderStorage() {
    const stickyHeaderState = localStorage.getItem(
      'Drupal.olivero.stickyHeaderState',
    );

    if (!stickyHeaderState) return false;

    const item = JSON.parse(stickyHeaderState);
    const now = new Date();

    // Compare the expiry time of the item with the current time.
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage and return null.
      localStorage.removeItem('Drupal.olivero.stickyHeaderState');
      return false;
    }
    return item.value;
  }

  // Only enable scroll interactivity if the browser supports Intersection
  // Observer.
  // @see https://github.com/w3c/IntersectionObserver/blob/master/polyfill/intersection-observer.js#L19-L21
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    const fixableElements = document.querySelectorAll(
      '[data-drupal-selector="site-header-fixable"], [data-drupal-selector="social-bar-inner"]',
    );

    function toggleDesktopNavVisibility(entries) {
      if (!isDesktopNav()) return;

      entries.forEach((entry) => {
        // Firefox doesn't seem to support entry.isIntersecting properly,
        // so we check the intersectionRatio.
        if (entry.intersectionRatio < 1) {
          fixableElements.forEach((el) => el.classList.add('is-fixed'));
        } else {
          fixableElements.forEach((el) => el.classList.remove('is-fixed'));
        }
      });
    }

    /**
     * Gets the root margin by checking for various toolbar classes.
     *
     * @return {string}
     *   Root margin for the Intersection Observer options object.
     */
    function getRootMargin() {
      let rootMarginTop = 72;
      const { body } = document;

      if (body.classList.contains('toolbar-fixed')) {
        rootMarginTop -= 39;
      }

      if (
        body.classList.contains('toolbar-horizontal') &&
        body.classList.contains('toolbar-tray-open')
      ) {
        rootMarginTop -= 40;
      }

      return `${rootMarginTop}px 0px 0px 0px`;
    }

    /**
     * Monitor the navigation position.
     */
    function monitorNavPosition() {
      const primaryNav = document.querySelector(
        '[data-drupal-selector="site-header"]',
      );
      const options = {
        rootMargin: getRootMargin(),
        threshold: [0.999, 1],
      };

      const observer = new IntersectionObserver(
        toggleDesktopNavVisibility,
        options,
      );

      if (primaryNav) {
        observer.observe(primaryNav);
      }
    }

    if (stickyHeaderToggleButton) {
      stickyHeaderToggleButton.addEventListener('click', () => {
        toggleStickyHeaderState(!stickyHeaderIsEnabled());
      });
    }

    // If header is pinned open and a header element gains focus, scroll to the
    // top of the page to ensure that the header elements can be seen.
    const siteHeaderInner = document.querySelector(
      '[data-drupal-selector="site-header-inner"]',
    );
    if (siteHeaderInner) {
      siteHeaderInner.addEventListener('focusin', () => {
        if (isDesktopNav() && !stickyHeaderIsEnabled()) {
          const header = document.querySelector(
            '[data-drupal-selector="site-header"]',
          );
          const headerNav = header.querySelector(
            '[data-drupal-selector="header-nav"]',
          );
          const headerMargin = header.clientHeight - headerNav.clientHeight;
          if (window.scrollY > headerMargin) {
            window.scrollTo(0, headerMargin);
          }
        }
      });
    }

    monitorNavPosition();
    setStickyHeaderStorage(getStickyHeaderStorage());
    toggleStickyHeaderState(getStickyHeaderStorage());
  }
})(Drupal);
;
/**
 * @file
 * Provides interactivity for showing and hiding the primary tabs at mobile widths.
 */

((Drupal, once) => {
  /**
   * Initialize the primary tabs.
   *
   * @param {HTMLElement} el
   *   The DOM element containing the primary tabs.
   */
  function init(el) {
    const tabs = el.querySelector('.tabs');
    const expandedClass = 'is-expanded';
    const activeTab = tabs.querySelector('.is-active');

    /**
     * Determines if primary tabs are expanded for mobile layouts.
     *
     * @return {boolean}
     *   Whether the tabs trigger element is expanded.
     */
    function isTabsMobileLayout() {
      return tabs.querySelector('.tabs__trigger').clientHeight > 0;
    }

    /**
     * Controls primary tab visibility on click events.
     *
     * @param {Event} e
     *   The event object.
     */
    function handleTriggerClick(e) {
      if (!tabs.classList.contains(expandedClass)) {
        e.currentTarget.setAttribute('aria-expanded', 'true');
        tabs.classList.add(expandedClass);
      } else {
        e.currentTarget.setAttribute('aria-expanded', 'false');
        tabs.classList.remove(expandedClass);
      }
    }

    if (isTabsMobileLayout() && !activeTab.matches('.tabs__tab:first-child')) {
      const newActiveTab = activeTab.cloneNode(true);
      const firstTab = tabs.querySelector('.tabs__tab:first-child');
      tabs.insertBefore(newActiveTab, firstTab);
      tabs.removeChild(activeTab);
    }

    tabs
      .querySelector('.tabs__trigger')
      .addEventListener('click', handleTriggerClick);
  }

  /**
   * Initialize the primary tabs.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Display primary tabs according to the screen width.
   */
  Drupal.behaviors.primaryTabs = {
    attach(context) {
      once('olivero-tabs', '[data-drupal-nav-primary-tabs]', context).forEach(
        init,
      );
    },
  };
})(Drupal, once);
;
/**
 * @file
 * Wide viewport search bar interactions.
 */

((Drupal) => {
  const searchWideButtonSelector =
    '[data-drupal-selector="block-search-wide-button"]';
  const searchWideButton = document.querySelector(searchWideButtonSelector);
  const searchWideWrapperSelector =
    '[data-drupal-selector="block-search-wide-wrapper"]';
  const searchWideWrapper = document.querySelector(searchWideWrapperSelector);

  /**
   * Determine if search is visible.
   *
   * @return {boolean}
   *   True if the search wrapper contains "is-active" class, false if not.
   */
  function searchIsVisible() {
    return searchWideWrapper.classList.contains('is-active');
  }
  Drupal.olivero.searchIsVisible = searchIsVisible;

  /**
   * Closes search bar when a click event does not happen at an (x,y) coordinate
   * that does not overlap with either the search wrapper or button.
   *
   * @see https://bugs.webkit.org/show_bug.cgi?id=229895
   *
   * @param {Event} e click event
   */
  function watchForClickOut(e) {
    const clickInSearchArea = e.target.matches(`
      ${searchWideWrapperSelector},
      ${searchWideWrapperSelector} *,
      ${searchWideButtonSelector},
      ${searchWideButtonSelector} *
    `);
    if (!clickInSearchArea && searchIsVisible()) {
      // eslint-disable-next-line no-use-before-define
      toggleSearchVisibility(false);
    }
  }

  /**
   * Closes search bar when focus moves to another target.
   * Avoids closing search bar if event does not have related target - required for Safari.
   *
   * @see https://bugs.webkit.org/show_bug.cgi?id=229895
   *
   * @param {Event} e focusout event
   */
  function watchForFocusOut(e) {
    if (e.relatedTarget) {
      const inSearchBar = e.relatedTarget.matches(
        `${searchWideWrapperSelector}, ${searchWideWrapperSelector} *`,
      );
      const inSearchButton = e.relatedTarget.matches(
        `${searchWideButtonSelector}, ${searchWideButtonSelector} *`,
      );

      if (!inSearchBar && !inSearchButton) {
        // eslint-disable-next-line no-use-before-define
        toggleSearchVisibility(false);
      }
    }
  }

  /**
   * Closes search bar on escape keyup, if open.
   *
   * @param {Event} e keyup event
   */
  function watchForEscapeOut(e) {
    if (e.key === 'Escape') {
      // eslint-disable-next-line no-use-before-define
      toggleSearchVisibility(false);
    }
  }

  /**
   * Set focus for the search input element.
   */
  function handleFocus() {
    if (searchIsVisible()) {
      searchWideWrapper.querySelector('input[type="search"]').focus();
    } else if (searchWideWrapper.contains(document.activeElement)) {
      // Return focus to button only if focus was inside of the search wrapper.
      searchWideButton.focus();
    }
  }

  /**
   * Toggle search functionality visibility.
   *
   * @param {boolean} visibility
   *   True if we want to show the form, false if we want to hide it.
   */
  function toggleSearchVisibility(visibility) {
    searchWideButton.setAttribute('aria-expanded', visibility === true);
    searchWideWrapper.addEventListener('transitionend', handleFocus, {
      once: true,
    });

    if (visibility === true) {
      Drupal.olivero.closeAllSubNav();
      searchWideWrapper.classList.add('is-active');

      document.addEventListener('click', watchForClickOut, { capture: true });
      document.addEventListener('focusout', watchForFocusOut, {
        capture: true,
      });
      document.addEventListener('keyup', watchForEscapeOut, { capture: true });
    } else {
      searchWideWrapper.classList.remove('is-active');

      document.removeEventListener('click', watchForClickOut, {
        capture: true,
      });
      document.removeEventListener('focusout', watchForFocusOut, {
        capture: true,
      });
      document.removeEventListener('keyup', watchForEscapeOut, {
        capture: true,
      });
    }
  }

  Drupal.olivero.toggleSearchVisibility = toggleSearchVisibility;

  /**
   * Initializes the search wide button.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *  Adds aria-expanded attribute to the search wide button.
   */
  Drupal.behaviors.searchWide = {
    attach(context) {
      const searchWideButtonEl = once(
        'search-wide',
        searchWideButtonSelector,
        context,
      ).shift();
      if (searchWideButtonEl) {
        searchWideButtonEl.setAttribute('aria-expanded', searchIsVisible());
        searchWideButtonEl.addEventListener('click', () => {
          toggleSearchVisibility(!searchIsVisible());
        });
      }
    },
  };
})(Drupal);
;
/**
 * @file
 * Customization of navigation.
 */

((Drupal, once, tabbable) => {
  /**
   * Checks if navWrapper contains "is-active" class.
   *
   * @param {Element} navWrapper
   *   Header navigation.
   *
   * @return {boolean}
   *   True if navWrapper contains "is-active" class, false if not.
   */
  function isNavOpen(navWrapper) {
    return navWrapper.classList.contains('is-active');
  }

  /**
   * Opens or closes the header navigation.
   *
   * @param {object} props
   *   Navigation props.
   * @param {boolean} state
   *   State which to transition the header navigation menu into.
   */
  function toggleNav(props, state) {
    const value = !!state;
    props.navButton.setAttribute('aria-expanded', value);

    if (value) {
      props.body.classList.add('is-overlay-active');
      props.body.classList.add('is-fixed');
      props.navWrapper.classList.add('is-active');
    } else {
      props.body.classList.remove('is-overlay-active');
      props.body.classList.remove('is-fixed');
      props.navWrapper.classList.remove('is-active');
    }
  }

  /**
   * Initialize the header navigation.
   *
   * @param {object} props
   *   Navigation props.
   */
  function init(props) {
    props.navButton.setAttribute('aria-controls', props.navWrapperId);
    props.navButton.setAttribute('aria-expanded', 'false');

    props.navButton.addEventListener('click', () => {
      toggleNav(props, !isNavOpen(props.navWrapper));
    });

    // Close any open sub-navigation first, then close the header navigation.
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        if (props.olivero.areAnySubNavsOpen()) {
          props.olivero.closeAllSubNav();
        } else {
          toggleNav(props, false);
        }
      }
    });

    props.overlay.addEventListener('click', () => {
      toggleNav(props, false);
    });

    props.overlay.addEventListener('touchstart', () => {
      toggleNav(props, false);
    });

    // Focus trap. This is added to the header element because the navButton
    // element is not a child element of the navWrapper element, and the keydown
    // event would not fire if focus is on the navButton element.
    props.header.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && isNavOpen(props.navWrapper)) {
        const tabbableNavElements = tabbable.tabbable(props.navWrapper);
        tabbableNavElements.unshift(props.navButton);
        const firstTabbableEl = tabbableNavElements[0];
        const lastTabbableEl =
          tabbableNavElements[tabbableNavElements.length - 1];

        if (e.shiftKey) {
          if (
            document.activeElement === firstTabbableEl &&
            !props.olivero.isDesktopNav()
          ) {
            lastTabbableEl.focus();
            e.preventDefault();
          }
        } else if (
          document.activeElement === lastTabbableEl &&
          !props.olivero.isDesktopNav()
        ) {
          firstTabbableEl.focus();
          e.preventDefault();
        }
      }
    });

    // Remove overlays when browser is resized and desktop nav appears.
    window.addEventListener('resize', () => {
      if (props.olivero.isDesktopNav()) {
        toggleNav(props, false);
        props.body.classList.remove('is-overlay-active');
        props.body.classList.remove('is-fixed');
      }

      // Ensure that all sub-navigation menus close when the browser is resized.
      Drupal.olivero.closeAllSubNav();
    });

    // If hyperlink links to an anchor in the current page, close the
    // mobile menu after the click.
    props.navWrapper.addEventListener('click', (e) => {
      if (
        e.target.matches(
          `[href*="${window.location.pathname}#"], [href*="${window.location.pathname}#"] *, [href^="#"], [href^="#"] *`,
        )
      ) {
        toggleNav(props, false);
      }
    });
  }

  /**
   * Initialize the navigation.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach context and settings for navigation.
   */
  Drupal.behaviors.oliveroNavigation = {
    attach(context) {
      const headerId = 'header';
      const header = once('navigation', `#${headerId}`, context).shift();
      const navWrapperId = 'header-nav';

      if (header) {
        const navWrapper = header.querySelector(`#${navWrapperId}`);
        const { olivero } = Drupal;
        const navButton = context.querySelector(
          '[data-drupal-selector="mobile-nav-button"]',
        );
        const body = document.body;
        const overlay = context.querySelector(
          '[data-drupal-selector="header-nav-overlay"]',
        );

        init({
          olivero,
          header,
          navWrapperId,
          navWrapper,
          navButton,
          body,
          overlay,
        });
      }
    },
  };
})(Drupal, once, tabbable);
;
/**
 * @file
 * Provides functionality for second level submenu navigation.
 */

((Drupal) => {
  const { isDesktopNav } = Drupal.olivero;
  const secondLevelNavMenus = document.querySelectorAll(
    '[data-drupal-selector="primary-nav-menu-item-has-children"]',
  );

  /**
   * Shows and hides the specified menu item's second level submenu.
   *
   * @param {Element} topLevelMenuItem
   *   The <li> element that is the container for the menu and submenus.
   * @param {boolean} [toState]
   *   Optional state where we want the submenu to end up.
   */
  function toggleSubNav(topLevelMenuItem, toState) {
    const buttonSelector =
      '[data-drupal-selector="primary-nav-submenu-toggle-button"]';
    const button = topLevelMenuItem.querySelector(buttonSelector);
    const state =
      toState !== undefined
        ? toState
        : button.getAttribute('aria-expanded') !== 'true';

    if (state) {
      // If desktop nav, ensure all menus close before expanding new one.
      if (isDesktopNav()) {
        secondLevelNavMenus.forEach((el) => {
          el.querySelector(buttonSelector).setAttribute(
            'aria-expanded',
            'false',
          );
          el.querySelector(
            '[data-drupal-selector="primary-nav-menu--level-2"]',
          ).classList.remove('is-active-menu-parent');
          el.querySelector(
            '[data-drupal-selector="primary-nav-menu-🥕"]',
          ).classList.remove('is-active-menu-parent');
        });
      }
      button.setAttribute('aria-expanded', 'true');
      topLevelMenuItem
        .querySelector('[data-drupal-selector="primary-nav-menu--level-2"]')
        .classList.add('is-active-menu-parent');
      topLevelMenuItem
        .querySelector('[data-drupal-selector="primary-nav-menu-🥕"]')
        .classList.add('is-active-menu-parent');
    } else {
      button.setAttribute('aria-expanded', 'false');
      topLevelMenuItem.classList.remove('is-touch-event');
      topLevelMenuItem
        .querySelector('[data-drupal-selector="primary-nav-menu--level-2"]')
        .classList.remove('is-active-menu-parent');
      topLevelMenuItem
        .querySelector('[data-drupal-selector="primary-nav-menu-🥕"]')
        .classList.remove('is-active-menu-parent');
    }
  }

  Drupal.olivero.toggleSubNav = toggleSubNav;

  /**
   * Sets a timeout and closes current desktop navigation submenu if it
   * does not contain the focused element.
   *
   * @param {Event} e
   *   The event object.
   */
  function handleBlur(e) {
    if (!Drupal.olivero.isDesktopNav()) return;

    setTimeout(() => {
      const menuParentItem = e.target.closest(
        '[data-drupal-selector="primary-nav-menu-item-has-children"]',
      );
      if (!menuParentItem.contains(document.activeElement)) {
        toggleSubNav(menuParentItem, false);
      }
    }, 200);
  }

  // Add event listeners onto each sub navigation parent and button.
  secondLevelNavMenus.forEach((el) => {
    const button = el.querySelector(
      '[data-drupal-selector="primary-nav-submenu-toggle-button"]',
    );

    button.removeAttribute('aria-hidden');
    button.removeAttribute('tabindex');

    // If touch event, prevent mouseover event from triggering the submenu.
    el.addEventListener(
      'touchstart',
      () => {
        el.classList.add('is-touch-event');
      },
      { passive: true },
    );

    el.addEventListener('mouseover', () => {
      if (isDesktopNav() && !el.classList.contains('is-touch-event')) {
        el.classList.add('is-active-mouseover-event');
        toggleSubNav(el, true);

        // Timeout is added to ensure that users of assistive devices (such as
        // mouse grid tools) do not simultaneously trigger both the mouseover
        // and click events. When these events are triggered together, the
        // submenu to appear to not open.
        setTimeout(() => {
          el.classList.remove('is-active-mouseover-event');
        }, 500);
      }
    });

    button.addEventListener('click', () => {
      if (!el.classList.contains('is-active-mouseover-event')) {
        toggleSubNav(el);
      }
    });

    el.addEventListener('mouseout', () => {
      if (
        isDesktopNav() &&
        !document.activeElement.matches(
          '[aria-expanded="true"], .is-active-menu-parent *',
        )
      ) {
        toggleSubNav(el, false);
      }
    });

    el.addEventListener('blur', handleBlur, true);
  });

  /**
   * Close all second level sub navigation menus.
   */
  function closeAllSubNav() {
    secondLevelNavMenus.forEach((el) => {
      // Return focus to the toggle button if the submenu contains focus.
      if (el.contains(document.activeElement)) {
        el.querySelector(
          '[data-drupal-selector="primary-nav-submenu-toggle-button"]',
        ).focus();
      }
      toggleSubNav(el, false);
    });
  }

  Drupal.olivero.closeAllSubNav = closeAllSubNav;

  /**
   * Checks if any sub navigation items are currently active.
   *
   * @return {boolean}
   *   If sub navigation is currently open.
   */
  function areAnySubNavsOpen() {
    let subNavsAreOpen = false;

    secondLevelNavMenus.forEach((el) => {
      const button = el.querySelector(
        '[data-drupal-selector="primary-nav-submenu-toggle-button"]',
      );
      const state = button.getAttribute('aria-expanded') === 'true';

      if (state) {
        subNavsAreOpen = true;
      }
    });

    return subNavsAreOpen;
  }

  Drupal.olivero.areAnySubNavsOpen = areAnySubNavsOpen;

  // Ensure that desktop submenus close when escape key is pressed.
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      if (isDesktopNav()) closeAllSubNav();
    }
  });

  // If user taps outside of menu, close all menus.
  document.addEventListener(
    'touchstart',
    (e) => {
      if (
        areAnySubNavsOpen() &&
        !e.target.matches(
          '[data-drupal-selector="header-nav"], [data-drupal-selector="header-nav"] *',
        )
      ) {
        closeAllSubNav();
      }
    },
    { passive: true },
  );
})(Drupal);
;
/**
 * @file
 * This script watches the desktop version of the primary navigation. If it
 * wraps to two lines, it will automatically transition to a mobile navigation
 * and remember where it wrapped so it can transition back.
 */
((Drupal, once) => {
  /**
   * Handles the transition from mobile navigation to desktop navigation.
   *
   * @param {Element} navWrapper - The primary navigation's top-level <ul> element.
   * @param {Element} navItem - The first item within the primary navigation.
   */
  function transitionToDesktopNavigation(navWrapper, navItem) {
    document.body.classList.remove('is-always-mobile-nav');

    // Double check to see if the navigation is wrapping, and if so, re-enable
    // mobile navigation. This solves an edge cases where if the amount of
    // navigation items always causes the primary navigation to wrap, and the
    // page is loaded at a narrower viewport and then widened, the mobile nav
    // may not be enabled.
    if (navWrapper.clientHeight > navItem.clientHeight) {
      document.body.classList.add('is-always-mobile-nav');
    }
  }

  /**
   * Callback from Resize Observer. This checks if the primary navigation is
   * wrapping, and if so, transitions to the mobile navigation.
   *
   * @param {ResizeObserverEntry} entries - Object passed from ResizeObserver.
   */
  function checkIfDesktopNavigationWraps(entries) {
    const navItem = document.querySelector('.primary-nav__menu-item');

    if (
      Drupal.olivero.isDesktopNav() &&
      entries[0].contentRect.height > navItem.clientHeight
    ) {
      const navMediaQuery = window.matchMedia(
        `(max-width: ${window.innerWidth + 15}px)`, // 5px adds a small buffer before switching back.
      );
      document.body.classList.add('is-always-mobile-nav');

      // In the event that the viewport was resized, we remember the viewport
      // width with a one-time event listener ,so we can attempt to transition
      // from mobile navigation to desktop navigation.
      navMediaQuery.addEventListener(
        'change',
        () => {
          transitionToDesktopNavigation(entries[0].target, navItem);
        },
        { once: true },
      );
    }
  }

  /**
   * Set up Resize Observer to listen for changes to the size of the primary
   * navigation.
   *
   * @param {Element} primaryNav - The primary navigation's top-level <ul> element.
   */
  function init(primaryNav) {
    const resizeObserver = new ResizeObserver(checkIfDesktopNavigationWraps);
    resizeObserver.observe(primaryNav);
  }

  /**
   * Initialize the automatic navigation transition.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach context and settings for navigation.
   */
  Drupal.behaviors.automaticMobileNav = {
    attach(context) {
      once(
        'olivero-automatic-mobile-nav',
        '[data-drupal-selector="primary-nav-menu--level-1"]',
        context,
      ).forEach(init);
    },
  };
})(Drupal, once);
;
