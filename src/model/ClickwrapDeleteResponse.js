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
    root.DocusignClick.ClickwrapDeleteResponse = factory(root.DocusignClick.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ClickwrapDeleteResponse model module.
   * @module model/ClickwrapDeleteResponse
   */

  /**
   * Constructs a new <code>ClickwrapDeleteResponse</code>.
   * The result of a clickwrap deletion request.
   * @alias module:model/ClickwrapDeleteResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ClickwrapDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClickwrapDeleteResponse} obj Optional instance to populate.
   * @return {module:model/ClickwrapDeleteResponse} The populated <code>ClickwrapDeleteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clickwrapId')) {
        obj['clickwrapId'] = ApiClient.convertToType(data['clickwrapId'], 'String');
      }
      if (data.hasOwnProperty('clickwrapName')) {
        obj['clickwrapName'] = ApiClient.convertToType(data['clickwrapName'], 'String');
      }
      if (data.hasOwnProperty('deletionMessage')) {
        obj['deletionMessage'] = ApiClient.convertToType(data['deletionMessage'], 'String');
      }
      if (data.hasOwnProperty('deletionSuccess')) {
        obj['deletionSuccess'] = ApiClient.convertToType(data['deletionSuccess'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the clickwrap.
   * @member {String} clickwrapId
   */
  exports.prototype['clickwrapId'] = undefined;
  /**
   * The name of the clickwrap.
   * @member {String} clickwrapName
   */
  exports.prototype['clickwrapName'] = undefined;
  /**
   * A message describing the result of deletion request. One of:  - `alreadyDeleted`: Clickwrap is already deleted. - `deletionSuccess`: Successfully deleted the clickwrap. - `deletionFailure`: Failed to delete the clickwrap. - `cannotDelete`: Active clickwrap version cannot be deleted.
   * @member {String} deletionMessage
   */
  exports.prototype['deletionMessage'] = undefined;
  /**
   * **True** if the clickwrap was deleted successfully. **False** otherwise.
   * @member {Boolean} deletionSuccess
   */
  exports.prototype['deletionSuccess'] = undefined;
  /**
   * Clickwrap status. Possible values:  - `active` - `inactive` - `deleted`
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


