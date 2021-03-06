/**
 * DocuSign Click REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    define(['ApiClient', 'model/HtmlResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HtmlResult'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.DocumentConversionResponse = factory(root.DocusignClick.ApiClient, root.DocusignClick.HtmlResult);
  }
}(this, function(ApiClient, HtmlResult) {
  'use strict';


  /**
   * The DocumentConversionResponse model module.
   * @module model/DocumentConversionResponse
   */

  /**
   * Constructs a new <code>DocumentConversionResponse</code>.
   * @alias module:model/DocumentConversionResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocumentConversionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentConversionResponse} obj Optional instance to populate.
   * @return {module:model/DocumentConversionResponse} The populated <code>DocumentConversionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('htmlResults')) {
        obj['htmlResults'] = ApiClient.convertToType(data['htmlResults'], [HtmlResult]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/HtmlResult>} htmlResults
   */
  exports.prototype['htmlResults'] = undefined;



  return exports;
}));


