# OpenApiDefinition.ProviderApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**browseFiles**](ProviderApi.md#browseFiles) | **GET** /browse | 
[**deleteFile**](ProviderApi.md#deleteFile) | **DELETE** /delete | 
[**downloadFile**](ProviderApi.md#downloadFile) | **GET** /download | 
[**renameFile**](ProviderApi.md#renameFile) | **PATCH** /rename | 
[**uploadFile**](ProviderApi.md#uploadFile) | **POST** /upload | 
[**welcoming**](ProviderApi.md#welcoming) | **GET** /welcome | 

<a name="browseFiles"></a>
# **browseFiles**
> [FileInfo] browseFiles(path)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ProviderApi();
let path = "path_example"; // String | 

apiInstance.browseFiles(path, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 

### Return type

[**[FileInfo]**](FileInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="deleteFile"></a>
# **deleteFile**
> &#x27;String&#x27; deleteFile(path)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ProviderApi();
let path = "path_example"; // String | 

apiInstance.deleteFile(path, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="downloadFile"></a>
# **downloadFile**
> &#x27;Blob&#x27; downloadFile(filename, path)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ProviderApi();
let filename = "filename_example"; // String | 
let path = "path_example"; // String | 

apiInstance.downloadFile(filename, path, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | **String**|  | 
 **path** | **String**|  | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="renameFile"></a>
# **renameFile**
> &#x27;String&#x27; renameFile(path, newname)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ProviderApi();
let path = "path_example"; // String | 
let newname = "newname_example"; // String | 

apiInstance.renameFile(path, newname, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**|  | 
 **newname** | **String**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="uploadFile"></a>
# **uploadFile**
> &#x27;String&#x27; uploadFile(opts)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ProviderApi();
let opts = { 
  'body': new OpenApiDefinition.UploadBody(), // UploadBody | 
  'path': "path_example" // String | 
};
apiInstance.uploadFile(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UploadBody**](UploadBody.md)|  | [optional] 
 **path** | **String**|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="welcoming"></a>
# **welcoming**
> &#x27;String&#x27; welcoming()



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ProviderApi();
apiInstance.welcoming((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

