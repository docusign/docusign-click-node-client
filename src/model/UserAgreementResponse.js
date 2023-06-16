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
    define(['ApiClient', 'model/DataField', 'model/DisplaySettings', 'model/Document', 'model/UserAgreementResponseStyle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataField'), require('./DisplaySettings'), require('./Document'), require('./UserAgreementResponseStyle'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.UserAgreementResponse = factory(root.DocusignClick.ApiClient, root.DocusignClick.DataField, root.DocusignClick.DisplaySettings, root.DocusignClick.Document, root.DocusignClick.UserAgreementResponseStyle);
  }
}(this, function(ApiClient, DataField, DisplaySettings, Document, UserAgreementResponseStyle) {
  'use strict';


  /**
   * The UserAgreementResponse model module.
   * @module model/UserAgreementResponse
   */

  /**
   * Constructs a new <code>UserAgreementResponse</code>.
   * @alias module:model/UserAgreementResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAgreementResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAgreementResponse} obj Optional instance to populate.
   * @return {module:model/UserAgreementResponse} The populated <code>UserAgreementResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('agreedOn')) {
        obj['agreedOn'] = ApiClient.convertToType(data['agreedOn'], Object);
      }
      if (data.hasOwnProperty('agreementId')) {
        obj['agreementId'] = ApiClient.convertToType(data['agreementId'], 'String');
      }
      if (data.hasOwnProperty('agreementUrl')) {
        obj['agreementUrl'] = ApiClient.convertToType(data['agreementUrl'], 'String');
      }
      if (data.hasOwnProperty('clickwrapId')) {
        obj['clickwrapId'] = ApiClient.convertToType(data['clickwrapId'], 'String');
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('consumerDisclosureEnabled')) {
        obj['consumerDisclosureEnabled'] = ApiClient.convertToType(data['consumerDisclosureEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('consumerDisclosureHtml')) {
        obj['consumerDisclosureHtml'] = ApiClient.convertToType(data['consumerDisclosureHtml'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], Object);
      }
      if (data.hasOwnProperty('dataFields')) {
        obj['dataFields'] = ApiClient.convertToType(data['dataFields'], [DataField]);
      }
      if (data.hasOwnProperty('declinedOn')) {
        obj['declinedOn'] = ApiClient.convertToType(data['declinedOn'], Object);
      }
      if (data.hasOwnProperty('documentData')) {
        obj['documentData'] = ApiClient.convertToType(data['documentData'], {'String': 'String'});
      }
      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [Document]);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
      }
      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = DisplaySettings.constructFromObject(data['settings']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('style')) {
        obj['style'] = UserAgreementResponseStyle.constructFromObject(data['style']);
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('versionId')) {
        obj['versionId'] = ApiClient.convertToType(data['versionId'], 'String');
      }
      if (data.hasOwnProperty('versionNumber')) {
        obj['versionNumber'] = ApiClient.convertToType(data['versionNumber'], 'Number');
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
   * Date that the client last completed the agreement.  This property is null if `agreementUrl` is not null and `status` is not  `agreed`.
   * @member {Object} agreedOn
   */
  exports.prototype['agreedOn'] = undefined;
  /**
   * The agreement ID.
   * @member {String} agreementId
   */
  exports.prototype['agreementId'] = undefined;
  /**
   * When not null, an agreement is required for user specified by  `clientUserId`.  When missing the user specified by `clientUserId` has already agreed and does not require a new acceptance.  Use this URL to render the agreement in a web page.  <!-- or redirected to when providing redirect_url as a query parameter. --> 
   * @member {String} agreementUrl
   */
  exports.prototype['agreementUrl'] = undefined;
  /**
   * The ID of the clickwrap.
   * @member {String} clickwrapId
   */
  exports.prototype['clickwrapId'] = undefined;
  /**
   * A unique value that identifies a user.\\nYou can use anything that your system uses\\nto identify unique users, such as\\nemployee IDs, email addresses, and surrogate keys as the value of `clientUserId`.\\n\\nA clickwrap with a specific `clientUserId` will not appear again\\nonce it has been accepted.\\n\"
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * **True** if consumer disclosure was required by this agreement.
   * @member {Boolean} consumerDisclosureEnabled
   */
  exports.prototype['consumerDisclosureEnabled'] = undefined;
  /**
   * The customer-branded HTML with the Electronic Record and Signature Disclosure information
   * @member {String} consumerDisclosureHtml
   */
  exports.prototype['consumerDisclosureHtml'] = undefined;
  /**
   * The date when the clickwrap was created. May be null.
   * @member {Object} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * The list of all the data fields available for the clickwrap (custom fields and standard fields).
   * @member {Array.<module:model/DataField>} dataFields
   */
  exports.prototype['dataFields'] = undefined;
  /**
   * The date when the user declined the most recent required agreement.  This property is valid only when `status` is `declined`. Otherwise it is null.
   * @member {Object} declinedOn
   */
  exports.prototype['declinedOn'] = undefined;
  /**
   * This property specifies the data used to create a clickwrap with [dynamic content][].    [dynamic content]: /docs/click-api/click101/customize-clickwrap-fields/#embed-clickwraps-that-contain-dynamic-content 
   * @member {Object.<String, String>} documentData
   */
  exports.prototype['documentData'] = undefined;
  /**
   * An array of documents.
   * @member {Array.<module:model/Document>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * A customer-defined string you can use in requests. This string will appear in the corresponding response.
   * @member {String} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * The URL redirected to after the agreement was completed.
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * The display settings for this agreement.
   * @member {module:model/DisplaySettings} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * User agreement status. One of:  - `created` - `agreed` - `declined`
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/UserAgreementResponseStyle} style
   */
  exports.prototype['style'] = undefined;
  /**
   * The human-readable semver version string.
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * The ID of the version.
   * @member {String} versionId
   */
  exports.prototype['versionId'] = undefined;
  /**
   * Version of the clickwrap.
   * @member {Number} versionNumber
   */
  exports.prototype['versionNumber'] = undefined;



  return exports;
}));


