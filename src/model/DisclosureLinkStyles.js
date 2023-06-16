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
    root.DocusignClick.DisclosureLinkStyles = factory(root.DocusignClick.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DisclosureLinkStyles model module.
   * @module model/DisclosureLinkStyles
   */

  /**
   * Constructs a new <code>DisclosureLinkStyles</code>.
   * Control the display of the disclosure link.
   * @alias module:model/DisclosureLinkStyles
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DisclosureLinkStyles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisclosureLinkStyles} obj Optional instance to populate.
   * @return {module:model/DisclosureLinkStyles} The populated <code>DisclosureLinkStyles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DisclosureLinkStyles.DisplayEnum} display
   */
  exports.prototype['display'] = undefined;


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


