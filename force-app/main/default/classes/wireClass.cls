public with sharing class wireClass {
    @AuraEnabled(cacheable = true)
    public static List<Case> getAllCases(String subject){
            String key='%'+subject+'%';
            
            List<Case> caseList=[SELECT Id,Subject,Description,Priority,Status,Origin FROM Case WHERE Subject LIKE:key];
            return caseList;

    }
}