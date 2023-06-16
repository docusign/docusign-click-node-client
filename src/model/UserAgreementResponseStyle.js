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
    define(['ApiClient', 'model/AgreeButtonStyles', 'model/AgreementStatementStyles', 'model/ContainerStyles', 'model/DisclosureLinkStyles', 'model/DocumentLinkStyles', 'model/HeaderStyles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgreeButtonStyles'), require('./AgreementStatementStyles'), require('./ContainerStyles'), require('./DisclosureLinkStyles'), require('./DocumentLinkStyles'), require('./HeaderStyles'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.UserAgreementResponseStyle = factory(root.DocusignClick.ApiClient, root.DocusignClick.AgreeButtonStyles, root.DocusignClick.AgreementStatementStyles, root.DocusignClick.ContainerStyles, root.DocusignClick.DisclosureLinkStyles, root.DocusignClick.DocumentLinkStyles, root.DocusignClick.HeaderStyles);
  }
}(this, function(ApiClient, AgreeButtonStyles, AgreementStatementStyles, ContainerStyles, DisclosureLinkStyles, DocumentLinkStyles, HeaderStyles) {
  'use strict';


  /**
   * The UserAgreementResponseStyle model module.
   * @module model/UserAgreementResponseStyle
   */

  /**
   * Constructs a new <code>UserAgreementResponseStyle</code>.
   * This property specifies the custom style provided when the agreement was created by [customizing the template appearance][].    [customizing the template appearance]: /docs/click-api/click101/customize-elastic-template-appearance/ 
   * @alias module:model/UserAgreementResponseStyle
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAgreementResponseStyle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAgreementResponseStyle} obj Optional instance to populate.
   * @return {module:model/UserAgreementResponseStyle} The populated <code>UserAgreementResponseStyle</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agreeButton')) {
        obj['agreeButton'] = AgreeButtonStyles.constructFromObject(data['agreeButton']);
      }
      if (data.hasOwnProperty('agreementStatement')) {
        obj['agreementStatement'] = AgreementStatementStyles.constructFromObject(data['agreementStatement']);
      }
      if (data.hasOwnProperty('container')) {
        obj['container'] = ContainerStyles.constructFromObject(data['container']);
      }
      if (data.hasOwnProperty('disclosureLink')) {
        obj['disclosureLink'] = DisclosureLinkStyles.constructFromObject(data['disclosureLink']);
      }
      if (data.hasOwnProperty('documentLink')) {
        obj['documentLink'] = DocumentLinkStyles.constructFromObject(data['documentLink']);
      }
      if (data.hasOwnProperty('header')) {
        obj['header'] = HeaderStyles.constructFromObject(data['header']);
      }
      if (data.hasOwnProperty('scrollControl')) {
        obj['scrollControl'] = ApiClient.convertToType(data['scrollControl'], 'String');
      }
    }
    return obj;
  }

  /**
   * Control the display of the Agree button.
   * @member {module:model/AgreeButtonStyles} agreeButton
   */
  exports.prototype['agreeButton'] = undefined;
  /**
   * Control the display of the agreement statement.
   * @member {module:model/AgreementStatementStyles} agreementStatement
   */
  exports.prototype['agreementStatement'] = undefined;
  /**
   * Control the overall clickwrap container and inherited styles such as font.
   * @member {module:model/ContainerStyles} container
   */
  exports.prototype['container'] = undefined;
  /**
   * Control the display of the disclosure link.
   * @member {module:model/DisclosureLinkStyles} disclosureLink
   */
  exports.prototype['disclosureLink'] = undefined;
  /**
   * Control the display of the agreement statement.
   * @member {module:model/DocumentLinkStyles} documentLink
   */
  exports.prototype['documentLink'] = undefined;
  /**
   * Control the display of the header.
   * @member {module:model/HeaderStyles} header
   */
  exports.prototype['header'] = undefined;
  /**
   * Control the scrolling of the document either by browser or by a scrollbar in the clickwrap shell. Can only be applied if the clickwrap `format` is `inline`.
   * @member {module:model/UserAgreementResponseStyle.ScrollControlEnum} scrollControl
   */
  exports.prototype['scrollControl'] = undefined;


  /**
   * Allowed values for the <code>scrollControl</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScrollControlEnum = {
    /**
     * value: "browser"
     * @const
     */
    browser: "browser",

    /**
     * value: "fill_parent"
     * @const
     */
    fillParent: "fill_parent"
  };


  return exports;
}));


