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
    define(['ApiClient', 'model/ClickwrapScheduledReacceptance', 'model/DataField', 'model/DisplaySettings', 'model/Document'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClickwrapScheduledReacceptance'), require('./DataField'), require('./DisplaySettings'), require('./Document'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.ClickwrapVersionResponse = factory(root.DocusignClick.ApiClient, root.DocusignClick.ClickwrapScheduledReacceptance, root.DocusignClick.DataField, root.DocusignClick.DisplaySettings, root.DocusignClick.Document);
  }
}(this, function(ApiClient, ClickwrapScheduledReacceptance, DataField, DisplaySettings, Document) {
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
      if (data.hasOwnProperty('dataFields')) {
        obj['dataFields'] = ApiClient.convertToType(data['dataFields'], [DataField]);
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
   * The unique version ID, a GUID, of this clickwrap version.
   * @member {String} clickwrapVersionId
   */
  exports.prototype['clickwrapVersionId'] = undefined;
  /**
   * The time that the clickwrap was created.
   * @member {Object} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * The list of all the data fields available for the clickwrap (custom fields and standard fields).
   * @member {Array.<module:model/DataField>} dataFields
   */
  exports.prototype['dataFields'] = undefined;
  /**
   * Display settings for a clickwrap.
   * @member {module:model/DisplaySettings} displaySettings
   */
  exports.prototype['displaySettings'] = undefined;
  /**
   * An array of documents.
   * @member {Array.<module:model/Document>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * The time that the clickwrap was last modified.
   * @member {Object} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * The user ID of the last user who modified this clickwrap.
   * @member {String} lastModifiedBy
   */
  exports.prototype['lastModifiedBy'] = undefined;
  /**
   * The user ID of the owner of this clickwrap.
   * @member {String} ownerUserId
   */
  exports.prototype['ownerUserId'] = undefined;
  /**
   * When **true,** requires signers who have previously agreed to this clickwrap to sign again. The version number is incremented.
   * @member {Boolean} requireReacceptance
   */
  exports.prototype['requireReacceptance'] = undefined;
  /**
   * The time and date when this clickwrap is activated.
   * @member {Object} scheduledDate
   */
  exports.prototype['scheduledDate'] = undefined;
  /**
   * Specifies the interval between reacceptances in days, weeks, months, or years.
   * @member {module:model/ClickwrapScheduledReacceptance} scheduledReacceptance
   */
  exports.prototype['scheduledReacceptance'] = undefined;
  /**
   * Clickwrap status. Possible values:  - `active` - `inactive` - `deleted`
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The ID of the version.
   * @member {String} versionId
   */
  exports.prototype['versionId'] = undefined;
  /**
   * Version of the clickwrap.
   * @member {String} versionNumber
   */
  exports.prototype['versionNumber'] = undefined;



  return exports;
}));


