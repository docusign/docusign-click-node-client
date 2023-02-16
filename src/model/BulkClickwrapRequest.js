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
    root.DocusignClick.BulkClickwrapRequest = factory(root.DocusignClick.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The BulkClickwrapRequest model module.
   * @module model/BulkClickwrapRequest
   */

  /**
   * Constructs a new <code>BulkClickwrapRequest</code>.
   * Data used to start a bulk agreements export.
   * @alias module:model/BulkClickwrapRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkClickwrapRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkClickwrapRequest} obj Optional instance to populate.
   * @return {module:model/BulkClickwrapRequest} The populated <code>BulkClickwrapRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fromDate')) {
        obj['fromDate'] = ApiClient.convertToType(data['fromDate'], Object);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('toDate')) {
        obj['toDate'] = ApiClient.convertToType(data['toDate'], Object);
      }
    }
    return obj;
  }

  /**
   * The earliest date to return agreements from.
   * @member {Object} fromDate
   */
  exports.prototype['fromDate'] = undefined;
  /**
   * User agreement status. One of:  - `agreed` - `declined`
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The latest date to return agreements from.
   * @member {Object} toDate
   */
  exports.prototype['toDate'] = undefined;



  return exports;
}));


