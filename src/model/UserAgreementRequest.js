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
    root.DocusignClick.UserAgreementRequest = factory(root.DocusignClick.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The UserAgreementRequest model module.
   * @module model/UserAgreementRequest
   */

  /**
   * Constructs a new <code>UserAgreementRequest</code>.
   * Data used to create the agreement.
   * @alias module:model/UserAgreementRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAgreementRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAgreementRequest} obj Optional instance to populate.
   * @return {module:model/UserAgreementRequest} The populated <code>UserAgreementRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('documentData')) {
        obj['documentData'] = ApiClient.convertToType(data['documentData'], {'String': 'String'});
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
      }
      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * A unique value that identifies a user. You can use anything that your system uses to identify unique users, such as employee IDs, email addresses, and surrogate keys as the value of `clientUserId`.  A clickwrap with a specific `clientUserId` will not appear again once it has been accepted. 
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * This property specifies the data used to create a clickwrap with [dynamic content][].    [dynamic content]: /docs/click-api/click101/customize-clickwrap-fields/#embed-clickwraps-that-contain-dynamic-content 
   * @member {Object.<String, String>} documentData
   */
  exports.prototype['documentData'] = undefined;
  /**
   * A customer-defined string you can use in requests. This string will appear in the corresponding response.
   * @member {String} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * The URL to redirect to after the agreement is complete when the agreement is not rendered in an iframe.
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;



  return exports;
}));


