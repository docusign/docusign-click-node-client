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
    define(['ApiClient', 'model/ClickwrapVersion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClickwrapVersion'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.ClickwrapVersionsPagedResponse = factory(root.DocusignClick.ApiClient, root.DocusignClick.ClickwrapVersion);
  }
}(this, function(ApiClient, ClickwrapVersion) {
  'use strict';


  /**
   * The ClickwrapVersionsPagedResponse model module.
   * @module model/ClickwrapVersionsPagedResponse
   */

  /**
   * Constructs a new <code>ClickwrapVersionsPagedResponse</code>.
   * The results are paginated. Use the following properties to navigate the pages.  - `page`: The page number of the current results. - `pageSize`: The number of results in the current page. - `minimumPagesRemaining`: The number of pages that follow this one.  
   * @alias module:model/ClickwrapVersionsPagedResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ClickwrapVersionsPagedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClickwrapVersionsPagedResponse} obj Optional instance to populate.
   * @return {module:model/ClickwrapVersionsPagedResponse} The populated <code>ClickwrapVersionsPagedResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('clickwrapId')) {
        obj['clickwrapId'] = ApiClient.convertToType(data['clickwrapId'], 'String');
      }
      if (data.hasOwnProperty('clickwrapName')) {
        obj['clickwrapName'] = ApiClient.convertToType(data['clickwrapName'], 'String');
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
      if (data.hasOwnProperty('versions')) {
        obj['versions'] = ApiClient.convertToType(data['versions'], [ClickwrapVersion]);
      }
    }
    return obj;
  }

  /**
   * The external account number (int) or account ID GUID.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
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
   * An array of clickwrap versions.
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
   * An array of clickwrap versions.
   * @member {Array.<module:model/ClickwrapVersion>} versions
   */
  exports.prototype['versions'] = undefined;



  return exports;
}));


