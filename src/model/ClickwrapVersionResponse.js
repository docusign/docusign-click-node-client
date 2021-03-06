/**
 * DocuSign Click API
 * DocuSign Click lets you capture consent to standard agreement terms with a single click: terms and conditions, terms of service, terms of use, privacy policies, and more. The Click API lets you include this customizable clickwrap solution in your DocuSign integrations.
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
    define(['ApiClient', 'model/ClickwrapScheduledReacceptance', 'model/DisplaySettings', 'model/Document'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClickwrapScheduledReacceptance'), require('./DisplaySettings'), require('./Document'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.ClickwrapVersionResponse = factory(root.DocusignClick.ApiClient, root.DocusignClick.ClickwrapScheduledReacceptance, root.DocusignClick.DisplaySettings, root.DocusignClick.Document);
  }
}(this, function(ApiClient, ClickwrapScheduledReacceptance, DisplaySettings, Document) {
  'use strict';


  /**
   * The ClickwrapVersionResponse model module.
   * @module model/ClickwrapVersionResponse
   */

  /**
   * Constructs a new <code>ClickwrapVersionResponse</code>.
   * @alias module:model/ClickwrapVersionResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ClickwrapVersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClickwrapVersionResponse} obj Optional instance to populate.
   * @return {module:model/ClickwrapVersionResponse} The populated <code>ClickwrapVersionResponse</code> instance.
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
      if (data.hasOwnProperty('clickwrapVersionId')) {
        obj['clickwrapVersionId'] = ApiClient.convertToType(data['clickwrapVersionId'], 'String');
      }
      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], Object);
      }
      if (data.hasOwnProperty('displaySettings')) {
        obj['displaySettings'] = DisplaySettings.constructFromObject(data['displaySettings']);
      }
      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [Document]);
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], Object);
      }
      if (data.hasOwnProperty('lastModifiedBy')) {
        obj['lastModifiedBy'] = ApiClient.convertToType(data['lastModifiedBy'], 'String');
      }
      if (data.hasOwnProperty('ownerUserId')) {
        obj['ownerUserId'] = ApiClient.convertToType(data['ownerUserId'], 'String');
      }
      if (data.hasOwnProperty('requireReacceptance')) {
        obj['requireReacceptance'] = ApiClient.convertToType(data['requireReacceptance'], 'Boolean');
      }
      if (data.hasOwnProperty('scheduledDate')) {
        obj['scheduledDate'] = ApiClient.convertToType(data['scheduledDate'], Object);
      }
      if (data.hasOwnProperty('scheduledReacceptance')) {
        obj['scheduledReacceptance'] = ClickwrapScheduledReacceptance.constructFromObject(data['scheduledReacceptance']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('versionId')) {
        obj['versionId'] = ApiClient.convertToType(data['versionId'], 'String');
      }
      if (data.hasOwnProperty('versionNumber')) {
        obj['versionNumber'] = ApiClient.convertToType(data['versionNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * 
   * @member {String} clickwrapId
   */
  exports.prototype['clickwrapId'] = undefined;
  /**
   * 
   * @member {String} clickwrapName
   */
  exports.prototype['clickwrapName'] = undefined;
  /**
   * 
   * @member {String} clickwrapVersionId
   */
  exports.prototype['clickwrapVersionId'] = undefined;
  /**
   * 
   * @member {Object} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * @member {module:model/DisplaySettings} displaySettings
   */
  exports.prototype['displaySettings'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Document>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * 
   * @member {Object} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * 
   * @member {String} lastModifiedBy
   */
  exports.prototype['lastModifiedBy'] = undefined;
  /**
   * 
   * @member {String} ownerUserId
   */
  exports.prototype['ownerUserId'] = undefined;
  /**
   * 
   * @member {Boolean} requireReacceptance
   */
  exports.prototype['requireReacceptance'] = undefined;
  /**
   * 
   * @member {Object} scheduledDate
   */
  exports.prototype['scheduledDate'] = undefined;
  /**
   * @member {module:model/ClickwrapScheduledReacceptance} scheduledReacceptance
   */
  exports.prototype['scheduledReacceptance'] = undefined;
  /**
   * 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} versionId
   */
  exports.prototype['versionId'] = undefined;
  /**
   * 
   * @member {String} versionNumber
   */
  exports.prototype['versionNumber'] = undefined;



  return exports;
}));


