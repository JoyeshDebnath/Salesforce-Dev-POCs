/**
* @File Name : CustomLookupController.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : December 3, 2024
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | December 3, 2024 |   | Initial Version
**/

public class CustomLookupController {
/*
	String Objectname 
	String fieldAPI name 
	String search param 

*/

	@AuraEnabled(cacheable=true)
	public static List<sObject> findRecords(String objectName,String fieldApiName,String searchvalue){
		String key =  '%'+searchvalue+'%';
		String Query='SELECT Id,'+fieldApiName+' FROM '+objectName + ' WHERE '+fieldApiName +' LIKE : key ';
		List<sObject> sobjectlist=Database.query(Query);
		return sobjectlist;
	}
}