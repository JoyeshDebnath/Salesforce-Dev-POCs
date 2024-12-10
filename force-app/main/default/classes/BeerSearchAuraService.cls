public with sharing class BeerSearchAuraService {
    @AuraEnabled
    public static List<sObject> getBeerSearchResult(String searchParameter){
        
        String likeParam='%'+searchParameter+'%';
        String Query='';
        if(searchParameter!=null){
            Query = 'SELECT Id,Name,Image__c ,Alcohol__c,brewery_id__c,brewery_Name__c,Id__c,Price__c,Remaining_Quantity__c,Tags__c,Total_Quantity__c FROM Beer__c WHERE Name LIKE : likeParam LIMIT 50';
        }else{
            Query = 'SELECT Id,Name,Image__c,Alcohol__c,brewery_id__c,brewery_Name__c,Id__c,Price__c,Remaining_Quantity__c,Tags__c,Total_Quantity__c FROM Beer__c  LIMIT 50';
        }
        
        List<sObject> filteredBeerList=Database.query(Query);
        return filteredBeerList;
    }
}