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
    root.DocusignClick.BaseAgreeButtonStyles = factory(root.DocusignClick.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BaseAgreeButtonStyles model module.
   * @module model/BaseAgreeButtonStyles
   */

  /**
   * Constructs a new <code>BaseAgreeButtonStyles</code>.
   * @alias module:model/BaseAgreeButtonStyles
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BaseAgreeButtonStyles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseAgreeButtonStyles} obj Optional instance to populate.
   * @return {module:model/BaseAgreeButtonStyles} The populated <code>BaseAgreeButtonStyles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backgroundColor')) {
        obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
      }
      if (data.hasOwnProperty('border')) {
        obj['border'] = ApiClient.convertToType(data['border'], 'String');
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
      if (data.hasOwnProperty('boxShadow')) {
        obj['boxShadow'] = ApiClient.convertToType(data['boxShadow'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
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
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'String');
      }
      if (data.hasOwnProperty('margin')) {
        obj['margin'] = ApiClient.convertToType(data['margin'], 'String');
      }
      if (data.hasOwnProperty('opacity')) {
        obj['opacity'] = ApiClient.convertToType(data['opacity'], 'String');
      }
      if (data.hasOwnProperty('outline')) {
        obj['outline'] = ApiClient.convertToType(data['outline'], 'String');
      }
      if (data.hasOwnProperty('outlineOffset')) {
        obj['outlineOffset'] = ApiClient.convertToType(data['outlineOffset'], 'String');
      }
      if (data.hasOwnProperty('padding')) {
        obj['padding'] = ApiClient.convertToType(data['padding'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'String');
      }
    }
    return obj;
  }

  /**
   * Control the background color of the element.
   * @member {String} backgroundColor
   */
  exports.prototype['backgroundColor'] = undefined;
  /**
   * Control the border of the element.
   * @member {String} border
   */
  exports.prototype['border'] = undefined;
  /**
   * Control the border color of the element.
   * @member {String} borderColor
   */
  exports.prototype['borderColor'] = undefined;
  /**
   * Control the border radius of the element.
   * @member {String} borderRadius
   */
  exports.prototype['borderRadius'] = undefined;
  /**
   * Control the border style of the element.
   * @member {String} borderStyle
   */
  exports.prototype['borderStyle'] = undefined;
  /**
   * Control the border width of the element.
   * @member {String} borderWidth
   */
  exports.prototype['borderWidth'] = undefined;
  /**
   * Control the display of the box shadow of the agree button.
   * @member {String} boxShadow
   */
  exports.prototype['boxShadow'] = undefined;
  /**
   * Control the fore-ground color of the element.
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
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
   * Control the height of the agree button.
   * @member {String} height
   */
  exports.prototype['height'] = undefined;
  /**
   * Control the margin of the element.
   * @member {String} margin
   */
  exports.prototype['margin'] = undefined;
  /**
   * Control the opacity of the element
   * @member {String} opacity
   */
  exports.prototype['opacity'] = undefined;
  /**
   * Control the outline of the element
   * @member {String} outline
   */
  exports.prototype['outline'] = undefined;
  /**
   * Conrol the outline offset of the element
   * @member {String} outlineOffset
   */
  exports.prototype['outlineOffset'] = undefined;
  /**
   * Control the padding of the element.
   * @member {String} padding
   */
  exports.prototype['padding'] = undefined;
  /**
   * Control the width of the agree button.
   * @member {String} width
   */
  exports.prototype['width'] = undefined;



  return exports;
}));


