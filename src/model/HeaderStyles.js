/**
 * DocuSign Click API
 * Elastic signing (also known as DocuSign Click)  lets you capture consent to standard agreement terms with a single click: terms and conditions, terms of service, terms of use, privacy policies, and more. The Click API lets you include this customizable elastic template solution in your DocuSign integrations.
 *
 * OpenAPI spec version: v1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.HeaderStyles = factory(root.DocusignClick.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The HeaderStyles model module.
   * @module model/HeaderStyles
   */

  /**
   * Constructs a new <code>HeaderStyles</code>.
   * Control the display of the header.
   * @alias module:model/HeaderStyles
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>HeaderStyles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HeaderStyles} obj Optional instance to populate.
   * @return {module:model/HeaderStyles} The populated <code>HeaderStyles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], 'String');
      }
      if (data.hasOwnProperty('fontFamily')) {
        obj['fontFamily'] = ApiClient.convertToType(data['fontFamily'], 'String');
      }
      if (data.hasOwnProperty('fontSize')) {
        obj['fontSize'] = ApiClient.convertToType(data['fontSize'], 'String');
      }
      if (data.hasOwnProperty('fontStyle')) {
        obj['fontStyle'] = ApiClient.convertToType(data['fontStyle'], 'String');
      }
      if (data.hasOwnProperty('fontWeight')) {
        obj['fontWeight'] = ApiClient.convertToType(data['fontWeight'], Object);
      }
      if (data.hasOwnProperty('textDecoration')) {
        obj['textDecoration'] = ApiClient.convertToType(data['textDecoration'], 'String');
      }
    }
    return obj;
  }

  /**
   * Control the fore-ground color of the element.
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * Control the display of the header. Can only be set to 'none' over the default for hiding purposes.
   * @member {module:model/HeaderStyles.DisplayEnum} display
   */
  exports.prototype['display'] = undefined;
  /**
   * Control the font family of the text.
   * @member {String} fontFamily
   */
  exports.prototype['fontFamily'] = undefined;
  /**
   * Control the font size of the text.
   * @member {String} fontSize
   */
  exports.prototype['fontSize'] = undefined;
  /**
   * Control the font style of the text.
   * @member {String} fontStyle
   */
  exports.prototype['fontStyle'] = undefined;
  /**
   * Control the font weight of the text.
   * @member {Object} fontWeight
   */
  exports.prototype['fontWeight'] = undefined;
  /**
   * Control the underline and other styles of the text.
   * @member {String} textDecoration
   */
  exports.prototype['textDecoration'] = undefined;


  /**
   * Allowed values for the <code>display</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DisplayEnum = {
    /**
     * value: "none"
     * @const
     */
    none: "none"
  };


  return exports;
}));


