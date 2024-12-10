/**
* @File Name : CaseController.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : November 26, 2024
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | November 26, 2024 |   | Initial Version
**/

public class CaseController {
	@AuraEnabled(cacheable=true)
	public static List<Case> getAllCases(String subject){
		
		String key='%'+subject+'%';
		
		List<Case> caseList=[SELECT Id,Subject,Description,Status,Origin FROM Case WHERE Subject LIKE : key ];
		
		return caseList;

	}
}