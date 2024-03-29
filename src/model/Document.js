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
    root.DocusignClick.Document = factory(root.DocusignClick.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Document model module.
   * @module model/Document
   */

  /**
   * Constructs a new <code>Document</code>.
   * Information about a document.
   * @alias module:model/Document
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Document} obj Optional instance to populate.
   * @return {module:model/Document} The populated <code>Document</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentBase64')) {
        obj['documentBase64'] = ApiClient.convertToType(data['documentBase64'], 'String');
      }
      if (data.hasOwnProperty('documentDisplay')) {
        obj['documentDisplay'] = ApiClient.convertToType(data['documentDisplay'], 'String');
      }
      if (data.hasOwnProperty('documentHtml')) {
        obj['documentHtml'] = ApiClient.convertToType(data['documentHtml'], 'String');
      }
      if (data.hasOwnProperty('documentName')) {
        obj['documentName'] = ApiClient.convertToType(data['documentName'], 'String');
      }
      if (data.hasOwnProperty('fileExtension')) {
        obj['fileExtension'] = ApiClient.convertToType(data['fileExtension'], 'String');
      }
      if (data.hasOwnProperty('mustRead')) {
        obj['mustRead'] = ApiClient.convertToType(data['mustRead'], 'Boolean');
      }
      if (data.hasOwnProperty('mustView')) {
        obj['mustView'] = ApiClient.convertToType(data['mustView'], 'Boolean');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The base64-encoded contents of the document.
   * @member {String} documentBase64
   */
  exports.prototype['documentBase64'] = undefined;
  /**
   * Display type: link, document or pdf
   * @member {String} documentDisplay
   */
  exports.prototype['documentDisplay'] = undefined;
  /**
   * The HTML representation of the document.
   * @member {String} documentHtml
   */
  exports.prototype['documentHtml'] = undefined;
  /**
   * The name of the document.
   * @member {String} documentName
   */
  exports.prototype['documentName'] = undefined;
  /**
   * The file extension of the document.
   * @member {String} fileExtension
   */
  exports.prototype['fileExtension'] = undefined;
  /**
   * **True** if the user needs to scroll to the end of the document.
   * @member {Boolean} mustRead
   */
  exports.prototype['mustRead'] = undefined;
  /**
   * **True** if the user must view the document.
   * @member {Boolean} mustView
   */
  exports.prototype['mustView'] = undefined;
  /**
   * The order of document layout.
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;



  return exports;
}));


