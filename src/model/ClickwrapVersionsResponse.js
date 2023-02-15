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
    define(['ApiClient', 'model/ClickwrapVersionSummaryResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClickwrapVersionSummaryResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.ClickwrapVersionsResponse = factory(root.DocusignClick.ApiClient, root.DocusignClick.ClickwrapVersionSummaryResponse);
  }
}(this, function(ApiClient, ClickwrapVersionSummaryResponse) {
  'use strict';


  /**
   * The ClickwrapVersionsResponse model module.
   * @module model/ClickwrapVersionsResponse
   */

  /**
   * Constructs a new <code>ClickwrapVersionsResponse</code>.
   * The results are paginated. Use the following properties to navigate the pages. Use the `page_number` query parameter to specify a page.  - `page`: The page number of the current results. - `pageSize`: The number of results in the current page. - `minimumPagesRemaining`: The number of pages that follow this one. 
   * @alias module:model/ClickwrapVersionsResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ClickwrapVersionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClickwrapVersionsResponse} obj Optional instance to populate.
   * @return {module:model/ClickwrapVersionsResponse} The populated <code>ClickwrapVersionsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clickwraps')) {
        obj['clickwraps'] = ApiClient.convertToType(data['clickwraps'], [ClickwrapVersionSummaryResponse]);
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
    }
    return obj;
  }

  /**
   * An array of `clickwrapVersionSummaryResponse` objects.
   * @member {Array.<module:model/ClickwrapVersionSummaryResponse>} clickwraps
   */
  exports.prototype['clickwraps'] = undefined;
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



  return exports;
}));


