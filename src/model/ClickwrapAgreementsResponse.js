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
    define(['ApiClient', 'model/UserAgreementResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAgreementResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.ClickwrapAgreementsResponse = factory(root.DocusignClick.ApiClient, root.DocusignClick.UserAgreementResponse);
  }
}(this, function(ApiClient, UserAgreementResponse) {
  'use strict';


  /**
   * The ClickwrapAgreementsResponse model module.
   * @module model/ClickwrapAgreementsResponse
   */

  /**
   * Constructs a new <code>ClickwrapAgreementsResponse</code>.
   * @alias module:model/ClickwrapAgreementsResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ClickwrapAgreementsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClickwrapAgreementsResponse} obj Optional instance to populate.
   * @return {module:model/ClickwrapAgreementsResponse} The populated <code>ClickwrapAgreementsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('beginCreatedOn')) {
        obj['beginCreatedOn'] = ApiClient.convertToType(data['beginCreatedOn'], Object);
      }
      if (data.hasOwnProperty('minimumPagesRemaining')) {
        obj['minimumPagesRemaining'] = ApiClient.convertToType(data['minimumPagesRemaining'], 'Number');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('pageSize')) {
        obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
      }
      if (data.hasOwnProperty('userAgreements')) {
        obj['userAgreements'] = ApiClient.convertToType(data['userAgreements'], [UserAgreementResponse]);
      }
    }
    return obj;
  }

  /**
   * User agreements from this datetime.
   * @member {Object} beginCreatedOn
   */
  exports.prototype['beginCreatedOn'] = undefined;
  /**
   * Number of pages remaining in the response.
   * @member {Number} minimumPagesRemaining
   */
  exports.prototype['minimumPagesRemaining'] = undefined;
  /**
   * The number of the current page.
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * The number of items per page.
   * @member {Number} pageSize
   */
  exports.prototype['pageSize'] = undefined;
  /**
   * An array of user agreements.
   * @member {Array.<module:model/UserAgreementResponse>} userAgreements
   */
  exports.prototype['userAgreements'] = undefined;



  return exports;
}));


