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
    root.DocusignClick.ContainerStyles = factory(root.DocusignClick.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ContainerStyles model module.
   * @module model/ContainerStyles
   */

  /**
   * Constructs a new <code>ContainerStyles</code>.
   * Control the overall clickwrap container and inherited styles such as font.
   * @alias module:model/ContainerStyles
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ContainerStyles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContainerStyles} obj Optional instance to populate.
   * @return {module:model/ContainerStyles} The populated <code>ContainerStyles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backgroundColor')) {
        obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
      }
      if (data.hasOwnProperty('borderColor')) {
        obj['borderColor'] = ApiClient.convertToType(data['borderColor'], 'String');
      }
      if (data.hasOwnProperty('borderRadius')) {
        obj['borderRadius'] = ApiClient.convertToType(data['borderRadius'], 'String');
      }
      if (data.hasOwnProperty('borderStyle')) {
        obj['borderStyle'] = ApiClient.convertToType(data['borderStyle'], 'String');
      }
      if (data.hasOwnProperty('borderWidth')) {
        obj['borderWidth'] = ApiClient.convertToType(data['borderWidth'], 'String');
      }
    }
    return obj;
  }

  /**
   * This will be restricted to values not equal to: 'transparent', 'none'
   * @member {String} backgroundColor
   */
  exports.prototype['backgroundColor'] = undefined;
  /**
   * Adjust the border color of the clickwrap surrouding container.
   * @member {String} borderColor
   */
  exports.prototype['borderColor'] = undefined;
  /**
   * Adjust the border radius of the clickwrap surrouding container.
   * @member {String} borderRadius
   */
  exports.prototype['borderRadius'] = undefined;
  /**
   * Adjust the border style of the clickwrap surrouding container.
   * @member {String} borderStyle
   */
  exports.prototype['borderStyle'] = undefined;
  /**
   * Adjust the border width of the clickwrap surrouding container.
   * @member {String} borderWidth
   */
  exports.prototype['borderWidth'] = undefined;



  return exports;
}));


