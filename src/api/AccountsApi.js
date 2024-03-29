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
	define(['Configuration', 'ApiClient', 'model/BulkClickwrapRequest', 'model/ClickwrapAgreementsResponse', 'model/ClickwrapRequest', 'model/ClickwrapTransferRequest', 'model/ClickwrapVersionDeleteResponse', 'model/ClickwrapVersionResponse', 'model/ClickwrapVersionSummaryResponse', 'model/ClickwrapVersionsDeleteResponse', 'model/ClickwrapVersionsPagedResponse', 'model/ClickwrapVersionsResponse', 'model/ClickwrapsDeleteResponse', 'model/Document', 'model/ErrorDetails', 'model/ServiceInformation', 'model/UserAgreementRequest', 'model/UserAgreementResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BulkClickwrapRequest'), require('../model/ClickwrapAgreementsResponse'), require('../model/ClickwrapRequest'), require('../model/ClickwrapTransferRequest'), require('../model/ClickwrapVersionDeleteResponse'), require('../model/ClickwrapVersionResponse'), require('../model/ClickwrapVersionSummaryResponse'), require('../model/ClickwrapVersionsDeleteResponse'), require('../model/ClickwrapVersionsPagedResponse'), require('../model/ClickwrapVersionsResponse'), require('../model/ClickwrapsDeleteResponse'), require('../model/Document'), require('../model/ErrorDetails'), require('../model/ServiceInformation'), require('../model/UserAgreementRequest'), require('../model/UserAgreementResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignClick) {
      root.DocusignClick = {};
    }
    root.DocusignClick.AccountsApi = factory(root.DocusignClick.Configuration, root.DocusignClick.ApiClient, root.DocusignClick.BulkClickwrapRequest, root.DocusignClick.ClickwrapAgreementsResponse, root.DocusignClick.ClickwrapRequest, root.DocusignClick.ClickwrapTransferRequest, root.DocusignClick.ClickwrapVersionDeleteResponse, root.DocusignClick.ClickwrapVersionResponse, root.DocusignClick.ClickwrapVersionSummaryResponse, root.DocusignClick.ClickwrapVersionsDeleteResponse, root.DocusignClick.ClickwrapVersionsPagedResponse, root.DocusignClick.ClickwrapVersionsResponse, root.DocusignClick.ClickwrapsDeleteResponse, root.DocusignClick.Document, root.DocusignClick.ErrorDetails, root.DocusignClick.ServiceInformation, root.DocusignClick.UserAgreementRequest, root.DocusignClick.UserAgreementResponse);
  }
}(this, function(Configuration, ApiClient, BulkClickwrapRequest, ClickwrapAgreementsResponse, ClickwrapRequest, ClickwrapTransferRequest, ClickwrapVersionDeleteResponse, ClickwrapVersionResponse, ClickwrapVersionSummaryResponse, ClickwrapVersionsDeleteResponse, ClickwrapVersionsPagedResponse, ClickwrapVersionsResponse, ClickwrapsDeleteResponse, Document, ErrorDetails, ServiceInformation, UserAgreementRequest, UserAgreementResponse) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional) Callback function to receive the result of the createBulkClickwrapAgreements operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~createBulkClickwrapAgreementsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Starts an export of clickwrap agreements for a specified date range.
     * Starts an asynchronus process to export clickwrap agreements for a specified date range.
An email will be sent to the creator after it has been processed.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkClickwrapRequest} optsOrCallback.bulkClickwrapRequest Data used to start a bulk agreements export.
     * @param {module:api/AccountsApi~createBulkClickwrapAgreementsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createBulkClickwrapAgreements = function(accountId, clickwrapId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkClickwrapRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBulkClickwrapAgreements");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling createBulkClickwrapAgreements");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/bulk_agreements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createClickwrap operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~createClickwrapCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionSummaryResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a clickwrap for an account.
     * Creates a clickwrap for an account.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ClickwrapRequest} optsOrCallback.clickwrapRequest Request body for working with clickwrap.
     * @param {module:api/AccountsApi~createClickwrapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionSummaryResponse}
     */
    this.createClickwrap = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['clickwrapRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createClickwrap");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionSummaryResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createClickwrapVersion operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~createClickwrapVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionSummaryResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a new clickwrap version.
     * Creates a new version of an existing clickwrap. In a new version, you can replace the uploaded documents, change the display settings, and change the name of the clickwrap. The version number is automatically incremented based on the last version of the clickwrap.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ClickwrapRequest} optsOrCallback.clickwrapRequest Request body for working with clickwrap.
     * @param {module:api/AccountsApi~createClickwrapVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionSummaryResponse}
     */
    this.createClickwrapVersion = function(accountId, clickwrapId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['clickwrapRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createClickwrapVersion");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling createClickwrapVersion");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionSummaryResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/versions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createHasAgreed operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~createHasAgreedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAgreementResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a unique URL for the agreement that you can embed in your application.
     * Creates a unique URL for the agreement
that you can embed in your application.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage` and `click.send`.

The request must include at least the
`clientUserId`. This is a value that you
generate to identify the unique recipient
of the agreement.

If you are using a [dynamic content][] document,
you can supply the values in the documentData
property of the request, like this:

```json
{
  "clientUserId": "cl-bc7f-48a9",
  "documentData": {
    "fullName": "T. J. Fanning",
    "email": "tj@example.com",
    "company": "Fanning Indusdtries",
    "title": "Cat wrangler",
    "date": "2022-10-13T05:17:14-07:00"
  }
}
```

A response will look like this.
The `agreementUrl` is unique to the user identified by the `clientUserId`.
Your user can open the URL to approve the agreement.
The `documentData` property appears only if you provided it in the request.

```json
{
  "accountId": "624e3e00-xxxx-xxxx-xxxx-43918c520dab",
  "clickwrapId": "0e64e4a7-xxxx-xxxx-xxxx-ce5a93b162af",
  "clientUserId": "tcl-bc7f-48a9j",
  "agreementId": "1f346c7d-xxxx-xxxx-xxxx-a5c968666785",
  "documents": [ . . .],
  "consumerDisclosureEnabled": true,
  "agreementUrl": "https://demo.docusign.net/clickapi/v1/redeem?agreementToken=AcTZT8g ... cxEqrUsA1lQ8DPPy05dE0",
  "createdOn": "2022-10-20T16:27:25.1287685Z",
  "status": "created",
  "versionId": "5957716d-xxxx-xxxx-xxxx-e1594f00ff12",
  "versionNumber": 1,
  "settings": {
    "displayName": "Agree with me",
    "hasDeclineButton": true,
    .  . .
    "statementAlignment": "bottom"
  },
  "documentData": {
    "fullName": "T. J. Fanning",
    "email": "tj@example.com",
    "company": "Fanning Indusdtries",
    "title": "Cat wrangler",
    "date": "2022-10-13T05:17:14-07:00"
  }
}
```

This method returns the following
result codes and response bodies
depending on whether the user has agreed.


| Agreed | Response code | Response body          |
| :----- | :------------ | :--------------------- |
| No     | 201           | Full response as above |
| Yes    | 200           | No response (empty)    |


### Related topics

- [Add dynamic content to your clickwrap][dynamic content]
- [How to embed a clickwrap][embed-howto]


[dynamic content]:  /docs/click-api/click101/customize-clickwrap-fields/#add-dynamic-content-to-your-clickwrap
[embedding]:        /docs/click-api/click101/customize-clickwrap-fields/#embed-clickwraps-that-contain-dynamic-content
[embed-howto]:      /docs/click-api/how-to/embed-clickwraps/

     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/UserAgreementRequest} optsOrCallback.userAgreementRequest Data used to create the agreement.
     * @param {module:api/AccountsApi~createHasAgreedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserAgreementResponse}
     */
    this.createHasAgreed = function(accountId, clickwrapId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userAgreementRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createHasAgreed");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling createHasAgreed");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserAgreementResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/agreements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteClickwrap operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteClickwrapCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionsDeleteResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes a clickwrap and all of its versions.
     * Deletes the clickwrap specified by `clickwrapId` and all of its versions.
Active clickwraps are not deleted

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.versions A comma-separated list of versions to delete.
     * @param {module:api/AccountsApi~deleteClickwrapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionsDeleteResponse}
     */
    this.deleteClickwrap = function(accountId, clickwrapId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteClickwrap");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling deleteClickwrap");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId
      };
      var queryParams = {
        'versions': optsOrCallback['versions']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionsDeleteResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteClickwrapVersion operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteClickwrapVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionDeleteResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes a clickwrap version by version ID.
     * Deletes the clickwrap version specified by `versionId` of the clickwrap specified by `clickwrapId`.

**Note:** This endpoint requires the version ID (a GUID), not the version number (an integer).

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {String} versionId The ID of the clickwrap version.
     * @param {module:api/AccountsApi~deleteClickwrapVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionDeleteResponse}
     */
    this.deleteClickwrapVersion = function(accountId, clickwrapId, versionId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteClickwrapVersion");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling deleteClickwrapVersion");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling deleteClickwrapVersion");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionDeleteResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/versions/{versionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteClickwrapVersions operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteClickwrapVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionsDeleteResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the versions of a clickwrap.
     * Deletes all versions of a clickwrap,
or only the ones specified in the
`clickwrapVersionIds` query parameter.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.clickwrapVersionIds A comma-separated list of clickwrap version IDs to delete.
     * @param {module:api/AccountsApi~deleteClickwrapVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionsDeleteResponse}
     */
    this.deleteClickwrapVersions = function(accountId, clickwrapId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteClickwrapVersions");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling deleteClickwrapVersions");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId
      };
      var queryParams = {
        'clickwrapVersionIds': optsOrCallback['clickwrapVersionIds']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionsDeleteResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/versions', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteClickwraps operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteClickwrapsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapsDeleteResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes clickwraps for an account.
     * Deletes all clickwraps for an account
or only the ones specified in the
`clickwrapIds` query parameter.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.clickwrapIds A comma-separated list of clickwrap IDs to delete.
     * @param {module:api/AccountsApi~deleteClickwrapsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapsDeleteResponse}
     */
    this.deleteClickwraps = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteClickwraps");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'clickwrapIds': optsOrCallback['clickwrapIds']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapsDeleteResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getAgreement operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getAgreementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAgreementResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a specific agreement for a specified clickwrap.
     * Gets the agreement specified by `agreementId`.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage` or `click.send`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {String} agreementId The agreement ID.
     * @param {module:api/AccountsApi~getAgreementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserAgreementResponse}
     */
    this.getAgreement = function(accountId, clickwrapId, agreementId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAgreement");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling getAgreement");
      }

      // verify the required parameter 'agreementId' is set
      if (agreementId === undefined || agreementId === null) {
        throw new Error("Missing the required parameter 'agreementId' when calling getAgreement");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId,
        'agreementId': agreementId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserAgreementResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/agreements/{agreementId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getAgreementDocument operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getAgreementDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Document} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Downloads a document at an order within the agreement.
     * Downloads a specific document from the agreement presented to the user.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.sign`
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {String} versionId The ID of the clickwrap version.
     * @param {String} orderOrDisclosure The order of the document or consumer_disclosure.
     * @param {module:api/AccountsApi~getAgreementDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Document}
     */
    this.getAgreementDocument = function(accountId, clickwrapId, versionId, orderOrDisclosure, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAgreementDocument");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling getAgreementDocument");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getAgreementDocument");
      }

      // verify the required parameter 'orderOrDisclosure' is set
      if (orderOrDisclosure === undefined || orderOrDisclosure === null) {
        throw new Error("Missing the required parameter 'orderOrDisclosure' when calling getAgreementDocument");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId,
        'versionId': versionId,
        'orderOrDisclosure': orderOrDisclosure
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Document;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/versions/{versionId}/documents/{orderOrDisclosure}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getAgreementPdf operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getAgreementPdfCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the completed user agreement PDF.
     * Gets the PDF of  `agreementId` for the clickwrap specified by `clickwrapId`.

The response to this method is the bytes of the PDF file.
The response includes the HTTP header `application/pdf`.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage` or `click.send`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {String} agreementId The agreement ID.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeCoc When **true,** the Certificate of Completion will be appended to the PDF. The default value is **false.**
     * @param {module:api/AccountsApi~getAgreementPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getAgreementPdf = function(accountId, clickwrapId, agreementId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAgreementPdf");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling getAgreementPdf");
      }

      // verify the required parameter 'agreementId' is set
      if (agreementId === undefined || agreementId === null) {
        throw new Error("Missing the required parameter 'agreementId' when calling getAgreementPdf");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId,
        'agreementId': agreementId
      };
      var queryParams = {
        'include_coc': optsOrCallback['includeCoc']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/pdf'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/agreements/{agreementId}/download', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getClickwrap operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getClickwrapCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a  single clickwrap object.
     * Retrieves the definition of the specified clickwrap.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {module:api/AccountsApi~getClickwrapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionResponse}
     */
    this.getClickwrap = function(accountId, clickwrapId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getClickwrap");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling getClickwrap");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getClickwrapAgreements operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getClickwrapAgreementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapAgreementsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get user agreements
     * Retrieves the user agreements for a specified clickwrap. Each `userAgreementResponse` object describes a single user's response to the clickwrap. You can also filter the agreements by date, status, page number, and client user ID.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.clientUserId The client user ID to filter to a single user's agreements.
     * @param {String} optsOrCallback.fromDate The earliest date to return agreements from.
     * @param {String} optsOrCallback.pageNumber The results for this endpoint are paginated. Use this parameter to indicate which page to return. The `minimumPagesRemaining` value in the response indicates whether to continue querying for additional pages.  For example, if the page size is 40: * If this property is set to 0 (the default), the endpoint returns results 1-40. * If this property is set to 1, the endpoint returns results 41-80.  The default value is 0. 
     * @param {String} optsOrCallback.status User agreement status. One of:  - `created` - `agreed` - `declined`
     * @param {String} optsOrCallback.toDate The latest date to return agreements from.
     * @param {module:api/AccountsApi~getClickwrapAgreementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapAgreementsResponse}
     */
    this.getClickwrapAgreements = function(accountId, clickwrapId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getClickwrapAgreements");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling getClickwrapAgreements");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId
      };
      var queryParams = {
        'client_user_id': optsOrCallback['clientUserId'],
        'from_date': optsOrCallback['fromDate'],
        'page_number': optsOrCallback['pageNumber'],
        'status': optsOrCallback['status'],
        'to_date': optsOrCallback['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapAgreementsResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getClickwrapVersion operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getClickwrapVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a specific version of a clickwrap by version ID.
     * Gets the version specified by `versionId`  from the clickwrap `clickwrapId`.

**Note:** This endpoint requires the version ID (a GUID), not the version number (an integer).

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {String} versionId The ID of the clickwrap version.
     * @param {module:api/AccountsApi~getClickwrapVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionResponse}
     */
    this.getClickwrapVersion = function(accountId, clickwrapId, versionId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getClickwrapVersion");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling getClickwrapVersion");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getClickwrapVersion");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/versions/{versionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getClickwrapVersionAgreements operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getClickwrapVersionAgreementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapAgreementsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the agreement responses for a clickwrap version by version ID.
     * Gets the agreement responses for a specific version.

**Note:** This endpoint requires the version ID (a GUID), not the version number (an integer).

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {String} versionId The ID of the clickwrap version.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.clientUserId The client user ID to filter to a single user's agreements.
     * @param {String} optsOrCallback.fromDate The earliest date to return agreements from.
     * @param {String} optsOrCallback.pageNumber The results for this endpoint are paginated. Use this parameter to indicate which page to return. The `minimumPagesRemaining` value in the response indicates whether to continue querying for additional pages.  For example, if the page size is 40: * If this property is set to 0 (the default), the endpoint returns results 1-40. * If this property is set to 1, the endpoint returns results 41-80.  The default value is 0. 
     * @param {String} optsOrCallback.status User agreement status. One of:  - `created` - `agreed` - `declined`
     * @param {String} optsOrCallback.toDate The latest date to return agreements from.
     * @param {module:api/AccountsApi~getClickwrapVersionAgreementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapAgreementsResponse}
     */
    this.getClickwrapVersionAgreements = function(accountId, clickwrapId, versionId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getClickwrapVersionAgreements");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling getClickwrapVersionAgreements");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getClickwrapVersionAgreements");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId,
        'versionId': versionId
      };
      var queryParams = {
        'client_user_id': optsOrCallback['clientUserId'],
        'from_date': optsOrCallback['fromDate'],
        'page_number': optsOrCallback['pageNumber'],
        'status': optsOrCallback['status'],
        'to_date': optsOrCallback['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapAgreementsResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/versions/{versionId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getClickwrapVersions operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getClickwrapVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionsPagedResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets all the versions of a clickwrap.
     * Gets all the versions of a clickwrap for an account.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {module:api/AccountsApi~getClickwrapVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionsPagedResponse}
     */
    this.getClickwrapVersions = function(accountId, clickwrapId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getClickwrapVersions");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling getClickwrapVersions");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionsPagedResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getClickwraps operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getClickwrapsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets all the clickwraps for a user.
     * Gets all the clickwraps for a user. 

**Note:** This endpoint returns a list of `clickwrapVersionSummaryResponse` objects. Each version of each clickwrap is returned as a separate entry in the list.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.

     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.filter Names of columns by which to filter and values to match on.
     * @param {String} optsOrCallback.fromDate The earliest date to return clickwraps from.
     * @param {String} optsOrCallback.name The name of the clickwraps to return.
     * @param {String} optsOrCallback.ownerUserId The user ID of the owner.
     * @param {String} optsOrCallback.pageNumber The results for this endpoint are paginated. Use this parameter to indicate which page to return. The `minimumPagesRemaining` value in the response indicates whether to continue querying for additional pages.  For example, if the page size is 40: * If this property is set to 0 (the default), the endpoint returns results 1-40. * If this property is set to 1, the endpoint returns results 41-80.  The default value is 0. 
     * @param {String} optsOrCallback.status The status of the clickwraps to filter by. One of:  - `active` - `inactive`  
     * @param {String} optsOrCallback.toDate The latest date to return clickwraps from.
     * @param {module:api/AccountsApi~getClickwrapsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionsResponse}
     */
    this.getClickwraps = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getClickwraps");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'filter': optsOrCallback['filter'],
        'from_date': optsOrCallback['fromDate'],
        'name': optsOrCallback['name'],
        'ownerUserId': optsOrCallback['ownerUserId'],
        'page_number': optsOrCallback['pageNumber'],
        'status': optsOrCallback['status'],
        'to_date': optsOrCallback['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionsResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getServiceInformation operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getServiceInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the current version and other information about the Click API.
     * The response includes information about the Click API, including the service version, build version, and linked sites.

This method does not require authentication.
     * @param {module:api/AccountsApi~getServiceInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInformation}
     */
    this.getServiceInformation = function(callback) {
      var postBody = null;

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ServiceInformation;

      return this.apiClient.callApi(
        '/service_information', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateClickwrap operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateClickwrapCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionSummaryResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update a clickwrap by ID.
     * Update a subset of properties on the clickwrap.

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ClickwrapTransferRequest} optsOrCallback.clickwrapTransferRequest Data used to transfer a clickwrap from one user to another.
     * @param {module:api/AccountsApi~updateClickwrapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionSummaryResponse}
     */
    this.updateClickwrap = function(accountId, clickwrapId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['clickwrapTransferRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateClickwrap");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling updateClickwrap");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionSummaryResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateClickwrapVersion operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateClickwrapVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClickwrapVersionSummaryResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates clickwrap version status and ownership.
     * Updates the clickwrap version status and ownership by transferring from previous user ID to new user ID.

**Note:** This endpoint requires the version ID (a GUID), not the version number (an integer).

[Required authentication scopes](/docs/click-api/click101/auth/): `click.manage`.
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} clickwrapId The ID of the clickwrap.
     * @param {String} versionId The ID of the clickwrap version.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ClickwrapRequest} optsOrCallback.clickwrapRequest Request body for working with clickwrap.
     * @param {module:api/AccountsApi~updateClickwrapVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClickwrapVersionSummaryResponse}
     */
    this.updateClickwrapVersion = function(accountId, clickwrapId, versionId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['clickwrapRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateClickwrapVersion");
      }

      // verify the required parameter 'clickwrapId' is set
      if (clickwrapId === undefined || clickwrapId === null) {
        throw new Error("Missing the required parameter 'clickwrapId' when calling updateClickwrapVersion");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling updateClickwrapVersion");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'clickwrapId': clickwrapId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ClickwrapVersionSummaryResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/clickwraps/{clickwrapId}/versions/{versionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));